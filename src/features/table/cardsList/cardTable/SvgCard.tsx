import React from 'react';

import { useAppDispatch } from '../../../../app/store/store';
import deleteSvg from '../../../../assets/svg/actions/Delete.svg';
import editSvg from '../../../../assets/svg/actions/Edit.svg';
import s from '../../../../common/components/actionsSvg/style/ActionsSvg.module.scss';
import { ReturnComponentType } from '../../../../common/types';
import { cardDeleteTC, cardUpdateTC } from '../reducer/cardTableReducer';

type SvgCardType = {
  cardId: string;
  cardPackId: string;
};

export const SvgCard = ({ cardId, cardPackId }: SvgCardType): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const onDeleteClick = (): void => {
    dispatch(cardDeleteTC(cardId, cardPackId));
  };
  const onEditClick = (): void => {
    dispatch(cardUpdateTC(cardId, cardPackId));
  };

  return (
    <>
      <button
        type="button"
        onClick={onEditClick}
        className={s.button}
        // disabled={success}
        // style={{ opacity: opacitySvg }}
      >
        <img src={editSvg} alt="editSvg" />
      </button>
      <button
        type="button"
        onClick={onDeleteClick}
        className={s.button}
        // disabled={success}
        // style={{ opacity: opacitySvg }}
      >
        <img src={deleteSvg} alt="deleteSvg" />
      </button>
    </>
  );
};
