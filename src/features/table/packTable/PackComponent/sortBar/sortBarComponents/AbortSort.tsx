import React from 'react';

import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';

import { useAppDispatch } from '../../../../../../app/store/store';
import { ReturnComponentType } from '../../../../../../common/types';
import { setMinMaxCountAC, setPackNameAC, setUserIdAC } from '../../../reducer/packTableReducer';

import s from './styles/AbortSort.module.scss';

export const AbortSort = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const abortSortSettings = (): void => {
    // const data = {
    //   packName: '',
    //   sortPacks: '',
    //   user_id: '',
    //   // eslint-disable-next-line no-magic-numbers
    //   minMaxCount: [0, 110],
    // };
    //
    // dispatch(setAbortSortBarAC(data));
    dispatch(setPackNameAC(''));
    dispatch(setUserIdAC(''));
    // eslint-disable-next-line no-magic-numbers
    dispatch(setMinMaxCountAC([0, 110]));
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className={s.abortSort} onClick={abortSortSettings}>
      <FilterAltOffIcon />
    </div>
  );
};
