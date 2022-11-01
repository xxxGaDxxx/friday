import React, { memo, useState } from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';

import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../common/types';
import { setUserIdAC } from '../reducer/packsReducer';

import s from './styles/Search.module.scss';

export const ChooseMyOrAll = memo((): ReturnComponentType => {
  const userId = useAppSelector(state => state.profile._id);

  const dispatch = useAppDispatch();

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
      <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={handleChange}>
        <ToggleButton value="My">My</ToggleButton>
        <ToggleButton value="All">All</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
});
