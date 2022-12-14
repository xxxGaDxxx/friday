import React, { memo } from 'react';

import { useNavigate } from 'react-router-dom';

import deleteIcon from '../../../assets/svg/Delete.svg';
import editIcon from '../../../assets/svg/Edit.svg';
import learnIcon from '../../../assets/svg/teacher.svg';
import { getCardsLearnDataTC } from '../../../features/learn/reducer/learnReducer';
import { DeletePackModal } from '../../../features/packs/components/modalPack/DeletePackModal';
import { EditPackModal } from '../../../features/packs/components/modalPack/EditPackModal';
import { updatePackTC } from '../../../features/packs/reducer/packsReducer';
import { PATH } from '../../enum/pathEnum';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { ReturnComponentType } from '../../types';

import s from './styles/ActionsSvg.module.scss';

type ActionsSvgType = {
  isMyPack: boolean;
  packId: string;
  cardsCount: number;
  namePack: string;
  deckCover: string;
};

export const ActionIconButtons = memo(
  ({ isMyPack, packId, cardsCount, namePack, deckCover }: ActionsSvgType): ReturnComponentType => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const updatePack = (name: string, privatePack: boolean, coverPack: string): void => {
      dispatch(updatePackTC(packId, name, privatePack, 'pack', coverPack));
    };

    const navigateToLearnPage = (): void => {
      dispatch(getCardsLearnDataTC(packId, cardsCount));
      navigate(PATH.LEARN);
    };

    const areCardsAvailable = cardsCount === 0;
    const opacityIcon = areCardsAvailable ? '50%' : '100%';

    return (
      <div className={s.container}>
        <button
          type="button"
          className={s.button}
          disabled={areCardsAvailable}
          style={{ opacity: opacityIcon }}
          onClick={navigateToLearnPage}
        >
          <img src={learnIcon} alt="learnIcon" />
        </button>

        {isMyPack && (
          <EditPackModal
            currentPackTitle={namePack}
            updatePack={updatePack}
            deckCover={deckCover}
            stylesOfIcon={{
              minHeight: 0,
              minWidth: 0,
              padding: 0,
            }}
            clickHere={<img src={editIcon} alt="editIcon" />}
          />
        )}

        {isMyPack && (
          <DeletePackModal
            stylesOfIcon={{
              minHeight: 0,
              minWidth: 0,
              padding: 0,
            }}
            callPoint="pack"
            namePack={namePack}
            packId={packId}
            clickHere={<img src={deleteIcon} alt="deleteIcon" />}
          />
        )}
      </div>
    );
  },
);
