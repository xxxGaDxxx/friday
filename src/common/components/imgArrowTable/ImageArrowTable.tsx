import React from 'react';

import arrow from '../../../assets/svg/Polygon 2.svg';
import { ReturnComponentType } from '../../types';

import { ImageArrowTableType } from './types/ImageArrowTableType';

export const ImageArrowTable = ({ sort }: ImageArrowTableType): ReturnComponentType => {
  const transformRotate = sort[0] === '1' ? 'rotate(180deg)' : '';
  const none = sort === '' ? 'none' : '';

  return (
    <img
      src={arrow}
      alt="arrow"
      style={{ display: none, transform: transformRotate, paddingLeft: '5px' }}
    />
  );
};

export default ImageArrowTable;
