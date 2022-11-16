import React, { memo } from 'react';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../common/types';

import { CardTableRow } from './CardTableRow';

type CardsTableBodyProps = {
  isMyPack: boolean;
};

export const CardsTableBody = memo(({ isMyPack }: CardsTableBodyProps): ReturnComponentType => {
  const cards = useAppSelector(state => state.card.cards);
  const mappedCards =
    cards.length &&
    cards.map(card => <CardTableRow key={card._id} card={card} isMyPack={isMyPack} />);

  return (
    <TableBody>
      {mappedCards || (
        <TableRow>
          <TableCell>Cards not found</TableCell>
        </TableRow>
      )}
    </TableBody>
  );
});
