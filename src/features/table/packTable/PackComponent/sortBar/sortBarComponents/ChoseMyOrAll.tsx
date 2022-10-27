import React, { memo, useState } from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';

import { useAppDispatch, useAppSelector } from '../../../../../../app/store/store';
import { ReturnComponentType } from '../../../../../../common/types';
import { setUserIdAC } from '../../../reducer/packTableReducer';

import s from './styles/Search.module.scss';

export const ChoseMyOrAll = memo((): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const userId = useAppSelector(state => state.profile._id);

  const [alignment, setAlignment] = useState<'My' | 'All'>('All');

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: typeof alignment,
  ): void => {
    setAlignment(newAlignment);
    if (newAlignment === 'All') dispatch(setUserIdAC(''));
    if (newAlignment === 'My') dispatch(setUserIdAC(userId));
  };

  return (
    <div className={s.search}>
      <Typography component="p">Show packs cards</Typography>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="My">My</ToggleButton>
        <ToggleButton value="All">All</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
});
