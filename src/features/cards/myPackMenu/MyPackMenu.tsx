import React, { useEffect } from 'react';

import ClickAwayListener from '@mui/base/ClickAwayListener';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';

import deleteSvg from '../../../assets/svg/Delete.svg';
import editSvg from '../../../assets/svg/Edit.svg';
import teacherSvg from '../../../assets/svg/teacher.svg';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../common/types';
import { DeletePackModal } from '../../packs/packTable/modalPack/DeletePackModal';
import { EditPackModal } from '../../packs/packTable/modalPack/EditPackModal';
import { updatePackTC } from '../../packs/reducer/packTableReducer';

import { MyPackMenuProps } from './type/MyPackMenuProps';

export const MyPackMenu = ({ hideMenu }: MyPackMenuProps): ReturnComponentType => {
  const packId = useAppSelector(state => state.card.cardsPackId);
  const namePack = useAppSelector(state => state.card.packName);

  const dispatch = useAppDispatch();

  const onEditClick = (name: string, privatePack: boolean): void => {
    dispatch(updatePackTC(packId, name, privatePack, 'card'));
  };

  const onTrainingClick = (): void => {};

  useEffect(() => {}, [namePack]);

  return (
    <Paper elevation={24}>
      <ClickAwayListener onClickAway={hideMenu}>
        <List>
          <ListItem disablePadding>
            <EditPackModal
              currentPackTitle={namePack}
              updatePack={onEditClick}
              stylesOfIcon={{
                minHeight: 0,
                width: '105px',
                padding: 0,
                color: 'black',
              }}
              clickHere={
                <ListItemButton>
                  <img src={editSvg} alt="editSvg" />
                  Edit
                </ListItemButton>
              }
            />
          </ListItem>

          <ListItem disablePadding>
            <DeletePackModal
              stylesOfIcon={{
                minHeight: 0,
                width: '105px',
                padding: '0',
                color: 'black',
              }}
              callPoint="card"
              namePack={namePack}
              packId={packId}
              clickHere={
                <ListItemButton>
                  <img src={deleteSvg} alt="deleteSvg" />
                  Delete
                </ListItemButton>
              }
            />
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
