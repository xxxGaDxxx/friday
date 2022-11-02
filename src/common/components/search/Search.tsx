import React, { ChangeEvent, memo, useEffect } from 'react';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import s from '../../../features/packs/components/styles/Search.module.scss';
import { setSearchAC } from '../../../features/packs/reducer/packsReducer';
import { AppActionsType } from '../../../store/store';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useDebounce } from '../../hooks/useDebounce';
import { ReturnComponentType } from '../../types';

type SearchPropsType = {
  action: (value: string) => AppActionsType;
};

const timeWait = 700;

export const Search = memo(({ action }: SearchPropsType): ReturnComponentType => {
  const search = useAppSelector(state => state.pack.search);
  const dispatch = useAppDispatch();

  const debounceText = useDebounce<string>(search, timeWait);

  const onChangeTextSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchAC(event.target.value));
  };

  useEffect(() => {
    dispatch(action(debounceText));
  }, [action, debounceText, dispatch]);

  return (
    <div className={s.search}>
      <Typography component="p">Search</Typography>
      <TextField
        fullWidth
        placeholder="Provide your text"
        type="search"
        color="primary"
        variant="outlined"
        value={search}
        onChange={onChangeTextSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
});
