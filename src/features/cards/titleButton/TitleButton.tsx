import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import popUpActions from '../../../assets/svg/myPackPopupActions.svg';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { ReturnComponentType } from '../../../common/types';
import { MyPackMenu } from '../myPackMenu/MyPackMenu';
import { addCardTC } from '../reducer/cardTableReducer';
import s from '../styles/Cards.module.scss';

import { TitleButtonType } from './type/TitleButtonType';

export const TitleButton = ({
  isMyPack,
  packName,
  cardPackId,
}: TitleButtonType): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const [isShowedMenu, setIsShowedMenu] = useState(false);

  const showMenu = (): void => {
    setIsShowedMenu(!isShowedMenu);
  };

  const onAddNewCardClick = (): void => {
    dispatch(addCardTC(cardPackId));
  };

  return (
    <section className={s.section}>
      <Box className={s.box}>
        <Typography component="h1">{packName}</Typography>
        {isMyPack && (
          <IconButton onClick={showMenu}>
            <img src={popUpActions} alt="popup actions" />
          </IconButton>
        )}
        <div className={s.menu} style={{ zIndex: '10' }}>
          {isShowedMenu && <MyPackMenu hideMenu={showMenu} />}
        </div>
      </Box>
      {isMyPack ? (
        <Button
          className={s.addCardButton}
          type="button"
          variant="contained"
          color="primary"
          onClick={onAddNewCardClick} // needs to create!!!
        >
          Add new card
        </Button>
      ) : (
        <Button
          className={s.addCardButton}
          type="button"
          variant="contained"
          color="primary"
          onClick={() => {}} // needs to create!!!
        >
          Learn to pack
        </Button>
      )}
    </section>
  );
};
