import { cardsPack } from '../../../../api/cardsPack';
import {
  PackCardPacks,
  PackDateResponseType,
  ParamsPacksType,
} from '../../../../api/types/apiType';
import { setAppStatusAC } from '../../../../app/store/app-reducer';
import { AppThunk } from '../../../../app/store/store';
import { errorUtils } from '../../../../common/utils/errorUtils';

import { InitialStatePackTable, StatePackReducerActionsType } from './packTableReducerType';

export const initialStatePackTable = {
  cardPacks: [] as PackCardPacks[],
  page: 1,
  pageCount: 5,
  cardPacksTotalCount: 0,
  minCardsCount: 0,
  maxCardsCount: 110,
  token: '',
  tokenDeathTime: 0,
  packName: '',
  sortPacks: '',
  user_id: '',
  // eslint-disable-next-line no-magic-numbers
  minMaxCount: [0, 110],
};

export const packTableReducer = (
  state = initialStatePackTable,
  action: StatePackReducerActionsType,
): InitialStatePackTable => {
  switch (action.type) {
    case 'PACK/SET-PACK-DATE':
      return {
        ...state,
        ...action.payload.date,
      };
    case 'PACK/SET-ABORT-SORT-BAR':
      return {
        ...state,
        ...action.payload,
      };
    case 'PACK/SET-SELECTED-PAGE':
    case 'PACK/SET-PACK-NAME':
    case 'PACK/SET-PACK-SORT':
    case 'PACK/SET-USER-ID':
    case 'PACK/SET-MIN-MAX-COUNT':
      return {
        ...state,
        ...action.payload,
      };
    case 'PACK/SET-PACKS-PER-PAGE':
      return {
        ...state,
        pageCount: action.payload.count,
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

export const setPacksPerPageAC = (count: number) =>
  ({
    type: 'PACK/SET-PACKS-PER-PAGE',
    payload: {
      count,
    },
  } as const);

export const setSelectedPageAC = (page: number) =>
  ({
    type: 'PACK/SET-SELECTED-PAGE',
    payload: {
      page,
    },
  } as const);
export const setUserIdAC = (user_id: string) =>
  ({
    type: 'PACK/SET-USER-ID',
    payload: {
      user_id,
    },
  } as const);

export const setPackNameAC = (packName: string) =>
  ({
    type: 'PACK/SET-PACK-NAME',
    payload: {
      packName,
    },
  } as const);
export const setMinMaxCountAC = (minMaxCount: number[]) =>
  ({
    type: 'PACK/SET-MIN-MAX-COUNT',
    payload: {
      minMaxCount,
    },
  } as const);

export const setPackSortAC = (sortPacks: string) =>
  ({
    type: 'PACK/SET-PACK-SORT',
    payload: {
      sortPacks,
    },
  } as const);

export const setAbortSortBarAC = (data: {
  packName: string;
  sortPacks: string;
  user_id: string;
  minMaxCount: number[];
}) =>
  ({
    type: 'PACK/SET-ABORT-SORT-BAR',
    payload: {
      data,
    },
  } as const);

// thunk
export const packDateTC = (): AppThunk => (dispatch, getState) => {
  const { pageCount, page, minMaxCount, packName, sortPacks, user_id } = getState().pack;

  const params: ParamsPacksType = {
    page,
    pageCount,
    packName,
    min: minMaxCount[0],
    max: minMaxCount[1],
    sortPacks,
    user_id,
  };

  dispatch(setAppStatusAC('loading'));
  cardsPack
    .cardPacksDate(params)
    .then(res => {
      dispatch(setPackDateAC(res.data));
      dispatch(setAppStatusAC('succeeded'));
    })
    .catch(err => {
      errorUtils(err, dispatch);
    });
};

export const packDeleteTC =
  (packId: string): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC('loading'));
    cardsPack
      .deletePack(packId)
      .then(() => {
        dispatch(packDateTC());
        dispatch(setAppStatusAC('succeeded'));
      })
      .catch(err => {
        errorUtils(err, dispatch);
      });
  };

export const packNewNameTC =
  (packId: string): AppThunk =>
  dispatch => {
    const packNew = {
      _id: packId,
      name: 'A NEW NAME!!!',
    };

    dispatch(setAppStatusAC('loading'));
    cardsPack
      .putPackName(packNew)
      .then(() => {
        dispatch(packDateTC());
        dispatch(setAppStatusAC('succeeded'));
      })
      .catch(err => {
        errorUtils(err, dispatch);
      });
  };

export const addPackTC = (): AppThunk => dispatch => {
  dispatch(setAppStatusAC('loading'));
  const packNew = {
    name: 'A NEW PACK',
    deckCover: '',
    private: false,
  };

  cardsPack
    .addPack(packNew)
    .then(() => {
      dispatch(packDateTC());
      dispatch(setAppStatusAC('succeeded'));
    })
    .catch(err => {
      errorUtils(err, dispatch);
    });
};
