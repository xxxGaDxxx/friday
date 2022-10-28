import {
  addCardsAC,
  initialStateCardTable,
  setCardsDataAC,
  setCardSortAC,
  setCardsPackIdAC,
  setCardsPerPageAC,
  setQuestionSearchAC,
  setSelectedCardsPageAC,
} from './cardTableReducer';

// initialState type
export type InitialStateCardTable = typeof initialStateCardTable;

// action
export type SetCardsDataACType = ReturnType<typeof setCardsDataAC>;
export type AddCardsACType = ReturnType<typeof addCardsAC>;
export type SetCardsPackIdACType = ReturnType<typeof setCardsPackIdAC>;
export type SetCardSortACType = ReturnType<typeof setCardSortAC>;
export type SetQuestionSearchACType = ReturnType<typeof setQuestionSearchAC>;
export type SetCardsPerPageACType = ReturnType<typeof setCardsPerPageAC>;
export type SetSelectedCardsPageACType = ReturnType<typeof setSelectedCardsPageAC>;

export type StateCardsReducerActionsType =
  | SetCardsDataACType
  | AddCardsACType
  | SetCardsPackIdACType
  | SetCardSortACType
  | SetQuestionSearchACType
  | SetCardsPerPageACType
  | SetSelectedCardsPageACType;
