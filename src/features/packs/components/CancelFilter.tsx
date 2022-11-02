import React from 'react';

import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import Box from '@mui/material/Box';

import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { ReturnComponentType } from '../../../common/types';
import {
  DEFAULT_MAX_COUNT,
  setMinMaxCountAC,
  setPackNameAC,
  setSearchAC,
  setUserIdAC,
} from '../reducer/packsReducer';

import s from './styles/CancelFilter.module.scss';

export const CancelFilter = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const cancelFilter = (): void => {
    dispatch(setPackNameAC(''));
    dispatch(setSearchAC(''));
    dispatch(setUserIdAC(''));
    dispatch(setMinMaxCountAC([0, DEFAULT_MAX_COUNT]));
  };

  return (
    <Box className={s.cancelFilter} onClick={cancelFilter}>
      <FilterAltOffIcon />
    </Box>
  );
};
