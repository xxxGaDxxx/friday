import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import popUpActions from '../../../assets/svg/myPackPopupActions.svg';
import { PATH } from '../../../common/enum/pathEnum';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../common/types';
import { addCardTC, getCardDataTC } from '../reducer/cardsReducer';
import s from '../styles/Cards.module.scss';

import { MyPackMenu } from './MyPackMenu';

type PackNameAndButtonProps = {
  isMyPack: boolean;
  packName: string;
  cardPackId: string;
  cardsTotalCount: number;
};

export const PackNameAndButton = ({
  isMyPack,
  packName,
  cardPackId,
  cardsTotalCount,
}: PackNameAndButtonProps): ReturnComponentType => {
  const status = useAppSelector(state => state.app.status);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [isShowedMenu, setIsShowedMenu] = useState(false);

  const showMenu = (): void => {
    setIsShowedMenu(!isShowedMenu);
  };

  const addNewCard = (): void => {
    dispatch(addCardTC(cardPackId));
  };

  const navigateToLearnPage = (): void => {
    dispatch(getCardDataTC(cardPackId, cardsTotalCount));
    if (status === 'succeeded') {
      navigate(PATH.LEARN);
    }
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
          {isShowedMenu && (
            <MyPackMenu hideMenu={showMenu} navigateToLearnPage={navigateToLearnPage} />
          )}
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
          disabled={!cardsTotalCount}
          onClick={navigateToLearnPage}
        >
          Learn to pack
        </Button>
      )}
    </section>
  );
};
