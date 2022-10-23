import * as React from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useAppSelector } from '../../../app/store/store';
import { ReturnComponentType } from '../../../types';

type CreateData = {
  name: string;
  cards: number;
  lastUpdated: string;
  createdBy: string;
  actions: string;
};

export const PackTable = (): ReturnComponentType => {
  // const dispatch = useAppDispatch();
  const cardPacks = useAppSelector(state => state.pack.cardPacks);

  const cardsDateType = (
    name: string,
    cards: number,
    lastUpdated: string,
    createdBy: string,
    actions: string,
  ): CreateData => {
    return { name, cards, lastUpdated, createdBy, actions };
  };

  const dateString = (dateStr: string): string => {
    const date = new Date(Date.parse(dateStr));

    return `${date.getDate()}.${date.getDay()}.${date.getFullYear()}`;
  };
  const rows = cardPacks.map(pack =>
    cardsDateType(pack.name, pack.cardsCount, dateString(pack.created), pack.user_name, pack.type),
  );

  // useEffect(() => {
  //   dispatch(packDateTC());
  // }, [dispatch]);

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
            <TableRow key={row.name}>
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
