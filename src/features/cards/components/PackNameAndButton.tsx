import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import popUpActions from '../../../assets/svg/myPackPopupActions.svg';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { ReturnComponentType } from '../../../common/types';
import { addCardTC } from '../reducer/cardsReducer';
import s from '../styles/Cards.module.scss';

import { MyPackMenu } from './MyPackMenu';

type PackNameAndButtonProps = {
  isMyPack: boolean;
  packName: string;
  cardPackId: string;
};

export const PackNameAndButton = ({
  isMyPack,
  packName,
  cardPackId,
}: PackNameAndButtonProps): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const [isShowedMenu, setIsShowedMenu] = useState(false);

  const showMenu = (): void => {
    setIsShowedMenu(!isShowedMenu);
  };

  const addNewCard = (): void => {
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
          onClick={addNewCard}
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
