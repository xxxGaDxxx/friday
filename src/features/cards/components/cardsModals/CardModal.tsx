import React, { ChangeEvent, ReactNode, useState } from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import defaultPicture from '../../../../assets/img/noCover.jpg';
import { UniversalModalWindow } from '../../../../common/components/universalModalWindow/UniversalModalWindow';
import { useAppDispatch } from '../../../../common/hooks/useAppDispatch';
import { ReturnComponentType } from '../../../../common/types';
import { addCardTC, updateCardTC } from '../../reducer/cardsReducer';

import { VariantPicture } from './VariantPicture';

export type CardModalType = {
  clickHere: ReactNode;
  styleIcons: Object;
  definedQuestion: string | undefined;
  definedImage: string | undefined;
  definedQuestionFormat: string;
  defaultAnswer: string | undefined;
  cardPackId: string;
  cardId?: string;
  variantOfButtonToCallModal: 'text' | 'outlined' | 'contained';
  title: string;
};

export const CardModal = ({
  clickHere,
  styleIcons,
  definedQuestion,
  definedImage,
  definedQuestionFormat,
  defaultAnswer,
  cardPackId,
  cardId,
  variantOfButtonToCallModal,
  title,
}: CardModalType): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const [question, setNewQuestion] = useState(definedQuestion);
  const [answer, setNewAnswer] = useState(defaultAnswer);
  const [questionImg, setNewQuestionImg] = useState(definedImage);
  const [selectValue, setSelectValue] = useState<string>(definedQuestionFormat);

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
    } else {
      setNewQuestionImg('');
    }
    setSelectValue(event.target.value);
  };

  const handleClose = (): void => {
    setNewQuestion(definedQuestion);
    setNewAnswer(defaultAnswer);
    setNewQuestionImg(definedImage);
    setSelectValue(definedQuestionFormat);
  };

  const saveChanges = (): void => {
    const questionImgToRequest: string =
      selectValue === 'Picture' ? questionImg || defaultPicture : 'no image';
    const questionToRequest: string =
      selectValue === 'Text' ? question || 'no question' : 'no question';

    if (cardId) {
      dispatch(updateCardTC(cardId, cardPackId, answer, question, questionImgToRequest));
    } else {
      dispatch(addCardTC(cardPackId, questionToRequest, answer, questionImgToRequest));
    }

    handleClose();
  };

  return (
    <UniversalModalWindow
      styleButtonActivateModal={styleIcons}
      variantOfButtonToCallModal={variantOfButtonToCallModal}
      clickHere={clickHere}
      onAcceptActionClick={saveChanges}
      titleButtonAccept="Save"
      title={title}
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
