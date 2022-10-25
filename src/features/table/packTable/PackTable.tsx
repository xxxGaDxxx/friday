import * as React from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';

import { useAppSelector } from '../../../app/store/store';
import { ActionsSvg } from '../../../common/components/actionsSvg/ActionsSvg';
import { PATH } from '../../../common/enum/pathEnum';
import { dayMonthYear } from '../../../common/utils/dayMonthYear';
import { ReturnComponentType } from '../../../types';

import { HatTable } from './hatTable/HatTable';

export const PackTable = (): ReturnComponentType => {
  const navigate = useNavigate();
  const cardPacks = useAppSelector(state => state.pack.cardPacks);
  const userId = useAppSelector(state => state.profile._id);

  const isMyPack = (id: string): boolean => userId === id;
  const goToCardslist = (): void => navigate(PATH.CARDS_LIST);

  return (
    <TableContainer sx={{ maxWidth: '1010px' }} component={Paper}>
      <Table aria-label="caption table">
        <HatTable />
        <TableBody>
          {cardPacks.map(pack => (
            <TableRow key={pack._id}>
              <TableCell onClick={goToCardslist} component="th" scope="row">
                {pack.name}
              </TableCell>
              <TableCell align="right">{pack.cardsCount}</TableCell>
              <TableCell align="right">{dayMonthYear(pack.created)}</TableCell>
              <TableCell align="right">{pack.user_name}</TableCell>
              <TableCell align="right">
                <ActionsSvg
                  key={pack._id}
                  isMyPack={isMyPack(pack.user_id)}
                  packId={pack._id}
                  cardsCount={pack.cardsCount}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
