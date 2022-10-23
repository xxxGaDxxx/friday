import * as React from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useAppSelector } from '../../../app/store/store';
import { ActionsSvg } from '../../../common/components/actionsSvg/ActionsSvg';
import { dayMonthYear } from '../../../common/utils/dayMonthYear';
import { ReturnComponentType } from '../../../types';

export const PackTable = (): ReturnComponentType => {
  const cardPacks = useAppSelector(state => state.pack.cardPacks);
  const userId = useAppSelector(state => state.profile._id);

  const isMyPack = (id: string): boolean => userId === id;

  return (
    <TableContainer sx={{ maxWidth: '1010px' }} component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
          <TableRow sx={{ background: '#EFEFEF' }}>
            <TableCell>Name</TableCell>
            <TableCell align="right">Cards</TableCell>
            <TableCell align="right">Last Updated</TableCell>
            <TableCell align="right">Created by</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cardPacks.map(pack => (
            <TableRow key={pack._id}>
              <TableCell component="th" scope="row">
                {pack.name}
              </TableCell>
              <TableCell align="right">{pack.cardsCount}</TableCell>
              <TableCell align="right">{dayMonthYear(pack.created)}</TableCell>
              <TableCell align="right">{pack.user_name}</TableCell>
              <TableCell align="right">
                <ActionsSvg key={pack._id} isMyPack={isMyPack(pack.user_id)} packId={pack._id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
