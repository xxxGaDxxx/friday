import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import popUpActions from '../../../assets/svg/myPackPopupActions.svg';
import { PATH } from '../../../common/enum/pathEnum';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { ReturnComponentType } from '../../../common/types';
import { getCardsLearnDataTC } from '../../learn/reducer/learnReducer';
import s from '../styles/Cards.module.scss';

import { AddCardModal } from './cardsModals/AddCardModal';
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
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [isShowedMenu, setIsShowedMenu] = useState(false);

  const showMenu = (): void => {
    setIsShowedMenu(!isShowedMenu);
  };

  const navigateToLearnPage = (): void => {
    dispatch(getCardsLearnDataTC(cardPackId, cardsTotalCount));

    navigate(PATH.LEARN);
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

        <div className={s.menu}>
          {isShowedMenu && (
            <MyPackMenu hideMenu={showMenu} navigateToLearnPage={navigateToLearnPage} />
          )}
        </div>
      </Box>

      {isMyPack ? (
        <AddCardModal cardPackId={cardPackId} clickHere="Add new card" />
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
