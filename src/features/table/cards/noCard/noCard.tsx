import React, { memo } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useAppDispatch } from '../../../../app/store/store';
import { BackTo } from '../../../../common/components/backTo/BackTo';
import { PATH } from '../../../../common/enum/pathEnum';
import { ReturnComponentType } from '../../../../common/types';
import { addCardTC } from '../reducer/cardTableReducer';
import s from '../styles/Cards.module.scss';

type NoCardType = {
  isMyPack: boolean;
  packName: string;
  cardPackId: string;
};

export const NoCard = memo(
  ({ isMyPack, packName, cardPackId }: NoCardType): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const onAddNewCardClick = (): void => {
      dispatch(addCardTC(cardPackId));
    };

    return (
      <main className={s.main}>
        <BackTo path={PATH.PACKS_LIST} nameOfPath="Packs List" />
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
