import React, { ChangeEvent, memo, useEffect, useState } from 'react';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import s from '../../../features/packs/components/styles/Search.module.scss';
import { AppActionsType } from '../../../store/store';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useDebounce } from '../../hooks/useDebounce';
import { ReturnComponentType } from '../../types';

type SearchPropsType = {
  action: (value: string) => AppActionsType;
  search: string;
};

const timeWait = 700;

export const Search = memo(({ action, search }: SearchPropsType): ReturnComponentType => {
  // );
  const [searchValue, setSearchValue] = useState<string>(search);
  const dispatch = useAppDispatch();

  const debounceText = useDebounce<string>(searchValue, timeWait);

  const onChangeTextSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
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
        value={searchValue}
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
