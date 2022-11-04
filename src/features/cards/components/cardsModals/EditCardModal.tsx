import React, { ChangeEvent, ReactNode, useState } from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import { CardsType } from '../../../../api/types/apiType';
import { UniversalModalWindow } from '../../../../common/components/universalModalWindow/UniversalModalWindow';
import { ReturnComponentType } from '../../../../common/types';

export type EditCardModalProps = {
  card: CardsType;
  editCard: (
    cardId: string,
    cardPackId: string,
    answer?: string,
    question?: string,
    answerImg?: string,
    questionImg?: string,
  ) => void;
  clickHere: ReactNode;
  styleIcons: Object;
};

export const EditCardModal = ({
  card,
  editCard,
  clickHere,
  styleIcons,
}: EditCardModalProps): ReturnComponentType => {
  const [question, setNewQuestion] = useState(card.question);
  const [answer, setNewAnswer] = useState(card.answer);
  const [selectValue, setSelectValue] = useState('Text');

  const changeQuestionValue = (event: ChangeEvent<HTMLInputElement>): void => {
    setNewQuestion(event.currentTarget.value);
  };
  const changeAnswerValue = (event: ChangeEvent<HTMLInputElement>): void => {
    setNewAnswer(event.currentTarget.value);
  };
  const changeSelectValue = (event: SelectChangeEvent): void => {
    setSelectValue(event.target.value);
  };

  const handleClose = (): void => {
    // setNewQuestion('');
    // setNewAnswer('');
    setSelectValue('Text');
  };

  const saveChanges = (): void => {
    editCard(card._id, card.cardsPack_id, answer, question);
    handleClose();
    // setNewQuestion('');
    // setNewAnswer('');
    setSelectValue('Text');
  };

  return (
    <UniversalModalWindow
      styleButtonActivateModal={styleIcons}
      variantOfButtonToCallModal="text"
      clickHere={clickHere}
      onAcceptActionClick={saveChanges}
      titleButtonAccept="Save"
      title="Edit card"
      handleClose={handleClose}
    >
      <FormControl style={{ width: '100%', marginTop: '21px' }}>
        <InputLabel>Choose a question format</InputLabel>
        <Select
          value={selectValue}
          label="Choose a question format"
          onChange={changeSelectValue}
          size="medium"
          defaultValue="Text"
        >
          <MenuItem value="Text">Text</MenuItem>
          <MenuItem value="Image">Image</MenuItem>
        </Select>
      </FormControl>

      <TextField
        type="text"
        variant="standard"
        label="Question"
        margin="normal"
        style={{ width: '100%' }}
        value={question}
        onChange={changeQuestionValue}
      />
      <TextField
        type="text"
        variant="standard"
        label="Answer"
        margin="normal"
        style={{ width: '100%' }}
        value={answer}
        onChange={changeAnswerValue}
      />
    </UniversalModalWindow>
  );
};
