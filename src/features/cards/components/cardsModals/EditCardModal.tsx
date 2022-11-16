import React, { ChangeEvent, ReactNode, useState } from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';

import { CardsType } from '../../../../api/types/apiType';
import defaultPicture from '../../../../assets/img/noCover.jpg';
import { UniversalModalWindow } from '../../../../common/components/universalModalWindow/UniversalModalWindow';
import { ReturnComponentType } from '../../../../common/types';

import { VariantPicture } from './VariantPicture';

export type EditCardModalType = {
  card: CardsType;
  editCard: (
    cardId: string,
    cardPackId: string,
    answer?: string,
    question?: string,
    questionImg?: string,
    answerImg?: string,
  ) => void;
  clickHere: ReactNode;
  styleIcons: Object;
  doesThePictureExists: boolean;
  doesTheQuestionExists: boolean;
};

export const EditCardModal = ({
  card,
  editCard,
  clickHere,
  styleIcons,
  doesThePictureExists,
  doesTheQuestionExists,
}: EditCardModalType): ReturnComponentType => {
  const definedImage = doesThePictureExists ? card.questionImg : '';
  const definedQuestion = doesTheQuestionExists ? card.question : 'no question';
  const definedQuestionFormat = doesThePictureExists ? 'Picture' : 'Text';

  const [question, setNewQuestion] = useState(definedQuestion);
  const [answer, setNewAnswer] = useState(card.answer);
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

  const saveChanges = (): void => {
    const questionImgToRequest: string =
      selectValue === 'Picture' ? questionImg || defaultPicture : 'no image';
    const questionToRequest: string =
      selectValue === 'Text' ? question || 'no question' : 'no question';

    editCard(card._id, card.cardsPack_id, answer, questionToRequest, questionImgToRequest);
  };

  return (
    <UniversalModalWindow
      styleButtonActivateModal={styleIcons}
      variantOfButtonToCallModal="text"
      clickHere={clickHere}
      onAcceptActionClick={saveChanges}
      titleButtonAccept="Save"
      title="Edit card"
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
