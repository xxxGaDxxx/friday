import { initialStateLogin, setIsLoggedInAC } from './loginReducer';

// initialState type
export type InitialStateLoginType = typeof initialStateLogin;

// action type
export type SetIsLoggedInACType = ReturnType<typeof setIsLoggedInAC>;
export type LoginReducerActionsType = SetIsLoggedInACType;
