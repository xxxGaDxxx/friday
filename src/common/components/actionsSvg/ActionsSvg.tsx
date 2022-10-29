import React, { memo, useState } from 'react';

import deleteSvg from '../../../assets/svg/actions/Delete.svg';
import editSvg from '../../../assets/svg/actions/Edit.svg';
import teacherSvg from '../../../assets/svg/actions/teacher.svg';
import { DeletePackModal } from '../../../features/packs/packTable/modalPack/deletePackModal/DeletePackModal';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ReturnComponentType } from '../../types';

import s from './style/ActionsSvg.module.scss';
import { ActionsSvgType } from './type/ActionsSvgType';

export type OpenModal = 'delete' | 'teacher' | 'edit' | '';

export const ActionsSvg = memo(
  ({ isMyPack, packId, cardsCount, namePack }: ActionsSvgType): ReturnComponentType => {
    const status = useAppSelector(state => state.app.status);

    const [open, setOpen] = useState<OpenModal>('');

    const HandleOpen = (isOpen: OpenModal): void => {
      setOpen(isOpen);
    };

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
    const opacitySvg = success ? '50%' : '100%';

    return (
      <div>
        <button
          type="button"
          className={s.button}
          disabled={thereAreCards && success}
          style={{ opacity: opacitySvgTeacher }}
          onClick={() => HandleOpen('teacher')}
        >
          <img src={teacherSvg} alt="teacherSvg" />
        </button>

        {isMyPack && (
          <>
            <button
              type="button"
              onClick={() => HandleOpen('edit')}
              className={s.button}
              disabled={success}
              style={{ opacity: opacitySvg }}
            >
              <img src={editSvg} alt="editSvg" />
            </button>
            {open === 'edit' && <div />}

            <button
              type="button"
              onClick={() => HandleOpen('delete')}
              className={s.button}
              disabled={success}
              style={{ opacity: opacitySvg }}
            >
              <img src={deleteSvg} alt="deleteSvg" />
            </button>
            {open === 'delete' && (
              <DeletePackModal setOpen={setOpen} open={open} namePack={namePack} packId={packId} />
            )}
          </>
        )}
      </div>
    );
  },
);
