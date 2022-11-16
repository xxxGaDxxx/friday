import React, { memo } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import defaultCover from '../../../assets/img/noCover.jpg';
import { BackTo } from '../../../common/components/backTo/BackTo';
import { styleButtonActivateModal } from '../../../common/components/universalModalWindow/style/styleMUIComponents';
import { PATH } from '../../../common/enum/pathEnum';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../common/types';
import s from '../styles/Cards.module.scss';

import { CardModal } from './cardsModals/CardModal';

type EmptyPackType = {
  isMyPack: boolean;
  packName: string;
  cardPackId: string;
};

export const EmptyPack = memo(
  ({ isMyPack, packName, cardPackId }: EmptyPackType): ReturnComponentType => {
    const deckCovePack = useAppSelector(state => state.card.packDeckCover);

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
              <CardModal
                variantOfButtonToCallModal="contained"
                cardPackId={cardPackId}
                clickHere="Add new card"
                styleIcons={styleButtonActivateModal}
                definedQuestion=""
                definedImage=""
                definedQuestionFormat="Text"
                defaultAnswer=""
                title="Add card"
              />
            </>
          ) : (
            <p>This pack is empty.</p>
          )}
        </section>
        <img className={s.cover} src={deckCovePack || defaultCover} alt="Cover" />
      </main>
    );
  },
);
