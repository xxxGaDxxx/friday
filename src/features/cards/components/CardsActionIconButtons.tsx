import React, { memo } from 'react';

import { CardsType } from '../../../api/types/apiType';
import deleteIcon from '../../../assets/svg/Delete.svg';
import editIcon from '../../../assets/svg/Edit.svg';
import s from '../../../common/components/actionIconButtons/styles/ActionsSvg.module.scss';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { ReturnComponentType } from '../../../common/types';
import { deleteCardTC } from '../reducer/cardsReducer';

import { CardModal } from './cardsModals/CardModal';
import { DeleteCardModal } from './cardsModals/DeleteCardModal';
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

    const definedImage = doesThePictureExists ? card.questionImg : '';
    const definedQuestion = doesTheQuestionExists ? card.question : 'no question';
    const definedQuestionFormat = doesThePictureExists ? 'Picture' : 'Text';

    const deleteCard = (cardId: string, cardPackId: string): void => {
      dispatch(deleteCardTC(cardId, cardPackId));
    };

    return (
      <div className={s.container}>
        <CardModal
          variantOfButtonToCallModal="text"
          cardPackId={card.cardsPack_id}
          clickHere={<img src={editIcon} alt="editIcon" />}
          styleIcons={styleIcons}
          definedQuestion={definedQuestion}
          definedQuestionFormat={definedQuestionFormat}
          definedImage={definedImage}
          defaultAnswer={card.answer}
          cardId={card._id}
          title="Edit card"
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
