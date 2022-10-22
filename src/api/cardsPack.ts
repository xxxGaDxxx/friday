import { instance } from './config';
import { PackDateResponseType } from './types/apiType';

export const cardsPack = {
  cardPacksDate() {
    return instance.get<PackDateResponseType>('/cards/pack', {
      params: {
        page: 15,
        pageCount: 4,
      },
    });
  },
};
