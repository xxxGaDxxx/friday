import {
  initialStatePackTable,
  setPackDateAC,
  setPackNameAC,
  setPackSortAC,
  setPacksPerPageAC,
  setSelectedPageAC,
} from './packTableReducer';

// initialState type
export type InitialStatePackTable = typeof initialStatePackTable;

// action
export type SetPackDateACType = ReturnType<typeof setPackDateAC>;
export type SetPackPerPageACType = ReturnType<typeof setPacksPerPageAC>;
export type SetSelectedPageACType = ReturnType<typeof setSelectedPageAC>;
export type SetPackNameACType = ReturnType<typeof setPackNameAC>;
export type SetPackSortACType = ReturnType<typeof setPackSortAC>;
export type StatePackReducerActionsType =
  | SetPackDateACType
  | SetPackPerPageACType
  | SetSelectedPageACType
  | SetPackNameACType
  | SetPackSortACType;
