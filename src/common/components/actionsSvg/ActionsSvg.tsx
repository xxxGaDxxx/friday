import React, { memo } from 'react';

import { useNavigate } from 'react-router-dom';

import deleteSvg from '../../../assets/svg/actions/Delete.svg';
import editSvg from '../../../assets/svg/actions/Edit.svg';
import teacherSvg from '../../../assets/svg/actions/teacher.svg';
import { cardDataTC } from '../../../features/cards/reducer/cardTableReducer';
import { DeletePackModal } from '../../../features/packs/packTable/modalPack/DeletePackModal';
import { EditPackModal } from '../../../features/packs/packTable/modalPack/EditPackModal';
import { updatePackTC } from '../../../features/packs/reducer/packTableReducer';
import { PATH } from '../../enum/pathEnum';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { ReturnComponentType } from '../../types';

import s from './style/ActionsSvg.module.scss';
import { ActionsSvgType } from './type/ActionsSvgType';

const HALF_OPACITY = 0.5;

export const ActionsSvg = memo(
  ({ isMyPack, packId, cardsCount, namePack }: ActionsSvgType): ReturnComponentType => {
    const status = useAppSelector(state => state.app.status);

    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const onEditClick = (name: string, privatePack: boolean): void => {
      dispatch(updatePackTC(packId, name, privatePack, 'pack'));
    };

    const onOpenCardsLearnClick = (): void => {
      dispatch(cardDataTC(packId));
      if (status === 'succeeded') {
        navigate(PATH.LEARN_CARDS);
      }
    };

    const thereAreCards = cardsCount === 0;
    const opacitySvgTeacher = thereAreCards ? '50%' : '100%';

    const success = status !== 'succeeded';

    return (
      <div className={s.container}>
        <button
          type="button"
          className={s.button}
          disabled={thereAreCards}
          style={{ opacity: opacitySvgTeacher }}
          onClick={onOpenCardsLearnClick}
        >
          <img src={teacherSvg} alt="teacherSvg" />
        </button>

        {isMyPack && (
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
        )}

        {isMyPack && (
          <DeletePackModal
            stylesOfIcon={{
              minHeight: 0,
              minWidth: 0,
              padding: 0,
              opacity: success ? HALF_OPACITY : 1,
            }}
            callPoint="pack"
            namePack={namePack}
            packId={packId}
            clickHere={<img src={deleteSvg} alt="deleteSvg" />}
          />
        )}
      </div>
    );
  },
);
