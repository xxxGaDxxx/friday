import { initialStateLogin, setIsLoggedInAC } from './loginReducer';

// initialState type
export type InitialStateLoginType = typeof initialStateLogin;

// action type
export type setIsLoggedInACType = ReturnType<typeof setIsLoggedInAC>;
export type LoginReducerActionsType = setIsLoggedInACType;
