import React, { ReactNode } from 'react';

import { UniversalModalWindow } from '../../../../common/components/universalModalWindow/UniversalModalWindow';
import { ReturnComponentType } from '../../../../common/types';

export type DeleteCardModalProps = {
  deleteCard: (cardId: string, cardPackId: string) => void;
  cardId: string;
  cardPackId: string;
  clickHere: ReactNode;
  styleIcons: Object;
  question?: string;
};

export const DeleteCardModal = ({
  cardPackId,
  deleteCard,
  cardId,
  clickHere,
  styleIcons,
  question,
}: DeleteCardModalProps): ReturnComponentType => {
  const confirmDeleteCard = (): void => {
    deleteCard(cardId, cardPackId);
  };

  return (
    <UniversalModalWindow
      styleButtonActivateModal={styleIcons}
      variantOfButtonToCallModal="text"
      clickHere={clickHere}
      onAcceptActionClick={confirmDeleteCard}
      titleButtonAccept="Delete"
      title="Delete card"
      colorAcceptButton="error"
    >
      <p>
        Do you really want to remove
        <strong> {question}</strong>
        <br />
        <br />
        All existed properties will be deleted!
      </p>
    </UniversalModalWindow>
  );
};
