import React from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

import { useAppSelector } from '../../../../app/store/store';
import { ReturnComponentType } from '../../../../common/types';
import { dayMonthYear } from '../../../../common/utils/dayMonthYear';

import { CardsTableHeader } from './CardsTableHeader';
import { SvgCard } from './SvgCard';

export const CardsTable = (): ReturnComponentType => {
  // const navigate = useNavigate();

  const cards = useAppSelector(state => state.card.cards);
  const userId = useAppSelector(state => state.profile._id);
  const packUserId = useAppSelector(state => state.card.packUserId);

  const isMyPack = userId === packUserId;

  return (
    <TableContainer sx={{ maxWidth: '1010px' }} component={Paper}>
      <Table aria-label="caption table">
        <CardsTableHeader isMyPack={isMyPack} />
        <TableBody>
          {cards.length ? (
            cards.map(card => (
              <TableRow key={card._id}>
                <TableCell component="th" scope="row">
                  {card.question}
                </TableCell>
                <TableCell align="right">{card.answer}</TableCell>
                <TableCell align="right">{dayMonthYear(card.updated)}</TableCell>
                <TableCell align="right">{card.grade}</TableCell>
                {isMyPack && (
                  <TableCell align="right">
                    <SvgCard key={card._id} cardId={card._id} cardPackId={card.cardsPack_id} />
                  </TableCell>
                )}
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
