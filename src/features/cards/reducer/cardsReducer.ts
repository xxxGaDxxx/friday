import { AxiosError } from 'axios';

import { cardsAPI } from '../../../api/cardsAPI';
import { CardsResponseType, CardsType, ParamsCardsType } from '../../../api/types/apiType';
import { errorUtils } from '../../../common/utils/errorUtils';
import { setAppStatusAC } from '../../../store/app-reducer';
import { AppThunk } from '../../../store/store';

import { InitialStateCards, StateCardsReducerActionsType } from './cardsReducerType';

export const initialStateCards = {
  cards: [] as CardsType[],
  packUserId: '',
  packName: '',
  packPrivate: false,
  packCreated: '',
  packUpdated: '',
  page: 1,
  pageCount: 5,
  cardsTotalCount: 0,
  minGrade: 0,
  maxGrade: 0,
  token: '',
  tokenDeathTime: 0,
  cardsPackId: '',
  sortCards: '',
  question: '',
  deckCovePack: '',
};

export const cardsReducer = (
  state: InitialStateCards = initialStateCards,
  action: StateCardsReducerActionsType,
): InitialStateCards => {
  switch (action.type) {
    case 'CARDS/SET-CARDS-DATA':
      return {
        ...state,
        ...action.payload.data,
      };
    case 'CARDS/ADD-CARDS':
      return {
        ...state,
        cards: [action.payload.newCard, ...state.cards],
      };
    case 'CARDS/SET-CARDS-PACK-ID':
      return {
        ...state,
        cardsPackId: action.payload.cardsPackId,
      };
    case 'CARDS/SET-CARD-SORT':
    case 'CARDS/SET-QUESTION-SEARCH':
    case 'CARDS/SET-SELECTED-PAGE':
    case 'CARDS/SET-CARDS-PACK-NAME':
    case 'CARDS/CARDS-TOTAL-COUNT':
      return {
        ...state,
        ...action.payload,
      };
    case 'CARDS/SET-CARDS-PER-PAGE':
      return {
        ...state,
        pageCount: action.payload.count,
      };
    case 'CARDS/DECK-COVER-PACK':
      return {
        ...state,
        deckCovePack: action.payload.deckCoverPack,
      };
    default:
      return state;
  }
};

// action
export const setCardsDataAC = (data: CardsResponseType) =>
  ({ type: 'CARDS/SET-CARDS-DATA', payload: { data } } as const);

export const addCardsAC = (newCard: CardsType) =>
  ({ type: 'CARDS/ADD-CARDS', payload: { newCard } } as const);

export const setCardsPackIdAC = (cardsPackId: string) =>
  ({ type: 'CARDS/SET-CARDS-PACK-ID', payload: { cardsPackId } } as const);

export const setCardsPackNameAC = (packName: string) =>
  ({ type: 'CARDS/SET-CARDS-PACK-NAME', payload: { packName } } as const);

export const setCardSortAC = (sortCards: string) =>
  ({ type: 'CARDS/SET-CARD-SORT', payload: { sortCards } } as const);

export const setQuestionSearchAC = (question: string) =>
  ({ type: 'CARDS/SET-QUESTION-SEARCH', payload: { question } } as const);

export const setCardsPerPageAC = (count: number) =>
  ({ type: 'CARDS/SET-CARDS-PER-PAGE', payload: { count } } as const);

export const setSelectedCardsPageAC = (page: number) =>
  ({ type: 'CARDS/SET-SELECTED-PAGE', payload: { page } } as const);

export const setCardsTotalCountAC = (cardsTotalCount: number) =>
  ({ type: 'CARDS/CARDS-TOTAL-COUNT', payload: { cardsTotalCount } } as const);

export const setDeckCoverPackAC = (deckCoverPack: string) =>
  ({ type: 'CARDS/DECK-COVER-PACK', payload: { deckCoverPack } } as const);
// thunk
export const getCardDataTC =
  (_id: string): AppThunk =>
  async (dispatch, getState) => {
    const { pageCount, page, sortCards, minGrade, maxGrade, question } = getState().card;

    const params: ParamsCardsType = {
      cardsPack_id: _id,
      sortCards,
      cardQuestion: question,
      page,
      pageCount,
      min: minGrade,
      max: maxGrade,
    };

    try {
      dispatch(setAppStatusAC('loading'));

      const { data } = await cardsAPI.getCards(params);

      dispatch(setCardsDataAC(data));
      dispatch(setAppStatusAC('succeeded'));
    } catch (err) {
      errorUtils(err as AxiosError, dispatch);
    }
  };

export const addCardTC =
  (
    _id: string,
    question?: string,
    answer?: string,
    cardQuestion?: string,
    cardAnswer?: string,
    answerImg?: string,
    questionImg?: string,
  ): AppThunk =>
  async dispatch => {
    const card: ParamsCardsType = {
      cardsPack_id: _id,
      answer,
      question,
      answerImg,
      questionImg,
    };

    try {
      dispatch(setAppStatusAC('loading'));

      const { data } = await cardsAPI.addCard(card);

      dispatch(addCardsAC(data.newCard));
      dispatch(getCardDataTC(_id));
      dispatch(setAppStatusAC('succeeded'));
    } catch (err) {
      errorUtils(err as AxiosError, dispatch);
    }
  };

export const deleteCardTC =
  (cardId: string, cardPackId: string): AppThunk =>
  async dispatch => {
    try {
      dispatch(setAppStatusAC('loading'));

      await cardsAPI.deleteCard(cardId);
      dispatch(getCardDataTC(cardPackId));
      dispatch(setAppStatusAC('succeeded'));
    } catch (err) {
      errorUtils(err as AxiosError, dispatch);
    }
  };

export const updateCardTC =
  (
    cardId: string,
    cardPackId: string,
    answer?: string,
    question?: string,
    answerImg?: string,
    questionImg?: string,
  ): AppThunk =>
  async dispatch => {
    const card = {
      _id: cardId,
      answer,
      question,
      answerImg,
      questionImg,
    };

    try {
      dispatch(setAppStatusAC('loading'));

      await cardsAPI.updateCard(card);

      dispatch(getCardDataTC(cardPackId));
      dispatch(setAppStatusAC('succeeded'));
    } catch (err) {
      errorUtils(err as AxiosError, dispatch);
    }
  };