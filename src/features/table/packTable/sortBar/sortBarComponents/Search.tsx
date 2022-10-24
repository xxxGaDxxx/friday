import React, { ChangeEvent } from 'react';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import debounce from 'lodash.debounce';

import { useAppDispatch } from '../../../../../app/store/store';
import { ReturnComponentType } from '../../../../../types';
import { setPackNameAC } from '../../reducer/packTableReducer';

const timeWait = 1000;

export const Search = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const onChangeTextSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    debounce(() => {
      dispatch(setPackNameAC(event.target.value));
    }, timeWait);
  };

  debounce(onChangeTextSearch, timeWait);

  return (
    <div>
      <div> Search</div>
      <TextField
        placeholder="Provide your text"
        type="search"
        color="primary"
        onChange={onChangeTextSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </div>
  );
};