import React from 'react';

import { NavLink } from 'react-router-dom';

import arrow from '../../../assets/svg/arrow.svg';
import { ReturnComponentType } from '../../../types';

import s from './styles/BackTo.module.scss';

type BackToPropsType = {
  path: string;
  nameOfPath: string;
};

export const BackTo = ({ path, nameOfPath }: BackToPropsType): ReturnComponentType => {
  return (
    <NavLink to={path} className={s.navLink}>
      <span className={s.back}>
        <img src={arrow} alt="arrow" className={s.arrow} />
        Back to {nameOfPath}
      </span>
    </NavLink>
  );
};
