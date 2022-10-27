import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../app/store/store';
import { BackTo } from '../../../common/components/backTo/BackTo';
import { PATH } from '../../../common/enum/pathEnum';
import { ReturnComponentType } from '../../../common/types';
import { Search } from '../packs/packTable/sortBar/sortBarComponents/Search';

import { CardsTable } from './cardTable/CardsTable';
import { NoCard } from './noCard/noCard';
import { cardDataTC, setQuestionSearchAC } from './reducer/cardTableReducer';
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

  const dispatch = useAppDispatch();

  const isMyPack = userId === packUserId;

  useEffect(() => {
    dispatch(cardDataTC(cardPackId));
  }, [dispatch, cardPackId, cards.length, sortCards, cardQuestion]);

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
    </main>
  );
};
