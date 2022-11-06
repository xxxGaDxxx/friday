import { AxiosError } from 'axios';

import { cardsAPI } from '../../../api/cardsAPI';
import { learnAPI } from '../../../api/learnAPI';
import { CardsType, ParamsCardsType, UpdatedGradeType } from '../../../api/types/apiType';
import { errorUtils } from '../../../common/utils/errorUtils';
import { randomCard } from '../../../common/utils/randomCard';
import { setAppStatusAC } from '../../../store/app-reducer';
import { AppThunk } from '../../../store/store';

import { InitialStateCardLearn, StateCardLearnReducerActionsType } from './cardLearnReducerType';

export const initialStateCardLearn = {
  cards: [] as CardsType[],
  card: {} as CardsType,
  showAnswer: false,
};

export const cardLearnReducer = (
  state: InitialStateCardLearn = initialStateCardLearn,
  action: StateCardLearnReducerActionsType,
): InitialStateCardLearn => {
  switch (action.type) {
    case 'CARDS/SET-CARDS-LEARN-DATA':
      return {
        ...state,
        cards: [...action.payload.cards],
      };

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

    case 'LEARN/UPDATE-CARD-GRADE':
      return {
        ...state,
        cards: state.cards.map(card =>
          card._id === action.payload.card.card_id
            ? { ...card, shots: action.payload.card.shots, grade: action.payload.card.grade }
            : card,
        ),
      };

    case 'LEARN/CLEAR-LEARN':
      return initialStateCardLearn;

    default:
      return state;
  }
};

// actions
export const setCardLearnAC = (card: CardsType) =>
  ({ type: 'LEARN/SET-CARD-LEARN', payload: { card } } as const);

export const isShowAnswerAC = (isShow: boolean) =>
  ({ type: 'LEARN/IS-SHOW-ANSWER', payload: { isShow } } as const);

export const setCardsLearnDataAC = (cards: CardsType[]) =>
  ({ type: 'CARDS/SET-CARDS-LEARN-DATA', payload: { cards } } as const);

export const updateCardGradeAC = (card: UpdatedGradeType) =>
  ({ type: 'LEARN/UPDATE-CARD-GRADE', payload: { card } } as const);

export const clearLearnStateAC = () => ({ type: 'LEARN/CLEAR-LEARN' } as const);

// thunk
export const updateGradeTC =
  (grade: number, card_id: string): AppThunk =>
  async dispatch => {
    const params: UpdateGradeType = {
      grade,
      card_id,
    };

    try {
      dispatch(setAppStatusAC('loading'));

      const { data } = await learnAPI.updateGrade(params);

      dispatch(updateCardGradeAC(data.updatedGrade));
      dispatch(isShowAnswerAC(false));
      dispatch(setAppStatusAC('succeeded'));
    } catch (err) {
      errorUtils(err as AxiosError, dispatch);
    }
  };

export const getCardsLearnDataTC =
  (_id: string, allPageCount: number): AppThunk =>
  async dispatch => {
    const params: ParamsCardsType = {
      cardsPack_id: _id,
      pageCount: allPageCount,
    };

    try {
      dispatch(setAppStatusAC('loading'));

      const { data } = await cardsAPI.getCards(params);

      dispatch(setCardsLearnDataAC(data.cards));
      dispatch(setCardLearnAC(randomCard(data.cards)));
      dispatch(setAppStatusAC('succeeded'));
    } catch (err) {
      errorUtils(err as AxiosError, dispatch);
    }
  };

// Type
export type UpdateGradeType = {
  grade: number;
  card_id: string;
};
