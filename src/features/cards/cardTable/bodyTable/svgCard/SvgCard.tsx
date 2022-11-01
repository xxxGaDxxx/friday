import React, { memo } from 'react';

import deleteSvg from '../../../../../assets/svg/actions/Delete.svg';
import editSvg from '../../../../../assets/svg/actions/Edit.svg';
import { useAppDispatch } from '../../../../../common/hooks/useAppDispatch';
import { ReturnComponentType } from '../../../../../common/types';
import { cardDeleteTC, cardUpdateTC } from '../../../reducer/cardTableReducer';

import s from './CardSvg.module.scss';
import { SvgCardType } from './types/svgCardTypes';

export const SvgCard = memo(({ cardId, cardPackId }: SvgCardType): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const onDeleteClick = (): void => {
    dispatch(cardDeleteTC(cardId, cardPackId));
  };

  const onEditClick = (): void => {
    dispatch(cardUpdateTC(cardId, cardPackId));
  };

  return (
    <div className={s.container}>
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
    </div>
  );
});
