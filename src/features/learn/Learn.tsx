import React, { useEffect } from 'react';

import Button from '@mui/material/Button';

import { BackTo } from '../../common/components/backTo/BackTo';
import { PATH } from '../../common/enum/pathEnum';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../common/types';
import { randomCard } from '../../common/utils/randomCard';

import { Answer } from './answer/Answer';
import {
  clearLearnStateAC,
  isShowAnswerAC,
  setCardLearnAC,
  updateGradeTC,
} from './reducer/learnReducer';
import s from './style/Learn.module.scss';

export const Learn = (): ReturnComponentType => {
  const cards = useAppSelector(state => state.card.cards);
  const packName = useAppSelector(state => state.card.packName);
  const card = useAppSelector(state => state.learn.card);
  const showAnswer = useAppSelector(state => state.learn.showAnswer);

  const dispatch = useAppDispatch();

  const clearState = (): void => {
    dispatch(clearLearnStateAC());
  };

  const nextQuestionClick = (answer: string): void => {
    dispatch(updateGradeTC(Number(answer), card._id));
  };

  const onShowAnswerClick = (): void => {
    dispatch(isShowAnswerAC(true));
  };

  useEffect(() => {
    if (!showAnswer) dispatch(setCardLearnAC(randomCard(cards)));
  }, [showAnswer]);

  return (
    <main className={s.main}>
      <BackTo path={PATH.PACKS} nameOfPath="Packs List" callback={clearState} />
      <h2 className={s.titleCard}>{packName}</h2>
      <div className={s.container}>
        <p>
          <strong>Question:</strong>
          {card.question}
        </p>
        <p>Количество попыток ответов на вопрос: {card.shots}</p>

        {showAnswer ? (
          <Answer nextQuestionClick={nextQuestionClick} />
        ) : (
          <Button
            type="button"
            variant="contained"
            color="primary"
            style={{ width: '100%', borderRadius: '20px' }}
            onClick={onShowAnswerClick}
          >
            Show answer
          </Button>
        )}
      </div>
    </main>
  );
};
