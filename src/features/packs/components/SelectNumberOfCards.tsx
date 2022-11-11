import React, { memo, SyntheticEvent, useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { useDebounce } from '../../../common/hooks/useDebounce';
import { ReturnComponentType } from '../../../common/types';
import { setMinMaxCountAC } from '../reducer/packsReducer';

import s from './styles/SelectNumberOfCards.module.scss';

export const SelectNumberOfCards = memo((): ReturnComponentType => {
  const maxCardsCount = useAppSelector(state => state.pack.maxCardsCount);
  const minMaxCount = useAppSelector(state => state.pack.minMaxCount);

  const dispatch = useAppDispatch();

  const [selectedCount, setSelectedCount] = useState<number[]>(minMaxCount);

  const timeWait = 700;

  const debounceSelectedCount = useDebounce<number[]>(selectedCount, timeWait);

  const handleChange = (
    event: Event | SyntheticEvent<Element, Event>,
    newValue: number | number[],
  ): void => {
    setSelectedCount(newValue as number[]);
  };

  useEffect(() => {
    dispatch(setMinMaxCountAC(debounceSelectedCount));
  }, [debounceSelectedCount, dispatch]);

  return (
    <div className={s.search}>
      <Typography component="p">Number of Cards</Typography>
      <div className={s.container}>
        <div className={s.count}>{selectedCount[0]}</div>

        <Box sx={{ width: 150, padding: '15px' }}>
          <Slider
            getAriaLabel={() => 'Cards count range'}
            max={maxCardsCount}
            value={selectedCount}
            onChange={handleChange}
            valueLabelDisplay="auto"
            disableSwap
          />
        </Box>

        <div className={s.count}>{selectedCount[1]}</div>
      </div>
    </div>
  );
});
