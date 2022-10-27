import { AxiosResponse } from 'axios';

import { instance } from './config';
import {
  AddCardResponseType,
  AddPackResponseType,
  CardsPackType,
  CardsResponseType,
  DeleteCardResponseType,
  DeletePackResponseType,
  PackDateResponseType,
  ParamsCardsType,
  ParamsPacksType,
  PutCardResponseType,
  PutPackResponseType,
  UpdateCardType,
  UpdatePackType,
} from './types/apiType';

export const cardsPack = {
  cardPacksDate(params?: ParamsPacksType) {
    return instance.get<PackDateResponseType>('/cards/pack', {
      params,
    });
  },
  deletePack(packId: string) {
    return instance.delete<DeletePackResponseType>(`/cards/pack?id=${packId}`);
  },
  putPackName(packNew: UpdatePackType) {
    return instance.put<UpdatePackType, PutPackResponseType>('/cards/pack', { cardsPack: packNew });
  },
  addPack(cardsPack: CardsPackType) {
    return instance.post<CardsPackType, AddPackResponseType>('/cards/pack', { cardsPack });
  },
};

export const cardsItems = {
  cardsData(params?: ParamsCardsType) {
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
  putCard(card: UpdateCardType) {
    return instance.put<UpdateCardType, PutCardResponseType>('/cards/card', { card });
  },
};
