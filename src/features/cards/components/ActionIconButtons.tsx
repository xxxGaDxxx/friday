import React, { memo } from 'react';

import deleteSvg from '../../../assets/svg/Delete.svg';
import editSvg from '../../../assets/svg/Edit.svg';
import s from '../../../common/components/actionIconButtons/styles/ActionsSvg.module.scss';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { ReturnComponentType } from '../../../common/types';
import { deleteCardTC, updateCardTC } from '../reducer/cardsReducer';

type SvgCardType = {
  cardId: string;
  cardPackId: string;
};

export const ActionIconButtons = memo(
  ({ cardId, cardPackId }: SvgCardType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const onDeleteClick = (): void => {
      dispatch(deleteCardTC(cardId, cardPackId));
    };

    const onEditClick = (): void => {
      dispatch(updateCardTC(cardId, cardPackId));
    };

    return (
      <>
        <button type="button" onClick={onEditClick} className={s.button}>
          <img src={editSvg} alt="editSvg" />
        </button>

        <button type="button" onClick={onDeleteClick} className={s.button}>
          <img src={deleteSvg} alt="deleteSvg" />
        </button>
      </>
    );
  },
);
