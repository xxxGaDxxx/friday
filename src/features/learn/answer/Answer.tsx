import React from 'react';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../common/types';

type AnswerType = {
  nextQuestionClick: (answer: string) => void;
};

export const Answer = ({ nextQuestionClick }: AnswerType): ReturnComponentType => {
  const card = useAppSelector(state => state.learn.card);

  const [answer, setAnswer] = React.useState('');
  const [error, setError] = React.useState(true);
  const [helperText, setHelperText] = React.useState('Choose your answer.');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAnswer((event.target as HTMLInputElement).value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (answer) {
      setHelperText('');
      setError(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <strong>Answer:</strong>
        {card.answer}
      </p>
      <FormControl sx={{ m: 3 }} variant="standard">
        <FormLabel id="demo-error-radios">Rate yourself:</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={answer}
          onChange={handleRadioChange}
        >
          <FormControlLabel value="1" control={<Radio />} label="Did not know" />
          <FormControlLabel value="2" control={<Radio />} label="Forgot" />
          <FormControlLabel value="3" control={<Radio />} label="A lot of thought" />
          <FormControlLabel value="4" control={<Radio />} label="Confused" />
          <FormControlLabel value="5" control={<Radio />} label="Knew the answer" />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button
          sx={{ mt: 1, mr: 1 }}
          type="button"
          disabled={error}
          variant="contained"
          color="primary"
          style={{ width: '100%', borderRadius: '20px' }}
          onClick={() => nextQuestionClick(answer)}
        >
          next
        </Button>
      </FormControl>
    </form>
  );
};
