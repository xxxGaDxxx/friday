import React, { memo } from 'react';

import { Rating } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../common/types';
import { formatDate } from '../../../common/utils/formatDate';
import s from '../styles/Cards.module.scss';

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
          const doesThePictureExists = !!card.questionImg && card.questionImg !== 'no image';
          const doesTheQuestionExists = !!card.question && card.questionImg !== 'no question';
          const chooseTextOrPictureQuestion = doesThePictureExists ? (
            <div className={s.picture}>
              <img src={card.questionImg} alt="questionPicture" />
            </div>
          ) : (
            <span>{card.question}</span>
          );

          return (
            <TableRow key={card._id}>
              <TableCell className={s.firstColumn} component="th" scope="row">
                {chooseTextOrPictureQuestion}
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
                  <CardsActionIconButtons
                    key={card._id}
                    card={card}
                    doesThePictureExists={doesThePictureExists}
                    doesTheQuestionExists={doesTheQuestionExists}
                  />
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
