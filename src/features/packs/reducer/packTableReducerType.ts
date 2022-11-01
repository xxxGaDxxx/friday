import { setCardsPackNameAC } from '../../cards/reducer/cardsReducer';

import {
  initialStatePacks,
  setCancelFilterAC,
  setMinMaxCountAC,
  setPackDataAC,
  setPackNameAC,
  setPackSortAC,
  setPacksPerPageAC,
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
  | SetCardsPackNameACType;
