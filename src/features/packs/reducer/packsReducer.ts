import { packsAPI } from '../../../api/packsAPI';
import { PackDataResponseType, PacksType, ParamsPacksType } from '../../../api/types/apiType';
import { errorUtils } from '../../../common/utils/errorUtils';
import { setAppStatusAC } from '../../../store/app-reducer';
import { AppThunk } from '../../../store/store';
import { setCardsPackNameAC } from '../../cards/reducer/cardsReducer';

import {
  InitialStatePacks,
  PacksReducerActionsType,
  QueryParamsType,
} from './packTableReducerType';

export const DEFAULT_MAX_COUNT = 110;

export const initialStatePacks = {
  cardPacks: [] as PacksType[],
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
  minMaxCount: [0, DEFAULT_MAX_COUNT],
  search: '',
  queryParams: {} as QueryParamsType,
};

export const packsReducer = (
  state = initialStatePacks,
  action: PacksReducerActionsType,
): InitialStatePacks => {
  switch (action.type) {
    case 'PACK/SET-PACK-DATA':
      return {
        ...state,
        ...action.payload.data,
      };

    case 'PACK/SET-CANCEL-FILTER':
    case 'PACK/SET-SELECTED-PAGE':
    case 'PACK/SET-PACK-NAME':
    case 'PACK/SET-PACK-SORT':
    case 'PACK/SET-USER-ID':
    case 'PACK/SET-MIN-MAX-COUNT':
    case 'PACK/SET-SEARCH':
      return {
        ...state,
        ...action.payload,
      };
    case 'PACK/SET-PACKS-PER-PAGE':
      return {
        ...state,
        pageCount: action.payload.count,
      };
    case 'PACK/SET-QUERY-PARAMS':
      return {
        ...state,
        queryParams: { ...state.queryParams, ...action.payload },
      };
    default:
      return state;
  }
};

// action
export const setPackDataAC = (data: PackDataResponseType) =>
  ({ type: 'PACK/SET-PACK-DATA', payload: { data } } as const);

export const setPacksPerPageAC = (count: number) =>
  ({ type: 'PACK/SET-PACKS-PER-PAGE', payload: { count } } as const);

export const setSelectedPageAC = (page: number) =>
  ({ type: 'PACK/SET-SELECTED-PAGE', payload: { page } } as const);

export const setUserIdAC = (user_id: string) =>
  ({ type: 'PACK/SET-USER-ID', payload: { user_id } } as const);

export const setPackNameAC = (packName: string) =>
  ({ type: 'PACK/SET-PACK-NAME', payload: { packName } } as const);

export const setMinMaxCountAC = (minMaxCount: number[]) =>
  ({ type: 'PACK/SET-MIN-MAX-COUNT', payload: { minMaxCount } } as const);

export const setPackSortAC = (sortPacks: string) =>
  ({ type: 'PACK/SET-PACK-SORT', payload: { sortPacks } } as const);

export const setQueryParamsAC = (queryParams: QueryParamsType) =>
  ({ type: 'PACK/SET-QUERY-PARAMS', payload: queryParams } as const);

export const setSearchAC = (search: string) =>
  ({ type: 'PACK/SET-SEARCH', payload: { search } } as const);

export const setCancelFilterAC = (data: {
  packName: string;
  sortPacks: string;
  user_id: string;
  minMaxCount: number[];
}) =>
  ({
    type: 'PACK/SET-CANCEL-FILTER',
    payload: {
      data,
    },
  } as const);

// thunk
export const packDataTC = (): AppThunk => (dispatch, getState) => {
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

  packsAPI
    .getPacks(params)

    .then(res => {
      dispatch(setPackDataAC(res.data));
      dispatch(setAppStatusAC('succeeded'));
    })

    .catch(err => {
      errorUtils(err, dispatch);
    });
};

export const deletePackTC =
  (packId: string, callPoint: string): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC('loading'));

    packsAPI
      .deletePack(packId)

      .then(() => {
        if (callPoint === 'pack') {
          dispatch(packDataTC());
        }

        dispatch(setAppStatusAC('succeeded'));
      })

      .catch(err => {
        errorUtils(err, dispatch);
      });
  };

export const updatePackTC =
  (packId: string, name: string, privatePack: boolean, callPoint: string): AppThunk =>
  dispatch => {
    const packNew = {
      _id: packId,
      name,
      private: privatePack,
    };

    dispatch(setAppStatusAC('loading'));

    packsAPI
      .updatePack(packNew)

      .then(() => {
        dispatch(setCardsPackNameAC(name));

        if (callPoint === 'pack') {
          dispatch(packDataTC());
        }

        dispatch(setAppStatusAC('succeeded'));
      })

      .catch(err => {
        errorUtils(err, dispatch);
      });
  };

export const addPackTC =
  (titlePack: string, privatePack: boolean, cover: string): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC('loading'));

    const packNew = {
      name: titlePack,
      deckCover: cover,
      private: privatePack,
    };

    packsAPI
      .addPack(packNew)

      .then(() => {
        dispatch(packDataTC());
        dispatch(setAppStatusAC('succeeded'));
      })

      .catch(err => {
        errorUtils(err, dispatch);
      });
  };
