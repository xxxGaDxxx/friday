import React from 'react';

import Button from '../../common/button/Button';
import Chekbox from '../../common/chekbox/Chekbox';
import Input from '../../common/input/Input';
import { ReturnComponentType } from '../../types';

import s from './DemonstrationComponent.module.css';

export const DemonstrationComponent = (): ReturnComponentType => {
  return (
    <div className={s.demonstrationContainer}>
      <div>
        <Input />
      </div>
      <div>
        <Chekbox />
      </div>
      <div>
        <Button>true</Button>
        <Button disabled={false}>false</Button>
      </div>
    </div>
  );
};
