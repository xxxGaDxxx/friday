import React, { memo } from 'react';

import { Rating } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../common/types';
import { formatDate } from '../../../common/utils/formatDate';
import s from '../../packs/style/Packs.module.scss';

import { CardsActionIconButtons } from './CardsActionIconButtons';

type CardsTableBodyProps = {
  isMyPack: boolean;
};

export const CardsTableBody = memo(({ isMyPack }: CardsTableBodyProps): ReturnComponentType => {
  const cards = useAppSelector(state => state.card.cards);

  return (
    <TableBody>
      {cards.length ? (
        cards.map(card => {
          return (
            <TableRow key={card._id}>
              <TableCell className={s.firstColumn} component="th" scope="row">
                <span>{card.question}</span>
              </TableCell>

              <TableCell>{card.answer}</TableCell>

              <TableCell>{formatDate(card.updated)}</TableCell>

              <TableCell>
                <Rating
                  name="half-rating-read"
                  defaultValue={card.grade}
                  precision={0.1}
                  readOnly
                />
              </TableCell>

              {isMyPack && (
                <TableCell>
                  <CardsActionIconButtons key={card._id} card={card} />
                </TableCell>
              )}
            </TableRow>
          );
        })
      ) : (
        <TableRow>
          <TableCell>Cards not found</TableCell>
        </TableRow>
      )}
    </TableBody>
  );
});
