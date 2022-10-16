import React, { useEffect } from 'react';

import './App.css';
import { Button, CircularProgress, LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import imgIncubator from '../assets/img/Group 753.png';
import { ErrorSnackbar } from '../common/ErrorSnackbar/ErrorSnackbar';
import { ReturnComponentType } from '../types';

import ButtonAndProfile from './buttutAndProfile/ButtonAndProfile';
import { Pages, PATH } from './pages/Pages';
import { initializeAppTC } from './store/app-reducer';
import { useAppDispatch, useAppSelector } from './store/store';

const App = (): ReturnComponentType => {
  const status = useAppSelector(state => state.app.status);
  const isInitialized = useAppSelector(state => state.app.isInitialized);
  const isLoggedIn = useAppSelector(state => state.login.isLoggedIn);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onSingInClick = (): void => {
    return navigate(PATH.LOGIN);
  };

  useEffect(() => {
    dispatch(initializeAppTC());
  }, [dispatch]);

  if (!isInitialized) {
    return (
      <div
        style={{
          position: 'fixed',
          top: '30%',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="App">
      <div className="AppHeader">
        <img className="IconIT" src={imgIncubator} alt="IT-INCUBATOR" />
        {!isLoggedIn ? (
          <Button
            onClick={onSingInClick}
            style={{ borderRadius: '20px' }}
            color="primary"
            variant="contained"
            type="button"
          >
            Sing in
          </Button>
        ) : (
          <ButtonAndProfile />
        )}
      </div>
      {status === 'loading' && <LinearProgress color="secondary" />}
      <Pages />
      <ErrorSnackbar />
    </div>
  );
};

export default App;
