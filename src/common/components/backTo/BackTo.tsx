import React from 'react';

import { NavLink } from 'react-router-dom';

import { ReturnComponentType } from '../../../types';

import s from './BackTo.module.css';

type BackToPropsType = {
  path: string;
  nameOfPath: string;
};

export const BackTo = ({ path, nameOfPath }: BackToPropsType): ReturnComponentType => {
  return (
    <NavLink to={path} className={s.navLink}>
      🠔 Back to {nameOfPath}
    </NavLink>
  );
};
