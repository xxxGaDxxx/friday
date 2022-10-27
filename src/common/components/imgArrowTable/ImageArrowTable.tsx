import React from 'react';

import { useAppSelector } from '../../../app/store/store';
import arrow from '../../../assets/svg/Polygon 2.svg';
import { ReturnComponentType } from '../../types';

export const ImageArrowTable = (): ReturnComponentType => {
  const sortPacks = useAppSelector(state => state.pack.sortPacks);
  const transformRotate = sortPacks[0] === '1' ? 'rotate(180deg)' : '';
  const none = sortPacks === '' ? 'none' : '';

  return (
    <img
      src={arrow}
      alt="arrow"
      style={{ display: none, transform: transformRotate, paddingLeft: '5px' }}
    />
  );
};

export default ImageArrowTable;
