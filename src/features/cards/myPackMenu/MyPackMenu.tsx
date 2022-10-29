import React from 'react';

import ClickAwayListener from '@mui/base/ClickAwayListener';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

import deleteSvg from '../../../assets/svg/actions/Delete.svg';
import editSvg from '../../../assets/svg/actions/Edit.svg';
import teacherSvg from '../../../assets/svg/actions/teacher.svg';
import { PATH } from '../../../common/enum/pathEnum';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../common/types';
import { packDeleteTC, updatePackTC } from '../../packs/reducer/packTableReducer';

import { MyPackMenuProps } from './type/MyPackMenuProps';

export const MyPackMenu = ({ hideMenu }: MyPackMenuProps): ReturnComponentType => {
  const status = useAppSelector(state => state.app.status);
  const packId = useAppSelector(state => state.card.cardsPackId);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onDeleteClick = (): void => {
    dispatch(packDeleteTC(packId));
    if (status === 'succeeded') {
      navigate(PATH.PACKS_LIST);
    }
  };

  const onEditClick = (): void => {
    dispatch(updatePackTC(packId));
    hideMenu();
  };

  const onTrainingClick = (): void => {};

  return (
    <Paper elevation={24}>
      <ClickAwayListener onClickAway={hideMenu}>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={onEditClick}>
              <img src={editSvg} alt="editSvg" />
              <ListItemText primary="Edit" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={onDeleteClick}>
              <img src={deleteSvg} alt="deleteSvg" />
              <ListItemText primary="Delete" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={onTrainingClick}>
              <img src={teacherSvg} alt="teacherSvg" />
              <ListItemText primary="Learn" />
            </ListItemButton>
          </ListItem>
        </List>
      </ClickAwayListener>
    </Paper>
  );
};
