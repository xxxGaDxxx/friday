import React from 'react';

import ClickAwayListener from '@mui/base/ClickAwayListener';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';

import { PATH } from '../../../common/enum/pathEnum';
import { logOutUserTC } from '../../../features/profile/reducer/profileReducer';
import { ReturnComponentType } from '../../../types';
import { useAppDispatch } from '../../store/store';

type Props = {
  hideMenu: () => void;
};

export const ToggleMenu = ({ hideMenu }: Props): ReturnComponentType => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onLogOutClick = (): void => {
    dispatch(logOutUserTC());
  };
  const onProfileClick = (): void => {
    navigate(PATH.PROFILE);
    hideMenu();
  };

  return (
    <Paper elevation={3}>
      <ClickAwayListener onClickAway={hideMenu}>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={onProfileClick}>
              <ListItemIcon>
                <PersonOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={onLogOutClick}>
              <ListItemIcon>
                <LogoutOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Log out" />
            </ListItemButton>
          </ListItem>
        </List>
      </ClickAwayListener>
    </Paper>
  );
};
