import React, { ChangeEvent, useState } from 'react';

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

export type AddCardModalType = {
  cardPackId: string;
};

export const AddCardModal = ({ cardPackId }: AddCardModalType): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const [question, setNewQuestion] = useState('');
  const [answer, setNewAnswer] = useState('');
  const [questionImg, setNewQuestionImg] = useState('');
  const [selectValue, setSelectValue] = useState('Text');

  const addNewCard = (
    cardPackId: string,
    answer?: string,
    question?: string,
    questionImg?: string,
    answerImg?: string,
  ): void => {
    dispatch(addCardTC(cardPackId, question, answer, questionImg, answerImg));
  };

  const changeQuestionValue = (event: ChangeEvent<HTMLInputElement>): void => {
    if (selectValue === 'Text') {
      setNewQuestionImg('');
    }
    setNewQuestion(event.currentTarget.value);
  };

  const changeAnswerValue = (event: ChangeEvent<HTMLInputElement>): void => {
    setNewAnswer(event.currentTarget.value);
  };
  const changeSelectValue = (event: SelectChangeEvent): void => {
    if (event.target.value === 'Picture') {
      setNewQuestion('');
    }
    setSelectValue(event.target.value);
  };

  const handleClose = (): void => {
    setNewQuestion('');
    setNewAnswer('');
    setNewQuestionImg('');
    setSelectValue('Text');
  };

  const saveChanges = (): void => {
    addNewCard(cardPackId, answer, question, questionImg);
    handleClose();
  };

  return (
    <UniversalModalWindow
      styleButtonActivateModal={styleButtonActivateModal}
      variantOfButtonToCallModal="contained"
      clickHere="Add new card"
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
        >
          <MenuItem value="Text">Text</MenuItem>
          <MenuItem value="Picture">Picture</MenuItem>
        </Select>
      </FormControl>

      {selectValue === 'Picture' ? (
        <VariantPicture
          setPictureQuestion={setNewQuestionImg}
          pictureQuestion={questionImg}
          isErrorMessageShow
        />
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
