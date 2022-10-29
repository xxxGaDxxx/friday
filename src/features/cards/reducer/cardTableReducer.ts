import { cardsItems } from '../../../api/cardsPack';
import { CardsResponseType, CardsTypeCards, ParamsCardsType } from '../../../api/types/apiType';
import { setAppStatusAC } from '../../../app/store/app-reducer';
import { AppThunk } from '../../../app/store/store';
import { errorUtils } from '../../../common/utils/errorUtils';

import { InitialStateCardTable, StateCardsReducerActionsType } from './cardTableReducerType';

export const initialStateCardTable = {
  cards: [] as CardsTypeCards[],
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
  cardQuestion: '',
};

export const cardsTableReducer = (
  state: InitialStateCardTable = initialStateCardTable,
  action: StateCardsReducerActionsType,
): InitialStateCardTable => {
  switch (action.type) {
    case 'CARDS/SET-CARDS-DATA':
      return {
        ...state,
        ...action.payload.date,
      };
    case 'CARDS/ADD-CARDS':
      return {
        ...state,
        cards: [...state.cards, action.payload.newCard],
      };
    case 'CARDS/SET-CARDS-PACK-ID':
      return {
        ...state,
        cardsPackId: action.payload.cardsPackId,
      };
    case 'CARDS/SET-CARD-SORT':
    case 'CARDS/SET-QUESTION-SEARCH':
    case 'CARDS/SET-SELECTED-PAGE':
      return {
        ...state,
        ...action.payload,
      };
    case 'CARDS/SET-CARDS-PER-PAGE':
      return {
        ...state,
        pageCount: action.payload.count,
      };
    default:
      return state;
  }
};

// action
export const setCardsDataAC = (date: CardsResponseType) =>
  ({ type: 'CARDS/SET-CARDS-DATA', payload: { date } } as const);

export const addCardsAC = (newCard: CardsTypeCards) =>
  ({ type: 'CARDS/ADD-CARDS', payload: { newCard } } as const);

export const setCardsPackIdAC = (cardsPackId: string) =>
  ({ type: 'CARDS/SET-CARDS-PACK-ID', payload: { cardsPackId } } as const);

export const setCardsPackNameAC = (packName: string) =>
  ({ type: 'CARDS/SET-CARDS-PACK-NAME', payload: { packName } } as const);

export const setCardSortAC = (sortCards: string) =>
  ({ type: 'CARDS/SET-CARD-SORT', payload: { sortCards } } as const);

export const setQuestionSearchAC = (cardQuestion: string) =>
  ({ type: 'CARDS/SET-QUESTION-SEARCH', payload: { cardQuestion } } as const);

export const setCardsPerPageAC = (count: number) =>
  ({ type: 'CARDS/SET-CARDS-PER-PAGE', payload: { count } } as const);

export const setSelectedCardsPageAC = (page: number) =>
  ({ type: 'CARDS/SET-SELECTED-PAGE', payload: { page } } as const);

// thunk
export const cardDataTC =
  (_id: string): AppThunk =>
  (dispatch, getState) => {
    const { pageCount, page, sortCards, minGrade, maxGrade, cardQuestion } = getState().card;

    const params: ParamsCardsType = {
      cardsPack_id: _id,
      sortCards,
      page,
      pageCount,
      min: minGrade,
      max: maxGrade,
      cardQuestion,
    };

    dispatch(setAppStatusAC('loading'));

    cardsItems
      .getCards(params)

      .then(res => {
        dispatch(setCardsDataAC(res.data));
        dispatch(setAppStatusAC('succeeded'));
      })

      .catch(err => {
        errorUtils(err, dispatch);
      });
  };

export const addCardTC =
  (_id: string): AppThunk =>
  dispatch => {
    const card: ParamsCardsType = {
      cardsPack_id: _id,
    };

    dispatch(setAppStatusAC('loading'));

    cardsItems
      .addCard(card)

      .then(res => {
        dispatch(addCardsAC(res.data.newCard));
        dispatch(setAppStatusAC('succeeded'));
      })

      .catch(err => {
        errorUtils(err, dispatch);
      });
  };

export const cardDeleteTC =
  (cardId: string, cardPackId: string): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC('loading'));

    cardsItems
      .deleteCard(cardId)

      .then(() => {
        dispatch(cardDataTC(cardPackId));
        dispatch(setAppStatusAC('succeeded'));
      })

      .catch(err => {
        errorUtils(err, dispatch);
      });
  };

export const cardUpdateTC =
  (cardId: string, cardPackId: string): AppThunk =>
  dispatch => {
    const card = {
      _id: cardId,
      question: 'NEW Question',
      answer: 'NEW Answer',
    };

    dispatch(setAppStatusAC('loading'));

    cardsItems
      .updateCard(card)

      .then(() => {
        dispatch(cardDataTC(cardPackId));
        dispatch(setAppStatusAC('succeeded'));
      })

      .catch(err => {
        errorUtils(err, dispatch);
      });
  };
