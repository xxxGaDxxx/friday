import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import debounce from 'lodash.debounce';

import { useAppDispatch, useAppSelector } from '../../../../../../app/store/store';
import { ReturnComponentType } from '../../../../../../types';
import { setMinMaxCountAC } from '../../../reducer/packTableReducer';

// const valuetext = (value: number): string => `${value}°C`;
const timeWait = 700;

export const SelectNumberOfCards = (): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const minCount = useAppSelector(state => state.pack.minCardsCount);
  const maxCount = useAppSelector(state => state.pack.maxCardsCount);

  const [value, setValue] = useState<number[]>([minCount, maxCount]);

  const handleChange = (event: Event, newValue: number | number[]): void => {
    setValue(newValue as number[]);
    debounceSelect(newValue as number[]);
  };
  const debounceSelect = debounce(count => {
    dispatch(setMinMaxCountAC(count as number[]));
  }, timeWait);

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        max={maxCount}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        disableSwap
      />
    </Box>
  );
};
