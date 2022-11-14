import {
  // addCardsAC,
  clearStateData,
  initialStateCards,
  setCardsDataAC,
  setCardSortAC,
  setCardsPackIdAC,
  setCardsPackNameAC,
  setCardsPerPageAC,
  setCardsTotalCountAC,
  setPackCoverAC,
  // setQuestionFormatAC,
  setQuestionSearchAC,
  setSelectedCardsPageAC,
} from './cardsReducer';

// initialState type
export type InitialStateCards = typeof initialStateCards;

// action
export type SetCardsDataACType = ReturnType<typeof setCardsDataAC>;
// export type AddCardsACType = ReturnType<typeof addCardsAC>;
export type SetCardsPackIdACType = ReturnType<typeof setCardsPackIdAC>;
export type SetCardSortACType = ReturnType<typeof setCardSortAC>;
export type SetQuestionSearchACType = ReturnType<typeof setQuestionSearchAC>;
export type SetCardsPerPageACType = ReturnType<typeof setCardsPerPageAC>;
export type SetSelectedCardsPageACType = ReturnType<typeof setSelectedCardsPageAC>;
export type SetCardsPackNameACType = ReturnType<typeof setCardsPackNameAC>;
export type SetCardsTotalCountACType = ReturnType<typeof setCardsTotalCountAC>;
export type SetDeckCoverPackACType = ReturnType<typeof setPackCoverAC>;
export type clearStateDataType = ReturnType<typeof clearStateData>;

export type StateCardsReducerActionsType =
  | SetCardsDataACType
  | SetCardsPackIdACType
  | SetCardSortACType
  | SetQuestionSearchACType
  | SetCardsPerPageACType
  | SetSelectedCardsPageACType
  | SetCardsPackNameACType
  | SetCardsTotalCountACType
  | SetDeckCoverPackACType
  | clearStateDataType;
