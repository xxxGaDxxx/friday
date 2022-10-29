import React from 'react';

import { NavLink } from 'react-router-dom';

import arrow from '../../../assets/svg/arrow.svg';
import { ReturnComponentType } from '../../types';

import s from './styles/BackTo.module.scss';
import { BackToPropsType } from './type/BackToPropsType';

export const BackTo = ({ path, nameOfPath, className }: BackToPropsType): ReturnComponentType => {
  const defineClassname = `${s.navLink}${className || ''}`;

  return (
    <NavLink to={path} className={defineClassname}>
      <span className={s.back}>
        <img src={arrow} alt="arrow" className={s.arrow} />
        Back to {nameOfPath}
      </span>
    </NavLink>
  );
};
