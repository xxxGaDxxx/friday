import React, { memo } from 'react';

import { Rating } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { useAppSelector } from '../../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../../common/types';
import { formatDate } from '../../../../common/utils/formatDate';
import s from '../../../packs/style/Packs.module.scss';

import { SvgCard } from './svgCard/SvgCard';
import { CardsTableBodyProps } from './type/CardsTableBodyProps';

export const CardsTableBody = memo(({ isMyPack }: CardsTableBodyProps): ReturnComponentType => {
  const cards = useAppSelector(state => state.card.cards);

  return (
    <TableBody>
      {cards.length ? (
        cards.map(card => (
          <TableRow key={card._id}>
            <TableCell className={s.firstColumn} component="th" scope="row">
              <span>{card.question}</span>
            </TableCell>

            <TableCell>{card.answer}</TableCell>

            <TableCell>{formatDate(card.updated)}</TableCell>

            <TableCell>
              <Rating name="half-rating-read" defaultValue={card.grade} precision={0.5} readOnly />
            </TableCell>

            {isMyPack && (
              <TableCell>
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
