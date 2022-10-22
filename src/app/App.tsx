import React, { useEffect } from 'react';

import { CircularProgress, createTheme, LinearProgress, ThemeProvider } from '@mui/material';

import { ErrorSnackbar } from '../common/ErrorSnackbar/ErrorSnackbar';
import { ReturnComponentType } from '../types';

import s from './App.module.css';
import { Header } from './header/Header';
import { Pages } from './pages/Pages';
import { initializeAppTC } from './store/app-reducer';
import { useAppDispatch, useAppSelector } from './store/store';

const App = (): ReturnComponentType => {
  const status = useAppSelector(state => state.app.status);
  const isInitialized = useAppSelector(state => state.app.isInitialized);
  const dispatch = useAppDispatch();
  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat',
    },
  });

  useEffect(() => {
    dispatch(initializeAppTC());
  }, [dispatch]);

  if (!isInitialized) {
    return (
      <div className={s.circularProgress}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        {status === 'loading' && <LinearProgress color="secondary" />}
        <Pages />
        <ErrorSnackbar />
      </ThemeProvider>
    </div>
  );
};

export default App;
