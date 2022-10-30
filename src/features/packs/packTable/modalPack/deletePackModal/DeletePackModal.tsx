import React from 'react';

import { UniversalModalWindow } from '../../../../../common/components/universalModalWindow/UniversalModalWindow';
import { useAppDispatch } from '../../../../../common/hooks/useAppDispatch';
import { ReturnComponentType } from '../../../../../common/types';
import { packDeleteTC } from '../../../reducer/packTableReducer';

import { DeletePackModalProps } from './type/DeletePackModalType';

export const DeletePackModal = ({
  namePack,
  packId,
  clickHere,
  stylesOfDeleteIcon,
}: DeletePackModalProps): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const onDeleteClick = (): void => {
    dispatch(packDeleteTC(packId));
  };

  return (
    <UniversalModalWindow
      styleOfButtonToCallModal={stylesOfDeleteIcon}
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
