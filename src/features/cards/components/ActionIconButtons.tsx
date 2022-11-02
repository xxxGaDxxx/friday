import React, { memo } from 'react';

import deleteSvg from '../../../assets/svg/Delete.svg';
import editSvg from '../../../assets/svg/Edit.svg';
import s from '../../../common/components/actionIconButtons/styles/ActionsSvg.module.scss';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { ReturnComponentType } from '../../../common/types';
import { deleteCardTC, updateCardTC } from '../reducer/cardsReducer';

type ActionIconButtonsType = {
  cardId: string;
  cardPackId: string;
};

export const ActionIconButtons = memo(
  ({ cardId, cardPackId }: ActionIconButtonsType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const deleteCard = (): void => {
      dispatch(deleteCardTC(cardId, cardPackId));
    };

    const editCard = (): void => {
      dispatch(updateCardTC(cardId, cardPackId));
    };

    return (
      <div className={s.container}>
        <button type="button" onClick={editCard} className={s.button}>
          <img src={editSvg} alt="editSvg" />
        </button>

        <button type="button" onClick={deleteCard} className={s.button}>
          <img src={deleteSvg} alt="deleteSvg" />
        </button>
      </div>
    );
  },
);
