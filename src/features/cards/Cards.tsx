import React, { useCallback, useEffect } from 'react';

import { BackTo } from '../../common/components/backTo/BackTo';
import { PATH } from '../../common/enum/pathEnum';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../common/types';
import { Search } from '../packs/packTable/sortBar/sortBarComponents/Search';

import { CardsTable } from './cardTable/CardsTable';
import { NoCard } from './noCard/noCard';
import { PaginationCardsPage } from './pagination/PaginationCardsPage';
import {
  cardDataTC,
  setCardsPerPageAC,
  setQuestionSearchAC,
  setSelectedCardsPageAC,
} from './reducer/cardTableReducer';
import s from './styles/Cards.module.scss';
import { TitleButton } from './titleButton/TitleButton';

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

  const changeCardsPerPage = useCallback(
    (count: number): void => {
      dispatch(setCardsPerPageAC(count));
    },
    [dispatch],
  );

  const setSelectedCardsPage = useCallback(
    (page: number): void => {
      dispatch(setSelectedCardsPageAC(page));
    },
    [dispatch],
  );

  const isMyPack = userId === packUserId;

  useEffect(() => {
    dispatch(cardDataTC(cardPackId));
  }, [dispatch, cardPackId, sortCards, cardQuestion, page, cardsTotalCount]);

  if (cards.length === 0) {
    return <NoCard isMyPack={isMyPack} packName={packName} cardPackId={cardPackId} />;
  }

  return (
    <main className={s.main}>
      <BackTo path={PATH.PACKS_LIST} nameOfPath="Packs List" />
      <TitleButton isMyPack={isMyPack} packName={packName} cardPackId={cardPackId} />
      <Search action={setQuestionSearchAC} />
      <section className={s.table}>
        <CardsTable />
      </section>
      <section className={s.pagination}>
        <PaginationCardsPage
          itemsPerPage={pageCount}
          selectPage={setSelectedCardsPage}
          changeCountItemsPerPage={changeCardsPerPage}
        />
      </section>
    </main>
  );
};
