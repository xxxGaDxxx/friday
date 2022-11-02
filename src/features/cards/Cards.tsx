import React, { useEffect } from 'react';

import { BackTo } from '../../common/components/backTo/BackTo';
import { PaginationPage } from '../../common/components/pagination/PaginationPage';
import { Search } from '../../common/components/search/Search';
import { PATH } from '../../common/enum/pathEnum';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../common/types';

import { CardsTableGeneral } from './components/CardsTableGeneral';
import { EmptyPack } from './components/EmptyPack';
import { PackNameAndButton } from './components/PackNameAndButton';
import {
  cardDataTC,
  setCardsPerPageAC,
  setQuestionSearchAC,
  setSelectedCardsPageAC,
} from './reducer/cardsReducer';
import s from './styles/Cards.module.scss';

export const Cards = (): ReturnComponentType => {
  const userId = useAppSelector(state => state.profile._id);
  const cards = useAppSelector(state => state.card.cards);
  const packUserId = useAppSelector(state => state.card.packUserId);
  const packName = useAppSelector(state => state.card.packName);
  const cardPackId = useAppSelector(state => state.card.cardsPackId);
  const sortCards = useAppSelector(state => state.card.sortCards);
  const cardQuestion = useAppSelector(state => state.card.cardQuestion);
  const page = useAppSelector(state => state.card.page);
  const pageCount = useAppSelector(state => state.card.pageCount);
  const cardsTotalCount = useAppSelector(state => state.card.cardsTotalCount);

  const dispatch = useAppDispatch();

  const changeCardsPerPage = (count: number): void => {
    dispatch(setCardsPerPageAC(count));
  };

  const setSelectedCardsPage = (page: number): void => {
    dispatch(setSelectedCardsPageAC(page));
  };

  const isMyPack = userId === packUserId;

  useEffect(() => {
    dispatch(cardDataTC(cardPackId));
  }, [dispatch, cardPackId, sortCards, cardQuestion, page, cardsTotalCount, packName, pageCount]);

  if (cards.length && cardsTotalCount === 0) {
    return <EmptyPack isMyPack={isMyPack} packName={packName} cardPackId={cardPackId} />;
  }

  return (
    <main className={s.main}>
      <BackTo path={PATH.PACKS} nameOfPath="Packs List" />
      <PackNameAndButton
        isMyPack={isMyPack}
        packName={packName}
        cardPackId={cardPackId}
        cardsTotalCount={cardsTotalCount}
      />

      <Search action={setQuestionSearchAC} />

      <section className={s.table}>
        <CardsTableGeneral />
      </section>

      <section className={s.pagination}>
        <PaginationPage
          totalItems={cardsTotalCount}
          itemsPerPage={pageCount}
          selectPage={setSelectedCardsPage}
          changeCountItemsPerPage={changeCardsPerPage}
        />
      </section>
    </main>
  );
};
