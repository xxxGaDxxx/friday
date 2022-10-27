import React from 'react';

import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useAppDispatch, useAppSelector } from '../../../../../app/store/store';
import ImageArrowTable from '../../../../../common/components/imgArrowTable/ImageArrowTable';
import { ReturnComponentType } from '../../../../../common/types';
import { onFilteringClick } from '../../../../../common/utils/sortTable';

type CardsTableHeaderType = {
  isMyPack: boolean;
};

export const CardsTableHeader = ({ isMyPack }: CardsTableHeaderType): ReturnComponentType => {
  const sortCards = useAppSelector(state => state.card.sortCards);
  const dispatch = useAppDispatch();

  return (
    <TableHead>
      <TableRow sx={{ background: '#EFEFEF' }}>
        <TableCell onClick={() => onFilteringClick('question', dispatch, sortCards)}>
          Question
          {sortCards === '0question' || sortCards === '1question' ? <ImageArrowTable /> : ''}
        </TableCell>
        <TableCell align="right" onClick={() => onFilteringClick('answer', dispatch, sortCards)}>
          Answer
          {sortCards === '0answer' || sortCards === '1answer' ? <ImageArrowTable /> : ''}
        </TableCell>
        <TableCell
          align="right"
          onClick={() => onFilteringClick('updatedCard', dispatch, sortCards)}
        >
          Last Updated
          {sortCards === '0updated' || sortCards === '1updated' ? <ImageArrowTable /> : ''}
        </TableCell>
        <TableCell align="right">Grade</TableCell>
        {isMyPack && <TableCell align="right">Actions</TableCell>}
      </TableRow>
    </TableHead>
  );
};
