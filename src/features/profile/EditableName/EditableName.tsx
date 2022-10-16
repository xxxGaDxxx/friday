import React, { ChangeEvent, useState } from 'react';

import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Button, InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';

import { ReturnComponentType } from '../../../types';

type EditableNameProps = {
  value: string;
  onChange: (newValue: string) => void;
};

export const EditableName = ({
  onChange,
  value,
}: EditableNameProps): ReturnComponentType => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(value);

  const activateEditMode = (): void => {
    setEditMode(true);
    setName(value);
  };
  const activateViewMode = (): void => {
    setEditMode(false);
    onChange(name);
  };
  const onNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value);
  };

  return editMode ? (
    <div>
      <TextField
        value={name}
        onChange={onNameChange}
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
  ) : (
    <span onDoubleClick={activateEditMode}>
      {value}
      <ModeEditIcon onClick={activateEditMode} />
    </span>
  );
};
