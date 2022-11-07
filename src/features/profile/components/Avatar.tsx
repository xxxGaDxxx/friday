import React from 'react';

import { ReturnComponentType } from '../../../common/types';
import { setAvatarAC } from '../reducer/profileReducer';

import { AddImageAvatar } from './AddImageAvatar';

type Props = {
  srcAvatarImage: string;
};

export const Avatar = ({ srcAvatarImage }: Props): ReturnComponentType => {
  return (
    <>
      <img
        src={srcAvatarImage}
        alt="ava"
        style={{ width: '250px', height: '250px', borderRadius: '50%', objectFit: 'cover' }}
      />
      <AddImageAvatar actionCreator={setAvatarAC} />
    </>
  );
};
