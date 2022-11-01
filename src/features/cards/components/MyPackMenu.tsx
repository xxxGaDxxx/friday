import React from 'react';

import ClickAwayListener from '@mui/base/ClickAwayListener';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';

import deleteIcon from '../../../assets/svg/Delete.svg';
import editIcon from '../../../assets/svg/Edit.svg';
import learnIcon from '../../../assets/svg/teacher.svg';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../common/types';
import { DeletePackModal } from '../../packs/components/modalPack/DeletePackModal';
import { EditPackModal } from '../../packs/components/modalPack/EditPackModal';
import { updatePackTC } from '../../packs/reducer/packsReducer';

type MyPackMenuProps = {
  hideMenu: () => void;
};

export const MyPackMenu = ({ hideMenu }: MyPackMenuProps): ReturnComponentType => {
  const packId = useAppSelector(state => state.card.cardsPackId);
  const namePack = useAppSelector(state => state.card.packName);

  const dispatch = useAppDispatch();

  const onEditClick = (name: string, privatePack: boolean): void => {
    dispatch(updatePackTC(packId, name, privatePack, 'card'));
    hideMenu();
  };

  const onLearnClick = (): void => {};

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
                  <img src={editIcon} alt="editIcon" />
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
                  <img src={deleteIcon} alt="deleteIcon" />
                  Delete
                </ListItemButton>
              }
            />
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={onLearnClick}>
              <img src={learnIcon} alt="learnIcon" />
              <ListItemText primary="Learn" />
            </ListItemButton>
          </ListItem>
        </List>
      </ClickAwayListener>
    </Paper>
  );
};
