import React from 'react';

import { useNavigate } from 'react-router-dom';

import { UniversalModalWindow } from '../../../../common/components/universalModalWindow/UniversalModalWindow';
import { PATH } from '../../../../common/enum/pathEnum';
import { useAppDispatch } from '../../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../../common/types';
import { packDeleteTC } from '../../reducer/packTableReducer';

import { DeletePackModalProps } from './type/DeletePackModalType';

export const DeletePackModal = ({
  callPoint,
  namePack,
  packId,
  clickHere,
  stylesOfIcon,
}: DeletePackModalProps): ReturnComponentType => {
  const status = useAppSelector(state => state.app.status);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onDeleteClick = (): void => {
    dispatch(packDeleteTC(packId, callPoint));

    if (status === 'succeeded') {
      navigate(PATH.PACKS_LIST);
    }
  };

  return (
    <UniversalModalWindow
      styleOfButtonToCallModal={stylesOfIcon}
      variantOfButtonToCallModal="text"
      clickHere={clickHere}
      onAcceptActionClick={onDeleteClick}
      titleButtonAccept="Delete"
      title="Delete Pack"
      colorAcceptButton="error"
    >
      <p>
        Do you really want to remove <strong>{namePack}</strong>? All cards will be deleted.
      </p>
    </UniversalModalWindow>
  );
};
