import { packsAPI } from '../../../api/packsAPI';
import { PackCardPacks, PackDateResponseType, ParamsPacksType } from '../../../api/types/apiType';
import { errorUtils } from '../../../common/utils/errorUtils';
import { setAppStatusAC } from '../../../store/app-reducer';
import { AppThunk } from '../../../store/store';
import { setCardsPackNameAC } from '../../cards/reducer/cardTableReducer';

import { InitialStatePackTable, StatePackReducerActionsType } from './packTableReducerType';

const defaultMaxCount = 110;

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
  minMaxCount: [0, defaultMaxCount],
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
  ({ type: 'PACK/SET-PACK-DATE', payload: { date } } as const);

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

  packsAPI
    .getPacks(params)

    .then(res => {
      dispatch(setPackDateAC(res.data));
      dispatch(setAppStatusAC('succeeded'));
    })

    .catch(err => {
      errorUtils(err, dispatch);
    });
};

export const packDeleteTC =
  (packId: string, callPoint: string): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC('loading'));

    packsAPI
      .deletePack(packId)

      .then(() => {
        if (callPoint === 'pack') {
          dispatch(packDateTC());
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
          dispatch(packDateTC());
        }

        dispatch(setAppStatusAC('succeeded'));
      })

      .catch(err => {
        errorUtils(err, dispatch);
      });
  };

export const addPackTC =
  (titlePack: string, privatePack: boolean): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC('loading'));

    const packNew = {
      name: titlePack,
      deckCover: '',
      private: privatePack,
    };

    packsAPI
      .addPack(packNew)

      .then(() => {
        dispatch(packDateTC());
        dispatch(setAppStatusAC('succeeded'));
      })

      .catch(err => {
        errorUtils(err, dispatch);
      });
  };
