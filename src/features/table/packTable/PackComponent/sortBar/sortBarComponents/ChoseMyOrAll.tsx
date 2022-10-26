import React, { memo, useState } from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { useAppDispatch, useAppSelector } from '../../../../../../app/store/store';
import { ReturnComponentType } from '../../../../../../types';
import { setUserIdAC } from '../../../reducer/packTableReducer';

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
    <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={handleChange}>
      <ToggleButton sx={{ width: '50px', height: '50px' }} value="My">
        My
      </ToggleButton>
      <ToggleButton sx={{ width: '50px', height: '50px' }} value="All">
        All
      </ToggleButton>
    </ToggleButtonGroup>
  );
});
