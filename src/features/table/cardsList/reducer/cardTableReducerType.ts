// initialState type
import { initialStateCardTable, setCardsDataAC } from './cardTableReducer';

export type InitialStateCardTable = typeof initialStateCardTable;

// action
export type SetCardsDataACType = ReturnType<typeof setCardsDataAC>;

export type StateCardsReducerActionsType = SetCardsDataACType;
