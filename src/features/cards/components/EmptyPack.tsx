import React, { memo } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import defaultCover from '../../../assets/img/noCover.jpg';
import { BackTo } from '../../../common/components/backTo/BackTo';
import { PATH } from '../../../common/enum/pathEnum';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
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
    const deckCovePack = useAppSelector(state => state.card.deckCovePack);

    return (
      <main className={s.main}>
        <BackTo path={PATH.PACKS} nameOfPath="Packs List" />
        <section className={s.section}>
          <Box className={s.box}>
            <Typography component="h1">{packName}</Typography>
            <img
              style={{ width: '300px', height: '150px' }}
              src={deckCovePack || defaultCover}
              alt="Cover"
            />
          </Box>

          {isMyPack ? (
            <>
              <p>This pack is empty. Click add new card to fill this pack</p>
              <AddCardModal cardPackId={cardPackId} clickHere="Add new card" />
            </>
          ) : (
            <p>This pack is empty.</p>
          )}
        </section>
      </main>
    );
  },
);
