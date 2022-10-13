import React, { ChangeEvent, FC } from 'react';

import s from './styles/Chekbox.module.css';
import { CheckboxPropsType } from './types';

// тип пропсов обычного инпута

const Checkbox: FC<CheckboxPropsType> = ({
  // type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
  onChange,
  onChangeChecked,
  className,
  // spanClassName,
  children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
    if (onChangeChecked) {
      onChangeChecked(e.currentTarget.checked);
    } else if (onChange) {
      onChange(e);
    }
    // onChange(e.currentTarget.checked)// сделайте так чтоб работал onChange и onChangeChecked
  };

  const finalInputClassName = `${s.checkbox} ${className || ''}`;

  return (
    <label htmlFor="checkbox">
      <input
        type="checkbox"
        name="peas"
        onChange={onChangeCallback}
        className={finalInputClassName}
        {...restProps} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)
      />
      {children && <span className={s.spanClassName}>{children}</span>}
    </label> // благодаря label нажатие на спан передастся в инпут
  );
};

export default Checkbox;
