import React, { memo } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { BackTo } from '../../../common/components/backTo/BackTo';
import { PATH } from '../../../common/enum/pathEnum';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { ReturnComponentType } from '../../../common/types';
import { addCardTC } from '../reducer/cardTableReducer';
import s from '../styles/Cards.module.scss';

import { NoCardType } from './type/NoCardType';

export const NoCard = memo(
  ({ isMyPack, packName, cardPackId }: NoCardType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const onAddNewCardClick = (): void => {
      dispatch(addCardTC(cardPackId));
    };

    return (
      <main className={s.main}>
        <BackTo path={PATH.PACKS} nameOfPath="Packs List" />
        <section className={s.section}>
          <Box className={s.box}>
            <Typography component="h1">{packName}</Typography>
          </Box>

          <p>This pack is empty. Click add new card to fill this pack</p>

          {isMyPack && (
            <Button
              className={s.addCardButton}
              type="button"
              variant="contained"
              color="primary"
              onClick={onAddNewCardClick}
            >
              Add new card
            </Button>
          )}
        </section>
      </main>
    );
  },
);
