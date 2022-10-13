const initialState = {};

export const appReducer = (
  action: ActionsType,
  state = initialState,
): InitialStateType => {
  switch (action.type) {
    case '':
      return state;
    default:
      return state;
  }
};

// Action Creators

export const appReducerAC = (): any => {
  return {
    type: '',
  } as const;
};

// type
type InitialStateType = typeof initialState;

type appReducerACType = ReturnType<typeof appReducerAC>;
type ActionsType = appReducerACType;
