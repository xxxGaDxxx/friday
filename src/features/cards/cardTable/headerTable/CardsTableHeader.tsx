import React from 'react';

import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { ImageArrow } from '../../../../common/components/imgArrow/ImageArrow';
import { useAppDispatch } from '../../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../../common/types';
import { onSortRows } from '../../../../common/utils/sortRows';

import { CardsTableHeaderType } from './type/CardsTableHeaderType';

export const CardsTableHeader = ({ isMyPack }: CardsTableHeaderType): ReturnComponentType => {
  const sortCards = useAppSelector(state => state.card.sortCards);

  const dispatch = useAppDispatch();

  return (
    <TableHead>
      <TableRow sx={{ background: '#EFEFEF' }}>
        <TableCell onClick={() => onSortRows('question', dispatch, sortCards)}>
          Question
          {sortCards === '0question' || sortCards === '1question' ? (
            <ImageArrow sort={sortCards} />
          ) : (
            ''
          )}
        </TableCell>
        <TableCell align="right" onClick={() => onSortRows('answer', dispatch, sortCards)}>
          Answer
          {sortCards === '0answer' || sortCards === '1answer' ? (
            <ImageArrow sort={sortCards} />
          ) : (
            ''
          )}
        </TableCell>
        <TableCell align="right" onClick={() => onSortRows('updatedCard', dispatch, sortCards)}>
          Last Updated
          {sortCards === '0updated' || sortCards === '1updated' ? (
            <ImageArrow sort={sortCards} />
          ) : (
            ''
          )}
        </TableCell>
        <TableCell align="right">Grade</TableCell>
        {isMyPack && <TableCell align="right">Actions</TableCell>}
      </TableRow>
    </TableHead>
  );
};
