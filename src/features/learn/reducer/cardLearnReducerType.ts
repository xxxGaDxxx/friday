import {
  clearLearnStateAC,
  initialStateCardLearn,
  isShowAnswerAC,
  setCardLearnAC,
} from './learnReducer';

// initialState type
export type InitialStateCardLearn = typeof initialStateCardLearn;

// action

export type SetCardLearnACType = ReturnType<typeof setCardLearnAC>;
export type IsShowAnswerAcType = ReturnType<typeof isShowAnswerAC>;
export type clearLearnStateACType = ReturnType<typeof clearLearnStateAC>;

export type StateCardLearnReducerActionsType =
  | SetCardLearnACType
  | IsShowAnswerAcType
  | clearLearnStateACType;
