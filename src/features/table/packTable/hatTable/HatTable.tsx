import React from 'react';

import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useAppDispatch, useAppSelector } from '../../../../app/store/store';
import ImageArrowTable from '../../../../common/components/imgArrowTable/ImageArrowTable';
import { onFilteringClick } from '../../../../common/utils/sortTable';
import { ReturnComponentType } from '../../../../types';

export const HatTable = (): ReturnComponentType => {
  const sortPacks = useAppSelector(state => state.pack.sortPacks);
  const dispatch = useAppDispatch();

  return (
    <TableHead>
      <TableRow sx={{ background: '#EFEFEF' }}>
        <TableCell onClick={() => onFilteringClick('name', dispatch, sortPacks)}>
          Name
          {sortPacks === '0name' || sortPacks === '1name' ? <ImageArrowTable /> : ''}
        </TableCell>
        <TableCell align="right" onClick={() => onFilteringClick('card', dispatch, sortPacks)}>
          Cards
          {sortPacks === '0cardsCount' || sortPacks === '1cardsCount' ? <ImageArrowTable /> : ''}
        </TableCell>
        <TableCell align="right" onClick={() => onFilteringClick('updated', dispatch, sortPacks)}>
          Last Updated
          {sortPacks === '0updated' || sortPacks === '1updated' ? <ImageArrowTable /> : ''}
        </TableCell>
        <TableCell align="right" onClick={() => onFilteringClick('user_name', dispatch, sortPacks)}>
          Created by
          {sortPacks === '0user_name' || sortPacks === '1user_name' ? <ImageArrowTable /> : ''}
        </TableCell>
        <TableCell align="right">Actions</TableCell>
      </TableRow>
    </TableHead>
  );
};

// const ImgArrow = (): ReturnComponentType => {
//   const sortPacks = useAppSelector(state => state.pack.sortPacks);
//   const transformRotate = sortPacks[0] === '1' ? 'rotate(180deg)' : '';
//   const none = sortPacks === '' ? 'none' : '';
//
//   return (
//     <img
//       src={arrow}
//       alt="arrow"
//       style={{ display: none, transform: transformRotate, paddingLeft: '5px' }}
//     />
//   );
// };
