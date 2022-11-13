import React, { useEffect, useState } from 'react';

import { setAppErrorAC } from '../../../store/app-reducer';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { ReturnComponentType } from '../../types';

type PropsType = {
  packCover: string;
  isErrorMessageShow: boolean;
  styles: string;
  defaultImage: string;
};

export const Image = ({
  packCover,
  isErrorMessageShow,
  styles,
  defaultImage,
}: PropsType): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const coverImage = packCover || defaultImage;

  const [isAvaBroken, setIsAvaBroken] = useState(false);

  const errorHandler = (): void => {
    setIsAvaBroken(true);
    if (isErrorMessageShow) dispatch(setAppErrorAC('Broken picture'));
  };

  useEffect(() => {
    if (isAvaBroken) {
      setIsAvaBroken(false);
    }
  }, [packCover]);

  return (
    <img
      className={styles}
      src={isAvaBroken ? defaultImage : coverImage}
      onError={errorHandler}
      alt="Cover"
    />
  );
};
