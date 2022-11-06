import React from 'react';

import { NavLink } from 'react-router-dom';

import arrow from '../../../assets/svg/arrow.svg';
import { setQuestionSearchAC } from '../../../features/cards/reducer/cardsReducer';
import { setSearchAC } from '../../../features/packs/reducer/packsReducer';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { ReturnComponentType } from '../../types';

import s from './styles/BackTo.module.scss';

type BackToPropsType = {
  className?: string;
  callingPoint?: string;
  path: string;
  nameOfPath: string;
  callback?: () => void;
};

export const BackTo = ({
  path,
  nameOfPath,
  className,
  callingPoint,
  callback,
}: BackToPropsType): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const defineClassname = `${s.navLink}${className || ''}`;

  const cancelSearchValue = (): void => {
    dispatch(setSearchAC(''));
    if (callingPoint) {
      dispatch(setQuestionSearchAC(''));
    }
    if (callback) callback();
  };

  return (
    <NavLink to={path} className={defineClassname} onClick={cancelSearchValue}>
      <span className={s.back}>
        <img src={arrow} alt="arrow" className={s.arrow} />
        Back to {nameOfPath}
      </span>
    </NavLink>
  );
};
