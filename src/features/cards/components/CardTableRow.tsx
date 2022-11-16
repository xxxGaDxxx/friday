import React, { memo } from 'react';

import { Rating } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { CardsType } from '../../../api/types/apiType';
import { ReturnComponentType } from '../../../common/types';
import { formatDate } from '../../../common/utils/formatDate';
import s from '../styles/Cards.module.scss';

import { CardsActionIconButtons } from './CardsActionIconButtons';

type CardTableRowType = {
  card: CardsType;
  isMyPack: boolean;
};

export const CardTableRow = memo(({ isMyPack, card }: CardTableRowType): ReturnComponentType => {
  const doesThePictureExists = !!card.questionImg && card.questionImg !== 'no image';
  const doesTheQuestionExists = !!card.question && card.question !== 'no question';
  const definedQuestionVariantForRender = doesThePictureExists ? (
    <div className={s.picture}>
      <img src={card.questionImg} alt="questionPicture" />
    </div>
  ) : (
    <span>{card.question}</span>
  );

  return (
    <TableRow>
      <TableCell className={s.firstColumn} component="th" scope="row">
        {definedQuestionVariantForRender}
      </TableCell>

      <TableCell>{card.answer}</TableCell>

      <TableCell>{formatDate(card.updated)}</TableCell>

      <TableCell>
        <Rating name="half-rating-read" defaultValue={card.grade} precision={0.1} readOnly />
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
});
