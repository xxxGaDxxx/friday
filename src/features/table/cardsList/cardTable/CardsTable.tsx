import React, { useCallback } from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../../../app/store/store';
import { ActionsSvg } from '../../../../common/components/actionsSvg/ActionsSvg';
import { ReturnComponentType } from '../../../../common/types';
import { dayMonthYear } from '../../../../common/utils/dayMonthYear';

import { CardsTableHeader } from './CardsTableHeader';

export const CardsTable = (): ReturnComponentType => {
  const navigate = useNavigate();

  const cardPacks = useAppSelector(state => state.pack.cardPacks);
  const userId = useAppSelector(state => state.profile._id);

  const isMyPack = useCallback((id: string): boolean => userId === id, [userId]);

  return (
    <TableContainer sx={{ maxWidth: '1010px' }} component={Paper}>
      <Table aria-label="caption table">
        <CardsTableHeader />
        <TableBody>
          {cardPacks.length ? (
            cardPacks.map(pack => (
              <TableRow key={pack._id}>
                <TableCell component="th" scope="row">
                  {pack.name}
                </TableCell>
                <TableCell align="right">{pack.cardsCount}</TableCell>
                <TableCell align="right">{dayMonthYear(pack.created)}</TableCell>
                <TableCell align="right">{pack.user_name}</TableCell>
                <TableCell align="right">
                  <ActionsSvg
                    key={pack._id}
                    isMyPack={isMyPack(pack.user_id)}
                    packId={pack._id}
                    cardsCount={pack.cardsCount}
                  />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell>Cards not found</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};