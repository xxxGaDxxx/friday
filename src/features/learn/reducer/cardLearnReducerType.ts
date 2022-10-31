import { initialStateCardLearn, isShowAnswerAc, setCardLearnAC } from './learnReducer';

// initialState type
export type InitialStateCardLearn = typeof initialStateCardLearn;

// action

export type SetCardLearnACType = ReturnType<typeof setCardLearnAC>;
export type IsShowAnswerAcType = ReturnType<typeof isShowAnswerAc>;

export type StateCardLearnReducerActionsType = SetCardLearnACType | IsShowAnswerAcType;
