import { learnAPI } from '../../../api/learnAPI';
import { CardsType } from '../../../api/types/apiType';
import { errorUtils } from '../../../common/utils/errorUtils';
import { setAppStatusAC } from '../../../store/app-reducer';
import { AppThunk } from '../../../store/store';
import { updateCardGradeAC } from '../../cards/reducer/cardsReducer';

import { InitialStateCardLearn, StateCardLearnReducerActionsType } from './cardLearnReducerType';

export const initialStateCardLearn = {
  card: {} as CardsType,
  showAnswer: false,
};

export const cardLearnReducer = (
  state: InitialStateCardLearn = initialStateCardLearn,
  action: StateCardLearnReducerActionsType,
): InitialStateCardLearn => {
  switch (action.type) {
    case 'LEARN/SET-CARD-LEARN':
      return {
        ...state,
        card: { ...action.payload.card }, // СДЕЛАТЬ .map по _id
      };
    case 'LEARN/IS-SHOW-ANSWER':
      return {
        ...state,
        showAnswer: action.payload.isShow,
      };
    case 'LEARN/CLEAR-LEARN':
      return initialStateCardLearn;
    default:
      return state;
  }
};

export const setCardLearnAC = (card: CardsType) =>
  ({ type: 'LEARN/SET-CARD-LEARN', payload: { card } } as const);

export const isShowAnswerAC = (isShow: boolean) =>
  ({ type: 'LEARN/IS-SHOW-ANSWER', payload: { isShow } } as const);

export const clearLearnStateAC = () => ({ type: 'LEARN/CLEAR-LEARN' } as const);

export const updateGradeTC =
  (grade: number, card_id: string): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC('loading'));

    const data: UpdateGradeType = {
      grade,
      card_id,
    };

    learnAPI
      .updateGrade(data)

      .then(res => {
        dispatch(updateCardGradeAC(res.data.updatedGrade));

        dispatch(isShowAnswerAC(false));

        dispatch(setAppStatusAC('succeeded'));
      })

      .catch(err => {
        errorUtils(err, dispatch);
      });
  };

export type UpdateGradeType = {
  grade: number;
  card_id: string;
};
