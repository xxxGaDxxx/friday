import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import popUpActions from '../../../assets/svg/actions/myPackPopupActions.svg';
import { BackTo } from '../../../common/components/backTo/BackTo';
import { PATH } from '../../../common/enum/pathEnum';
import { ReturnComponentType } from '../../../types';
import { Search } from '../packTable/sortBar/sortBarComponents/Search';

import s from './CardsList.module.scss';

export const CardsList = (): ReturnComponentType => {
  return (
    <main className={s.main}>
      <BackTo path={PATH.PACKS_LIST} nameOfPath="Packs List" />
      <section className={s.section}>
        <Box className={s.box}>
          <Typography component="h1">My Pack</Typography>
          <IconButton>
            <img src={popUpActions} alt="popup actions" />
          </IconButton>
        </Box>
        <Button
          className={s.addCardButton}
          type="button"
          variant="contained"
          color="primary"
          onClick={() => {}} // needs to create!!!
        >
          Add new card
        </Button>
      </section>
      <Search />
    </main>
  );
};
