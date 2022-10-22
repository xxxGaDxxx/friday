import { cardsPack } from '../../../../api/cardsPack';
import { PackDateResponseType } from '../../../../api/types/apiType';
import { setAppStatusAC } from '../../../../app/store/app-reducer';
import { AppThunk } from '../../../../app/store/store';
import { errorUtils } from '../../../../common/utils/errorUtils';

import { InitialStatePackTable, StatePackReducerActionsType } from './packTableReducerType';

export const initialStatePackTable: PackDateResponseType = {
  cardPacks: [],
  page: 1,
  pageCount: 4,
  cardPacksTotalCount: 0,
  minCardsCount: 0,
  maxCardsCount: 110,
  token: '',
  tokenDeathTime: 0,
};

export const packTableReducer = (
  state: PackDateResponseType = initialStatePackTable,
  action: StatePackReducerActionsType,
): InitialStatePackTable => {
  switch (action.type) {
    case 'PACK/SET-PACK-DATE':
      return {
        ...state,
        ...action.payload.date,
      };
    default:
      return state;
  }
};

// action
export const setPackDateAC = (date: PackDateResponseType) =>
  ({
    type: 'PACK/SET-PACK-DATE',
    payload: {
      date,
    },
  } as const);

// thunk
export const packDateTC = (): AppThunk => dispatch => {
  dispatch(setAppStatusAC('loading'));
  cardsPack
    .cardPacksDate()
    .then(res => {
      dispatch(setPackDateAC(res.data));
      dispatch(setAppStatusAC('succeeded'));
    })
    .catch(err => {
      errorUtils(err, dispatch);
    });
};
