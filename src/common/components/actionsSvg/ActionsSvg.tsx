import React, { memo } from 'react';

import deleteSvg from '../../../assets/svg/actions/Delete.svg';
import editSvg from '../../../assets/svg/actions/Edit.svg';
import teacherSvg from '../../../assets/svg/actions/teacher.svg';
import { DeletePackModal } from '../../../features/packs/packTable/modalPack/DeletePackModal';
import { EditPackModal } from '../../../features/packs/packTable/modalPack/EditPackModal';
import { updatePackTC } from '../../../features/packs/reducer/packTableReducer';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ReturnComponentType } from '../../types';

import s from './style/ActionsSvg.module.scss';
import { ActionsSvgType } from './type/ActionsSvgType';

const HALF_OPACITY = 0.5;

export const ActionsSvg = memo(
  ({ isMyPack, packId, cardsCount, namePack }: ActionsSvgType): ReturnComponentType => {
    const status = useAppSelector(state => state.app.status);

    const dispatch = useAppDispatch();

    const onEditClick = (name: string, privatePack: boolean): void => {
      dispatch(updatePackTC(packId, name, privatePack));
    };

    // const onDeleteClick = (): void => {
    //   dispatch(packDeleteTC(packId));
    // };
    // const onTrainingClick = (): void => {};

    const thereAreCards = cardsCount === 0;
    const opacitySvgTeacher = thereAreCards ? '50%' : '100%';

    const success = status !== 'succeeded';

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
            <EditPackModal
              currentPackTitle={namePack}
              onEditPackClick={onEditClick}
              stylesOfIcon={{
                minHeight: 0,
                minWidth: 0,
                padding: 0,
                opacity: success ? HALF_OPACITY : 1,
              }}
              clickHere={<img src={editSvg} alt="editSvg" />}
            />

            <DeletePackModal
              stylesOfIcon={{
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
