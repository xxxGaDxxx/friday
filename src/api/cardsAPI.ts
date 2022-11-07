import { instance } from './config';
import {
  AddCardResponseType,
  CardsResponseType,
  DeleteCardResponseType,
  ParamsCardsType,
  PutCardResponseType,
  UpdateCardType,
} from './types/apiType';

export const cardsAPI = {
  getCards(params?: ParamsCardsType) {
    return instance.get<CardsResponseType>('/cards/card', {
      params,
    });
  },

  addCard(card: ParamsCardsType) {
    return instance.post<AddCardResponseType>('/cards/card', {
      card,
    });
  },

  deleteCard(cardId: string) {
    return instance.delete<DeleteCardResponseType>(`/cards/card?id=${cardId}`);
  },

  updateCard(card: UpdateCardType) {
    return instance.put<PutCardResponseType>('/cards/card', { card });
  },
};
