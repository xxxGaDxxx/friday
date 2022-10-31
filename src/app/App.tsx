import React, { useEffect } from 'react';

import { CircularProgress, LinearProgress, ThemeProvider } from '@mui/material';

import { ErrorSnackbar } from '../common/components/errorSnackbar/ErrorSnackbar';
import { useAppDispatch } from '../common/hooks/useAppDispatch';
import { useAppSelector } from '../common/hooks/useAppSelector';
import { ReturnComponentType } from '../common/types';
import { theme } from '../common/utils/styles/muiTheme';
import { initializeAppTC } from '../store/app-reducer';

import s from './App.module.scss';
import { Header } from './components/Header';
import { Pages } from './components/Pages';

const App = (): ReturnComponentType => {
  const status = useAppSelector(state => state.app.status);
  const isInitialized = useAppSelector(state => state.app.isInitialized);

  const dispatch = useAppDispatch();

  const isLoading: boolean = status === 'loading';

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
        <LinearProgress color="secondary" sx={{ visibility: isLoading ? 'visible' : 'hidden' }} />
        <Pages />
        <ErrorSnackbar />
      </ThemeProvider>
    </div>
  );
};

export default App;
