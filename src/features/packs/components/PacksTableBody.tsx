import React, { memo, useCallback } from 'react';

import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';

import defaultCover from '../../../assets/img/noCover.jpg';
import { ActionIconButtons } from '../../../common/components/actionIconButtons/ActionIconButtons';
import { Image } from '../../../common/components/cover/Image';
import { PATH } from '../../../common/enum/pathEnum';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../common/types';
import { formatDate } from '../../../common/utils/formatDate';
import {
  setCardsPackIdAC,
  setCardsTotalCountAC,
  setPackCoverAC,
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
    dispatch(setPackCoverAC(deckCover));

    navigate(PATH.CARDS);
  };

  return (
    <TableBody>
      {packs.length ? (
        packs.map(pack => (
          <TableRow key={pack._id}>
            <TableCell component="th" scope="row">
              <Image
                packCover={pack.deckCover}
                isErrorMessageShow={false}
                styles={s.imageCover}
                defaultImage={defaultCover}
              />
            </TableCell>
            <TableCell
              className={s.firstColumn}
              onClick={() => goToCardsList(pack._id, pack.cardsCount, pack.deckCover)}
            >
              <div className={s.nameColumn}>{pack.name}</div>
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
