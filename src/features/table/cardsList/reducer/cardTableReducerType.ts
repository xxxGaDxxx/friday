// initialState type
import {
  addCardsAC,
  initialStateCardTable,
  setCardsDataAC,
  setCardsPackIdAC,
} from './cardTableReducer';

export type InitialStateCardTable = typeof initialStateCardTable;

// action
export type SetCardsDataACType = ReturnType<typeof setCardsDataAC>;
export type AddCardsACType = ReturnType<typeof addCardsAC>;
export type SetCardsPackIdACType = ReturnType<typeof setCardsPackIdAC>;

export type StateCardsReducerActionsType =
  | SetCardsDataACType
  | AddCardsACType
  | SetCardsPackIdACType;
