import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { AppRootStateType } from '../../app/store/store';

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;
