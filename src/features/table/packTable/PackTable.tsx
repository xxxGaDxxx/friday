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

type CreateData = {
  id: string;
  name: string;
  cards: number;
  lastUpdated: string;
  createdBy: string;
  actions: any;
};

export const PackTable = (): ReturnComponentType => {
  const cardPacks = useAppSelector(state => state.pack.cardPacks);
  const userId = useAppSelector(state => state.profile._id);

  const isMyPack = (id: string): boolean => userId === id;

  const cardsDateType = (
    id: string,
    name: string,
    cards: number,
    lastUpdated: string,
    createdBy: string,
    actions: any,
  ): CreateData => {
    return { id, name, cards, lastUpdated, createdBy, actions };
  };

  const rows = cardPacks.map(pack =>
    cardsDateType(
      pack._id,
      pack.name,
      pack.cardsCount,
      dayMonthYear(pack.created),
      pack.user_name,
      <ActionsSvg key={pack._id} isMyPack={isMyPack(pack.user_id)} packId={pack._id} />,
    ),
  );

  return (
    <TableContainer sx={{ minWidth: 650, maxWidth: 1008 }} component={Paper}>
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
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.cards}</TableCell>
              <TableCell align="right">{row.lastUpdated}</TableCell>
              <TableCell align="right">{row.createdBy}</TableCell>
              <TableCell align="right">{row.actions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
