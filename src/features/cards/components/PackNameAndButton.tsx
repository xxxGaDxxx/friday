import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

import popUpActions from '../../../assets/svg/myPackPopupActions.svg';
import { styleButtonActivateModal } from '../../../common/components/universalModalWindow/style/styleMUIComponents';
import { PATH } from '../../../common/enum/pathEnum';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { ReturnComponentType } from '../../../common/types';
import { getCardsLearnDataTC } from '../../learn/reducer/learnReducer';
import s from '../styles/Cards.module.scss';

import { CardModal } from './cardsModals/CardModal';
import { MyPackMenu } from './MyPackMenu';

type PackNameAndButtonType = {
  isMyPack: boolean;
  packName: string;
  cardPackId: string;
  cardsTotalCount: number;
  // questionFormat: string;
};

export const PackNameAndButton = ({
  isMyPack,
  packName,
  cardPackId,
  cardsTotalCount,
}: // questionFormat,
PackNameAndButtonType): ReturnComponentType => {
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
          <button type="button" onClick={showMenu} className={s.popUp}>
            <img src={popUpActions} alt="popup actions" />
          </button>
        )}

        <div className={s.menu}>
          {isShowedMenu && (
            <MyPackMenu hideMenu={showMenu} navigateToLearnPage={navigateToLearnPage} />
          )}
        </div>
      </Box>

      {isMyPack ? (
        <CardModal
          variantOfButtonToCallModal="contained"
          cardPackId={cardPackId}
          clickHere="Add new card"
          styleIcons={styleButtonActivateModal}
          definedQuestion=""
          definedImage=""
          definedQuestionFormat="Text"
          defaultAnswer=""
          title="Add card"
        />
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
