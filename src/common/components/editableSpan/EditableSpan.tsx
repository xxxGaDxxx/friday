import React, { useState } from 'react';

import ModeEditIcon from '@mui/icons-material/ModeEdit';

import { ReturnComponentType } from '../../types';

import { EditableMode } from './EditableMode';
import { EditableSpanProps } from './type/EditableSpanProps';

export const EditableSpan = ({ onChange, value }: EditableSpanProps): ReturnComponentType => {
  const [editMode, setEditMode] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);

  const activateEditMode = (): void => {
    setEditMode(true);
    setCurrentValue(value);
  };

  const activateViewMode = (): void => {
    setEditMode(false);
    onChange(currentValue);
  };

  return editMode ? (
    <EditableMode
      value={currentValue}
      activateViewMode={activateViewMode}
      setText={setCurrentValue}
    />
  ) : (
    <span onDoubleClick={activateEditMode}>
      {value}
      <ModeEditIcon onClick={activateEditMode} />
    </span>
  );
};
