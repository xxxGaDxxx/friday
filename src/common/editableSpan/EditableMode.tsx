import React, { ChangeEvent } from 'react';

import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { ReturnComponentType } from '../../types';

type EditableModeProps = {
  value: string;
  activateViewMode: () => void;
  setText: (text: string) => void;
};

export const EditableMode = ({
  value,
  setText,
  activateViewMode,
}: EditableModeProps): ReturnComponentType => {
  const onTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setText(event.currentTarget.value);
  };

  return (
    <div>
      <TextField
        value={value}
        onChange={onTextChange}
        autoFocus
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button onClick={activateViewMode} variant="contained" color="primary">
                Save
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};
