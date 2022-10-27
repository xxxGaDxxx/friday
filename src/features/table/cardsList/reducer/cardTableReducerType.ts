// initialState type
import { addCardsAC, initialStateCardTable, setCardsDataAC } from './cardTableReducer';

export type InitialStateCardTable = typeof initialStateCardTable;

// action
export type SetCardsDataACType = ReturnType<typeof setCardsDataAC>;
export type AddCardsACType = ReturnType<typeof addCardsAC>;

export type StateCardsReducerActionsType = SetCardsDataACType | AddCardsACType;
