import React, { ChangeEvent, ReactNode, useState } from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import { styleButtonActivateModal } from '../../../../common/components/universalModalWindow/style/styleMUIComponents';
import { UniversalModalWindow } from '../../../../common/components/universalModalWindow/UniversalModalWindow';
import { useAppDispatch } from '../../../../common/hooks/useAppDispatch';
import { ReturnComponentType } from '../../../../common/types';
import { addCardTC } from '../../reducer/cardsReducer';

import { VariantPicture } from './VariantPicture';

export type AddCardModalProps = {
  cardPackId: string;
  clickHere: ReactNode;
};

export const AddCardModal = ({ cardPackId, clickHere }: AddCardModalProps): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const [question, setNewQuestion] = useState('');
  const [answer, setNewAnswer] = useState('');
  const [selectValue, setSelectValue] = useState('Text');

  const addNewCard = (
    cardPackId: string,
    answer?: string,
    question?: string,
    answerImg?: string,
    questionImg?: string,
  ): void => {
    dispatch(addCardTC(cardPackId, question, answer, answerImg, questionImg));
  };

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
    setNewQuestion('');
    setNewAnswer('');
    setSelectValue('Text');
  };

  const saveChanges = (): void => {
    addNewCard(cardPackId, answer, question);
    handleClose();
    setNewQuestion('');
    setNewAnswer('');
    setSelectValue('Text');
  };

  return (
    <UniversalModalWindow
      styleButtonActivateModal={styleButtonActivateModal}
      variantOfButtonToCallModal="contained"
      clickHere={clickHere}
      onAcceptActionClick={saveChanges}
      titleButtonAccept="Save"
      title="Add new card"
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
          <MenuItem value="Picture">Picture</MenuItem>
        </Select>
      </FormControl>

      {selectValue === 'Picture' ? (
        <VariantPicture questionExists={!!question} />
      ) : (
        <TextField
          type="text"
          variant="standard"
          label="Question"
          margin="normal"
          style={{ width: '100%' }}
          value={question}
          onChange={changeQuestionValue}
        />
      )}
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
