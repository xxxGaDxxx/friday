import React, { memo, SyntheticEvent, useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';

import { useAppDispatch, useAppSelector } from '../../../../../app/store/store';
import useDebounce from '../../../../../common/hooks/useDebounce';
import { ReturnComponentType } from '../../../../../types';
import { setMinMaxCountAC } from '../../reducer/packTableReducer';

// const valuetext = (value: number): string => `${value}°C`;
const timeWait = 1500;

export const SelectNumberOfCards = memo((): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const maxCardsCount = useAppSelector(state => state.pack.maxCardsCount);
  // const minMaxCount = useAppSelector(state => state.pack.minMaxCount);

  const [selectedCount, setSelectedCount] = useState<number[]>([0, maxCardsCount]);
  const debounceSelect = useDebounce<number[]>(selectedCount, timeWait);

  const handleChange = (
    event: Event | SyntheticEvent<Element, Event>,
    newValue: number | number[],
  ): void => {
    setSelectedCount(newValue as number[]);
  };

  useEffect(() => {
    dispatch(setMinMaxCountAC(debounceSelect));
  }, [debounceSelect, dispatch]);
  // useEffect(() => {
  //   setSelectedCount(minMaxCount);
  // }, [minMaxCount]);

  return (
    <div>
      <TextField
        value={selectedCount[0]}
        InputProps={{
          readOnly: true,
        }}
      />
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => 'Cards count range'}
          max={maxCardsCount}
          value={selectedCount}
          onChangeCommitted={handleChange}
          valueLabelDisplay="auto"
          disableSwap
        />
      </Box>
      <TextField
        value={selectedCount[1]}
        InputProps={{
          readOnly: true,
        }}
      />
    </div>
  );
});
