import React, { memo } from 'react';

import deleteSvg from '../../../assets/svg/actions/Delete.svg';
import editSvg from '../../../assets/svg/actions/Edit.svg';
import teacherSvg from '../../../assets/svg/actions/teacher.svg';
import { DeletePackModal } from '../../../features/packs/packTable/modalPack/deletePackModal/DeletePackModal';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ReturnComponentType } from '../../types';

import s from './style/ActionsSvg.module.scss';
import { ActionsSvgType } from './type/ActionsSvgType';

const HALF_OPACITY = 0.5;

export const ActionsSvg = memo(
  ({ isMyPack, packId, cardsCount, namePack }: ActionsSvgType): ReturnComponentType => {
    const status = useAppSelector(state => state.app.status);

    // const dispatch = useAppDispatch();

    // const onEditClick = (): void => {
    //   dispatch(updatePackTC(packId));
    // };

    // const onDeleteClick = (): void => {
    //   dispatch(packDeleteTC(packId));
    // };
    // const onTrainingClick = (): void => {};

    const thereAreCards = cardsCount === 0;
    const opacitySvgTeacher = thereAreCards ? '50%' : '100%';

    const success = status !== 'succeeded';
    const opacitySvg = success ? HALF_OPACITY : 1;

    return (
      <div className={s.container}>
        <button
          type="button"
          className={s.button}
          disabled={thereAreCards && success}
          style={{ opacity: opacitySvgTeacher }}
        >
          <img src={teacherSvg} alt="teacherSvg" />
        </button>

        {isMyPack && (
          <div className={s.container}>
            <button
              type="button"
              className={s.button}
              disabled={success}
              style={{ opacity: opacitySvg }}
            >
              <img src={editSvg} alt="editSvg" />
            </button>

            <DeletePackModal
              stylesOfDeleteIcon={{
                minHeight: 0,
                minWidth: 0,
                padding: 0,
                opacity: success ? HALF_OPACITY : 1,
              }}
              namePack={namePack}
              packId={packId}
              clickHere={<img src={deleteSvg} alt="deleteSvg" />}
            />
          </div>
        )}
      </div>
    );
  },
);
