import { setCardsPackNameAC } from '../../cards/reducer/cardsReducer';

import {
  initialStatePacks,
  setCancelFilterAC,
  setMinMaxCountAC,
  setPackDataAC,
  setPackNameAC,
  setPackSortAC,
  setPacksPerPageAC,
  setSearchAC,
  setQueryParamsAC,
  setSelectedPageAC,
  setUserIdAC,
} from './packsReducer';

// initialState type
export type InitialStatePacks = typeof initialStatePacks;

// action
export type SetPackDataACType = ReturnType<typeof setPackDataAC>;
export type SetPackPerPageACType = ReturnType<typeof setPacksPerPageAC>;
export type SetSelectedPageACType = ReturnType<typeof setSelectedPageAC>;
export type SetPackNameACType = ReturnType<typeof setPackNameAC>;
export type SetPackSortACType = ReturnType<typeof setPackSortAC>;
export type SetUserIdACType = ReturnType<typeof setUserIdAC>;
export type SetMinMaxCountACType = ReturnType<typeof setMinMaxCountAC>;
export type SetCancelFilterACType = ReturnType<typeof setCancelFilterAC>;
export type SetQueryParamsACType = ReturnType<typeof setQueryParamsAC>;
export type SetSearchACType = ReturnType<typeof setSearchAC>;
// card reducer AC
export type SetCardsPackNameACType = ReturnType<typeof setCardsPackNameAC>;

export type PacksReducerActionsType =
  | SetPackDataACType
  | SetPackPerPageACType
  | SetSelectedPageACType
  | SetPackNameACType
  | SetPackSortACType
  | SetUserIdACType
  | SetMinMaxCountACType
  | SetCancelFilterACType
  | SetCardsPackNameACType
  | SetSearchACType
  | SetQueryParamsACType;

export type QueryParamsType = {
  page?: string;
  pageCount?: string;
};
