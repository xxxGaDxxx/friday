import {
  initialStateForgot,
  setEmailAC,
  setIsInfoNewPasswordAC,
  setIsSuccessAC,
} from './forgotReducer';

// initialState type
export type InitialStateForgotType = typeof initialStateForgot;

// action type
export type SetEmailACType = ReturnType<typeof setEmailAC>;
export type SetIsSuccessACType = ReturnType<typeof setIsSuccessAC>;
export type SetIsInfoNewPasswordACType = ReturnType<typeof setIsInfoNewPasswordAC>;
export type ForgotReducerActionsType =
  | SetEmailACType
  | SetIsSuccessACType
  | SetIsInfoNewPasswordACType;
