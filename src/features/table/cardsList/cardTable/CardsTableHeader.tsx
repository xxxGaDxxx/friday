import React from 'react';

import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useAppDispatch, useAppSelector } from '../../../../app/store/store';
import ImageArrowTable from '../../../../common/components/imgArrowTable/ImageArrowTable';
import { ReturnComponentType } from '../../../../common/types';
import { onFilteringClick } from '../../../../common/utils/sortTable';

type CardsTableHeaderType = {
  isMyPack: boolean;
};

export const CardsTableHeader = ({ isMyPack }: CardsTableHeaderType): ReturnComponentType => {
  const sortPacks = useAppSelector(state => state.pack.sortPacks);
  const dispatch = useAppDispatch();

  return (
    <TableHead>
      <TableRow sx={{ background: '#EFEFEF' }}>
        <TableCell onClick={() => onFilteringClick('name', dispatch, sortPacks)}>
          Question
          {sortPacks === '0name' || sortPacks === '1name' ? <ImageArrowTable /> : ''}
        </TableCell>
        <TableCell align="right" onClick={() => onFilteringClick('card', dispatch, sortPacks)}>
          Answer
          {sortPacks === '0cardsCount' || sortPacks === '1cardsCount' ? <ImageArrowTable /> : ''}
        </TableCell>
        <TableCell align="right" onClick={() => onFilteringClick('updated', dispatch, sortPacks)}>
          Last Updated
          {sortPacks === '0updated' || sortPacks === '1updated' ? <ImageArrowTable /> : ''}
        </TableCell>
        <TableCell align="right">Grade</TableCell>
        {isMyPack && <TableCell align="right">Actions</TableCell>}
      </TableRow>
    </TableHead>
  );
};
