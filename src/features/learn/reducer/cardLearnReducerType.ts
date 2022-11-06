import {
  clearLearnStateAC,
  initialStateCardLearn,
  isShowAnswerAC,
  setCardLearnAC,
  setCardsLearnDataAC,
  updateCardGradeAC,
} from './learnReducer';

// initialState type
export type InitialStateCardLearn = typeof initialStateCardLearn;

// action

export type SetCardLearnACType = ReturnType<typeof setCardLearnAC>;
export type IsShowAnswerAcType = ReturnType<typeof isShowAnswerAC>;
export type SetCardsLearnDataACType = ReturnType<typeof setCardsLearnDataAC>;
export type UpdateCarGradedACType = ReturnType<typeof updateCardGradeAC>;

export type clearLearnStateACType = ReturnType<typeof clearLearnStateAC>;

export type StateCardLearnReducerActionsType =
  | SetCardLearnACType
  | IsShowAnswerAcType
  | SetCardsLearnDataACType
  | UpdateCarGradedACType
  | clearLearnStateACType;
