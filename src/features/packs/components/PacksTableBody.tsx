import React, { memo, useCallback } from 'react';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';

import defaultCover from '../../../assets/img/noCover.jpg';
import { ActionIconButtons } from '../../../common/components/actionIconButtons/ActionIconButtons';
import { PATH } from '../../../common/enum/pathEnum';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../common/types';
import { formatDate } from '../../../common/utils/formatDate';
import {
  setCardsPackIdAC,
  setCardsTotalCountAC,
  setDeckCoverPackAC,
} from '../../cards/reducer/cardsReducer';
import { setSearchAC } from '../reducer/packsReducer';
import s from '../style/Packs.module.scss';

export const PacksTableBody = memo((): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const userId = useAppSelector(state => state.profile._id);
  const packs = useAppSelector(state => state.pack.cardPacks);

  const isMyPack = useCallback((id: string): boolean => userId === id, [userId]);

  const goToCardsList = (_id: string, cardsCount: number, deckCover: string): void => {
    dispatch(setSearchAC(''));
    dispatch(setCardsPackIdAC(_id));
    dispatch(setCardsTotalCountAC(cardsCount));
    dispatch(setDeckCoverPackAC(deckCover));

    navigate(PATH.CARDS);
  };

  return (
    <TableBody>
      {packs.length ? (
        packs.map(pack => (
          <TableRow key={pack._id}>
            <TableCell component="th" scope="row">
              <img
                style={{ width: '100px', height: '50px' }}
                src={pack.deckCover || defaultCover}
                alt="Cover"
              />
            </TableCell>
            <TableCell
              className={s.firstColumn}
              onClick={() => goToCardsList(pack._id, pack.cardsCount, pack.deckCover)}
            >
              <span>{pack.name}</span>
            </TableCell>
            <TableCell>{pack.cardsCount}</TableCell>
            <TableCell>{formatDate(pack.created)}</TableCell>
            <TableCell>{pack.user_name}</TableCell>
            <TableCell>
              <ActionIconButtons
                key={pack._id}
                isMyPack={isMyPack(pack.user_id)}
                packId={pack._id}
                cardsCount={pack.cardsCount}
                namePack={pack.name}
                deckCover={pack.deckCover}
              />
            </TableCell>
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell>Packs not found</TableCell>
        </TableRow>
      )}
    </TableBody>
  );
});
