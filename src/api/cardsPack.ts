import { instance } from './config';
import {
  AddCardResponseType,
  CardsPackType,
  CardsResponseType,
  PackDateResponseType,
  ParamsCardsType,
  ParamsPacksType,
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
    return instance.delete(`/cards/pack?id=${packId}`);
  },
  putPackName(packNew: UpdatePackType) {
    return instance.put('/cards/pack', { cardsPack: packNew });
  },
  addPack(cardsPack: CardsPackType) {
    return instance.post('/cards/pack', { cardsPack });
  },
};

export const cardsItems = {
  cardsData(params?: ParamsCardsType) {
    return instance.get<CardsResponseType>('/cards/card', { params });
  },
  addCard(card: any) {
    return instance.post<AddCardResponseType>('/cards/card', { card });
  },
  deleteCard(cardId: string) {
    return instance.delete(`/cards/card?id=${cardId}`);
  },
  putCard(card: UpdateCardType) {
    return instance.put('/cards/card', { card });
  },
};
