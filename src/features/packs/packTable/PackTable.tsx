import * as React from 'react';
import { useCallback } from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';

import { ActionsSvg } from '../../../common/components/actionsSvg/ActionsSvg';
import { PATH } from '../../../common/enum/pathEnum';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../common/types';
import { formatDate } from '../../../common/utils/formatDate';
import { setCardsPackIdAC } from '../../cards/reducer/cardTableReducer';
import s from '../style/Packs.module.scss';

import { HatTable } from './hatTable/HatTable';

export const PackTable = (): ReturnComponentType => {
  const cardPacks = useAppSelector(state => state.pack.cardPacks);
  const userId = useAppSelector(state => state.profile._id);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const isMyPack = useCallback((id: string): boolean => userId === id, [userId]);

  const goToCardsList = (_id: string): void => {
    navigate(PATH.CARDS_LIST);
    dispatch(setCardsPackIdAC(_id));
  };

  return (
    <TableContainer sx={{ maxWidth: '1010px' }} component={Paper}>
      <Table aria-label="caption table">
        <HatTable />
        <TableBody>
          {cardPacks.length ? (
            cardPacks.map(pack => (
              <TableRow key={pack._id}>
                <TableCell
                  className={s.firstColumn}
                  onClick={() => goToCardsList(pack._id)}
                  component="th"
                  scope="row"
                >
                  <span>{pack.name}</span>
                </TableCell>
                <TableCell>{pack.cardsCount}</TableCell>
                <TableCell>{formatDate(pack.created)}</TableCell>
                <TableCell>{pack.user_name}</TableCell>
                <TableCell>
                  <ActionsSvg
                    key={pack._id}
                    isMyPack={isMyPack(pack.user_id)}
                    packId={pack._id}
                    cardsCount={pack.cardsCount}
                    namePack={pack.name}
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
      </Table>
    </TableContainer>
  );
};
