import React, { ChangeEvent, memo, useEffect, useState } from 'react';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { AppActionsType, useAppDispatch } from '../../../../../../app/store/store';
import { useDebounce } from '../../../../../../common/hooks/useDebounce';
import { ReturnComponentType } from '../../../../../../common/types';


import s from './styles/Search.module.scss';

type SearchPropsType = {
  action: (value: string) => AppActionsType;
};

const timeWait = 700;

export const Search = memo(({ action }: SearchPropsType): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const [text, setText] = useState<string>('');
  const debounceText = useDebounce<string>(text, timeWait);

  const onChangeTextSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
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
