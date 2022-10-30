import React from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../common/types';

import { CardsTableBody } from './bodyTable/CardsTableBody';
import { CardsTableHeader } from './headerTable/CardsTableHeader';

export const CardsTable = (): ReturnComponentType => {
  const userId = useAppSelector(state => state.profile._id);
  const packUserId = useAppSelector(state => state.card.packUserId);

  const isMyPack = userId === packUserId;

  return (
    <TableContainer sx={{ maxWidth: '1010px' }} component={Paper}>
      <Table stickyHeader aria-label="caption table">
        <CardsTableHeader isMyPack={isMyPack} />

        <CardsTableBody isMyPack={isMyPack} />
      </Table>
    </TableContainer>
  );
};
