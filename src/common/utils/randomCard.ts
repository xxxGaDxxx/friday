import { CardsType } from '../../api/types/apiType';

const NUM = 6;

export const randomCard = (cards: CardsType[]): CardsType => {
  const sum = cards.reduce((acc, card) => acc + (NUM - card.grade) * (NUM - card.grade), 0);
  const rand = Math.random() * sum;
  const res = cards.reduce(
    (acc: { sum: number; id: number }, card, i) => {
      const newSum = acc.sum + (NUM - card.grade) * (NUM - card.grade);

      return { sum: newSum, id: newSum < rand ? i : acc.id };
    },
    { sum: 0, id: -1 },
  );

  return cards[res.id + 1];
};
