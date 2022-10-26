import React, { ChangeEvent, memo, useEffect, useState } from 'react';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { useAppDispatch } from '../../../../../../app/store/store';
import useDebounce from '../../../../../../common/hooks/useDebounce';
import { ReturnComponentType } from '../../../../../../types';
import { setPackNameAC } from '../../../reducer/packTableReducer';

const timeWait = 700;

export const Search = memo((): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const [text, setText] = useState<string>('');
  const debounceText = useDebounce<string>(text, timeWait);

  const onChangeTextSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setText(event.target.value);
  };

  useEffect(() => {
    dispatch(setPackNameAC(debounceText));
  }, [debounceText, dispatch]);

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
});
