import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { useAppDispatch } from '../../../../app/store/store';
import popUpActions from '../../../../assets/svg/actions/myPackPopupActions.svg';
import { ReturnComponentType } from '../../../../common/types';
import { addCardTC } from '../reducer/cardTableReducer';
import s from '../styles/CardsList.module.scss';

type TitleButtonType = {
  isMyPack: boolean;
  packName: string;
  cardPackId: string;
};

export const TitleButton = ({
  isMyPack,
  packName,
  cardPackId,
}: TitleButtonType): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const onAddNewCardClick = (): void => {
    dispatch(addCardTC(cardPackId));
  };

  return (
    <section className={s.section}>
      <Box className={s.box}>
        <Typography component="h1">{packName}</Typography>
        {isMyPack && (
          <IconButton>
            <img src={popUpActions} alt="popup actions" />
          </IconButton>
        )}
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
