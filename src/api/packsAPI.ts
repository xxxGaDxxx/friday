import { instance } from './config';
import {
  AddPackResponseType,
  CardsPackType,
  DeletePackResponseType,
  PackDataResponseType,
  ParamsPacksType,
  PutPackResponseType,
  UpdatePackType,
} from './types/apiType';

export const packsAPI = {
  getPacks(params?: ParamsPacksType) {
    return instance.get<PackDataResponseType>('/cards/pack', {
      params,
    });
  },

  deletePack(packId: string) {
    return instance.delete<DeletePackResponseType>(`/cards/pack?id=${packId}`);
  },

  updatePack(cardsPack: UpdatePackType) {
    return instance.put<UpdatePackType, PutPackResponseType>('/cards/pack', { cardsPack });
  },

  addPack(cardsPack: CardsPackType) {
    return instance.post<CardsPackType, AddPackResponseType>('/cards/pack', { cardsPack });
  },
};
