import React, { useState } from 'react';

import defaultAvatar from '../../assets/img/defaultAvatar.png';
import { Image } from '../../common/components/cover/Image';
import { useAppSelector } from '../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../common/types';

import s from './styles/UserNameAndAva.module.scss';
import { UserMenu } from './UserMenu';

export const UserNameAndAva = (): ReturnComponentType => {
  const name = useAppSelector(state => state.profile.name);
  const avatar = useAppSelector(state => state.profile.avatar);

  const [isShowedMenu, setIsShowedMenu] = useState(false);

  const showMenu = (): void => {
    setIsShowedMenu(!isShowedMenu);
  };

  return (
    <div className={s.container}>
      <div className={s.containerProfile}>
        <span>{name}</span>
        <div onClick={showMenu} aria-hidden="true">
          <Image
            packCover={avatar}
            isErrorMessageShow={false}
            styles={s.containerProfile}
            defaultImage={defaultAvatar}
          />
        </div>
      </div>
      <div className={s.menu} style={{ zIndex: '10' }}>
        {isShowedMenu && <UserMenu hideMenu={showMenu} />}
      </div>
    </div>
  );
};
