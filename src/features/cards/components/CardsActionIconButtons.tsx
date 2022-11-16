import React, { memo } from 'react';

import { CardsType } from '../../../api/types/apiType';
import deleteIcon from '../../../assets/svg/Delete.svg';
import editIcon from '../../../assets/svg/Edit.svg';
import s from '../../../common/components/actionIconButtons/styles/ActionsSvg.module.scss';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { ReturnComponentType } from '../../../common/types';
import { deleteCardTC, updateCardTC } from '../reducer/cardsReducer';

import { DeleteCardModal } from './cardsModals/DeleteCardModal';
import { EditCardModal } from './cardsModals/EditCardModal';
import { styleIcons } from './cardsModals/style/styleCardsActionIconButtons';

type CardsActionIconButtonsType = {
  card: CardsType;
  doesThePictureExists: boolean;
  doesTheQuestionExists: boolean;
};

export const CardsActionIconButtons = memo(
  ({
    card,
    doesThePictureExists,
    doesTheQuestionExists,
  }: CardsActionIconButtonsType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const deleteCard = (cardId: string, cardPackId: string): void => {
      dispatch(deleteCardTC(cardId, cardPackId));
    };

    const editCard = (
      cardId: string,
      cardPackId: string,
      answer?: string,
      question?: string,
      questionImg?: string,
      answerImg?: string,
    ): void => {
      dispatch(updateCardTC(cardId, cardPackId, answer, question, answerImg, questionImg));
    };

    return (
      <div className={s.container}>
        <EditCardModal
          doesThePictureExists={doesThePictureExists}
          doesTheQuestionExists={doesTheQuestionExists}
          styleIcons={styleIcons}
          card={card}
          editCard={editCard}
          clickHere={<img src={editIcon} alt="editIcon" />}
        />
        <DeleteCardModal
          styleIcons={styleIcons}
          deleteCard={deleteCard}
          cardId={card._id}
          cardPackId={card.cardsPack_id}
          clickHere={<img src={deleteIcon} alt="deleteIcon" />}
        />
      </div>
    );
  },
);
