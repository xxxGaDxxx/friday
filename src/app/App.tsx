import React, { useEffect } from 'react';

import './App.css';
import { Button, CircularProgress, LinearProgress } from '@mui/material';

import imgIncubator from '../assets/img/Group 753.png';
import { ReturnComponentType } from '../types';

import { Pages } from './pages/Pages';
import { initializeAppTC } from './store/app-reducer';
import { useAppDispatch, useAppSelector } from './store/store';

const App = (): ReturnComponentType => {
  const status = useAppSelector(state => state.app.status);
  const isInitialized = useAppSelector(state => state.app.isInitialized);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeAppTC());
  }, [dispatch]);

  if (!isInitialized) {
    return (
      <div style={{ position: 'fixed', top: '30%', textAlign: 'center', width: '100%' }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="App">
      {/* <Header /> */}
      {/* <Pages /> */}
      <div className="AppHeader">
        <img className="IconIT" src={imgIncubator} alt="IT-INCUBATOR" />
        <Button
          style={{ borderRadius: '20px' }}
          color="primary"
          variant="contained"
          type="button"
        >
          ss
        </Button>
      </div>
      {status === 'loading' && <LinearProgress color="secondary" />}
      <Pages />
    </div>
  );
};

export default App;
