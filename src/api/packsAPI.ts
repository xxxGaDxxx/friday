import { instance } from './config';
import {
  AddPackResponseType,
  ParamsCardsPackType,
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
    return instance.put<PutPackResponseType>('/cards/pack', { cardsPack });
  },

  addPack(cardsPack: ParamsCardsPackType) {
    return instance.post<AddPackResponseType>('/cards/pack', { cardsPack });
  },
};
