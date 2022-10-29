import React, { ChangeEvent } from 'react';

import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

import { ReturnComponentType } from '../../types';

import { EditableModeProps } from './type/EditableModeProps';

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
        error={!value}
        value={value}
        onChange={onTextChange}
        autoFocus
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button
                onClick={activateViewMode}
                variant="contained"
                color="primary"
                disabled={!value}
              >
                Save
              </Button>
            </InputAdornment>
          ),
        }}
      />
      {!value && <div style={{ color: 'purple' }}>😔 you have to write something here</div>}
    </div>
  );
};
