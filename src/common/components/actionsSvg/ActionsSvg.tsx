import React, { memo } from 'react';

import deleteSvg from '../../../assets/svg/actions/Delete.svg';
import editSvg from '../../../assets/svg/actions/Edit.svg';
import teacherSvg from '../../../assets/svg/actions/teacher.svg';
import { packDeleteTC, updatePackTC } from '../../../features/packs/reducer/packTableReducer';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ReturnComponentType } from '../../types';

import s from './style/ActionsSvg.module.scss';
import { ActionsSvgType } from './type/ActionsSvgType';

export const ActionsSvg = memo(
  ({ isMyPack, packId, cardsCount }: ActionsSvgType): ReturnComponentType => {
    const status = useAppSelector(state => state.app.status);

    const dispatch = useAppDispatch();

    const onEditClick = (): void => {
      dispatch(updatePackTC(packId));
    };

    const onDeleteClick = (): void => {
      dispatch(packDeleteTC(packId));
    };
    const onTrainingClick = (): void => {};

    const thereAreCards = cardsCount === 0;
    const opacitySvgTeacher = thereAreCards ? '50%' : '100%';

    const success = status !== 'succeeded';
    const opacitySvg = success ? '50%' : '100%';

    return (
      <div>
        <button
          type="button"
          className={s.button}
          disabled={thereAreCards && success}
          style={{ opacity: opacitySvgTeacher }}
          onClick={onTrainingClick}
        >
          <img src={teacherSvg} alt="teacherSvg" />
        </button>

        {isMyPack && (
          <>
            <button
              type="button"
              onClick={onEditClick}
              className={s.button}
              disabled={success}
              style={{ opacity: opacitySvg }}
            >
              <img src={editSvg} alt="editSvg" />
            </button>
            <button
              type="button"
              onClick={onDeleteClick}
              className={s.button}
              disabled={success}
              style={{ opacity: opacitySvg }}
            >
              <img src={deleteSvg} alt="deleteSvg" />
            </button>
          </>
        )}
      </div>
    );
  },
);
