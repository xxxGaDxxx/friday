import axios, { AxiosError } from 'axios';

import { setAppErrorAC, setAppStatusAC } from '../../app/store/app-reducer';
import { AppDispatchType } from '../../app/store/store';

export const errorUtils = (
  e: Error | AxiosError<{ error: string }>,
  dispatch: AppDispatchType,
): void => {
  const err = e as Error | AxiosError<{ error: string }>;

  if (axios.isAxiosError(err)) {
    const error = err.response?.data ? err.response.data.error : err.message;

    dispatch(setAppErrorAC(error));
  } else {
    dispatch(setAppErrorAC(`Native error ${err.message}`));
  }
  dispatch(setAppStatusAC('failed'));
};
