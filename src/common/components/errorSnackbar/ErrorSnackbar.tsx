import * as React from 'react';

import Snackbar from '@mui/material/Snackbar';
import { useDispatch } from 'react-redux';

import { setAppErrorAC } from '../../../store/app-reducer';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ReturnComponentType } from '../../types';

import { Alert } from './components/Alert';

export const ErrorSnackbar = (): ReturnComponentType => {
  const error = useAppSelector(state => state.app.error);

  const dispatch = useDispatch();

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string): void => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setAppErrorAC(null));
  };

  return (
    <Snackbar open={!!error} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        {error}
      </Alert>
    </Snackbar>
  );
};
