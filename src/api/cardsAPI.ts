import { AxiosResponse } from 'axios';

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
    return instance.get<ParamsCardsType, AxiosResponse<CardsResponseType>>('/cards/card', {
      params,
    });
  },

  addCard(card: ParamsCardsType) {
    return instance.post<ParamsCardsType, AxiosResponse<AddCardResponseType>>('/cards/card', {
      card,
    });
  },

  deleteCard(cardId: string) {
    return instance.delete<DeleteCardResponseType>(`/cards/card?id=${cardId}`);
  },

  updateCard(card: UpdateCardType) {
    return instance.put<UpdateCardType, PutCardResponseType>('/cards/card', { card });
  },
};
