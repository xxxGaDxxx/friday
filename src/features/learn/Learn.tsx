import React from 'react';

import Button from '@mui/material/Button';

import { BackTo } from '../../common/components/backTo/BackTo';
import { PATH } from '../../common/enum/pathEnum';
import { useAppDispatch } from '../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../common/types';

import { Answer } from './answer/Answer';
import { isShowAnswerAc, updateGradeTC } from './reducer/learnReducer';
import s from './style/Learn.module.scss';

export const Learn = (): ReturnComponentType => {
  const packName = useAppSelector(state => state.card.packName);
  const card = useAppSelector(state => state.learn.card);
  const showAnswer = useAppSelector(state => state.learn.showAnswer);

  const dispatch = useAppDispatch();

  const nextQuestionClick = (answer: string): void => {
    dispatch(updateGradeTC(Number(answer), card._id));
    dispatch(isShowAnswerAc(false));
  };

  const onShowAnswerClick = (): void => {
    dispatch(isShowAnswerAc(true));
  };

  return (
    <main className={s.main}>
      <BackTo path={PATH.PACKS} nameOfPath="Packs List" />
      <h2 className={s.titleCard}>{packName}</h2>
      <div className={s.container}>
        <p>
          <strong>Question:</strong>
          {card.question}
        </p>
        <p>Количество попыток ответов на вопрос: {card.shots}</p>

        {showAnswer && <Answer nextQuestionClick={nextQuestionClick} />}

        {!showAnswer && (
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
