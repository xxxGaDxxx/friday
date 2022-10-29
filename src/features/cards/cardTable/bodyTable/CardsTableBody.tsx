import React, { memo } from 'react';

import { Rating } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { useAppSelector } from '../../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../../common/types';
import { formatDate } from '../../../../common/utils/formatDate';

import { SvgCard } from './svgCard/SvgCard';
import { CardsTableBodyProps } from './type/CardsTableBodyProps';

export const CardsTableBody = memo(({ isMyPack }: CardsTableBodyProps): ReturnComponentType => {
  const cards = useAppSelector(state => state.card.cards);

  return (
    <TableBody>
      {cards.length ? (
        cards.map(card => (
          <TableRow key={card._id}>
            <TableCell component="th" scope="row">
              {card.question}
            </TableCell>

            <TableCell align="right">{card.answer}</TableCell>

            <TableCell align="right">{formatDate(card.updated)}</TableCell>

            <TableCell align="right">
              <Rating name="half-rating-read" defaultValue={card.grade} precision={0.5} readOnly />
            </TableCell>

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
  );
});
