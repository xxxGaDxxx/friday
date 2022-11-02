import {
  initialStateRecoveryPassword,
  setEmailAC,
  setInfoAC,
  setIsSuccessAC,
} from './recoveryPasswordReducer';

// initialState type
export type InitialStateRecoveryPasswordType = typeof initialStateRecoveryPassword;

// action type
export type SetEmailACType = ReturnType<typeof setEmailAC>;
export type SetIsSuccessACType = ReturnType<typeof setIsSuccessAC>;
export type SetInfoACType = ReturnType<typeof setInfoAC>;
export type RecoveryPasswordActionsType = SetEmailACType | SetIsSuccessACType | SetInfoACType;
