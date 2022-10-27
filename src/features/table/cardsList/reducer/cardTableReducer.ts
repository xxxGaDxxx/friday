import { cards } from '../../../../api/cardsPack';
import { CardsTypeCards } from '../../../../api/types/apiType';
import { setAppStatusAC } from '../../../../app/store/app-reducer';
import { AppThunk } from '../../../../app/store/store';
import { errorUtils } from '../../../../common/utils/errorUtils';

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
    default:
      return state;
  }
};

// action
export const setCardsDataAC = (date: any) =>
  ({
    type: 'CARDS/SET-CARDS-DATA',
    payload: {
      date,
    },
  } as const);

// thunk
export const cardDataTC =
  (_id: string): AppThunk =>
  dispatch => {
    const params: any = {
      cardsPack_id: _id,
    };

    dispatch(setAppStatusAC('loading'));
    cards
      .cardsData(params)
      .then(res => {
        dispatch(setCardsDataAC(res.data));
        dispatch(setAppStatusAC('succeeded'));
      })
      .catch(err => {
        errorUtils(err, dispatch);
      });
  };
