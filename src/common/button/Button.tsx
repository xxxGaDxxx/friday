import React, { FC } from 'react';

import s from './styles/Button.module.css';
import { ButtonPropsType } from './types';

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан

const Button: FC<ButtonPropsType> = ({
  red,
  className,
  ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
}) => {
  const finalClassName = `${red ? s.red : s.default} ${className}`;

  return (
    <button
      className={finalClassName}
      {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
      type="button"
    />
  );
};

export default Button;
