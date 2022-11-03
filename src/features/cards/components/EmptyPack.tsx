import React, { memo } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { BackTo } from '../../../common/components/backTo/BackTo';
import { PATH } from '../../../common/enum/pathEnum';
import { ReturnComponentType } from '../../../common/types';
import s from '../styles/Cards.module.scss';

import { AddCardModal } from './cardsModals/AddCardModal';

type EmptyPackType = {
  isMyPack: boolean;
  packName: string;
  cardPackId: string;
};

export const EmptyPack = memo(
  ({ isMyPack, packName, cardPackId }: EmptyPackType): ReturnComponentType => {
    return (
      <main className={s.main}>
        <BackTo path={PATH.PACKS} nameOfPath="Packs List" />
        <section className={s.section}>
          <Box className={s.box}>
            <Typography component="h1">{packName}</Typography>
          </Box>

          {isMyPack ? (
            <>
              <p>This pack is empty. Click add new card to fill this pack</p>
              <AddCardModal cardPackId={cardPackId} clickHere="Add new card" />
              {/* <Button */}
              {/*  className={s.addCardButton} */}
              {/*  type="button" */}
              {/*  variant="contained" */}
              {/*  color="primary" */}
              {/*  onClick={addNewCard} */}
              {/* > */}
              {/*  Add new card */}
              {/* </Button> */}
            </>
          ) : (
            <p>This pack is empty.</p>
          )}
        </section>
      </main>
    );
  },
);
