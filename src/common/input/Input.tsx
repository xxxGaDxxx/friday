import React, { ChangeEvent, FC, KeyboardEvent } from 'react';

import s from './styles/Input.module.css';
import { InputTextPropsType } from './types';

const InputText: FC<InputTextPropsType> = ({
  // type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
  onChange,
  onChangeText,
  onKeyPress,
  onEnter,
  error,
  className,
  spanClassName,

  ...restProps // все остальные пропсы попадут в объект restProps
}) => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
    // eslint-disable-next-line no-unused-expressions
    onChange && // если есть пропс onChange
      onChange(e); // то передать ему е (поскольку onChange не обязателен)

    // eslint-disable-next-line no-unused-expressions
    onChangeText && onChangeText(e.currentTarget.value);
  };
  const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>): void => {
    // eslint-disable-next-line no-unused-expressions
    onKeyPress && onKeyPress(e);

    // eslint-disable-next-line no-unused-expressions
    onEnter && // если есть пропс onEnter
      e.key === 'Enter' && // и если нажата кнопка Enter
      onEnter(); // то вызвать его
  };

  const finalSpanClassName = `${s.error} ${spanClassName || ''}`;
  const finalInputClassName = `${className || s.errorInput} `; // need to fix with (?:) and s.superInput

  return (
    <>
      <input
        type="text"
        onChange={onChangeCallback}
        onKeyPress={onKeyPressCallback}
        className={finalInputClassName}
        {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
      />
      {error && <span className={finalSpanClassName}>{error}</span>}
    </>
  );
};

export default InputText;
