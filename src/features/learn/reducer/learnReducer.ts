import { learnAPI } from '../../../api/learnAPI';
import { CardsType } from '../../../api/types/apiType';
import { errorUtils } from '../../../common/utils/errorUtils';
import { setAppStatusAC } from '../../../store/app-reducer';
import { AppThunk } from '../../../store/store';
import { updateCarGradedAC } from '../../cards/reducer/cardsReducer';
import { getCard } from '../getCard';

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
    default:
      return state;
  }
};

export const setCardLearnAC = (card: CardsType) =>
  ({ type: 'LEARN/SET-CARD-LEARN', payload: { card } } as const);

export const isShowAnswerAc = (isShow: boolean) =>
  ({ type: 'LEARN/IS-SHOW-ANSWER', payload: { isShow } } as const);

export const updateGradeTC =
  (grade: number, card_id: string): AppThunk =>
  (dispatch, getState) => {
    dispatch(setAppStatusAC('loading'));

    const { cards } = getState().card;

    const data: UpdateGradeType = {
      grade,
      card_id,
    };

    learnAPI
      .updateGrade(data)

      .then(res => {
        dispatch(updateCarGradedAC(res.data.updatedGrade));

        dispatch(setCardLearnAC(getCard(cards)));

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
