import React, { useEffect } from 'react';

import ClickAwayListener from '@mui/base/ClickAwayListener';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';

import deleteSvg from '../../../assets/svg/actions/Delete.svg';
import editSvg from '../../../assets/svg/actions/Edit.svg';
import teacherSvg from '../../../assets/svg/actions/teacher.svg';
import { useAppDispatch } from '../../../common/hooks/useAppDispatch';
import { useAppSelector } from '../../../common/hooks/useAppSelector';
import { ReturnComponentType } from '../../../common/types';
import { DeletePackModal } from '../../packs/packTable/modalPack/DeletePackModal';
import { EditPackModal } from '../../packs/packTable/modalPack/EditPackModal';
import { updatePackTC } from '../../packs/reducer/packTableReducer';

import { MyPackMenuProps } from './type/MyPackMenuProps';

export const MyPackMenu = ({ hideMenu }: MyPackMenuProps): ReturnComponentType => {
  // const status = useAppSelector(state => state.app.status);
  const packId = useAppSelector(state => state.card.cardsPackId);
  const namePack = useAppSelector(state => state.card.packName);

  const dispatch = useAppDispatch();

  const onEditClick = (name: string, privatePack: boolean): void => {
    dispatch(updatePackTC(packId, name, privatePack));
  };

  // const dispatch = useAppDispatch();

  // const navigate = useNavigate();

  // const onDeleteClick = (): void => {
  // dispatch(packDeleteTC(packId));
  // if (status === 'succeeded') {
  //   navigate(PATH.PACKS_LIST);
  // }
  // };

  // const onEditClick = (): void => {
  //   // dispatch(updatePackTC(packId));
  //   hideMenu();
  // };

  const onTrainingClick = (): void => {};

  useEffect(() => {}, [namePack]);

  return (
    <Paper elevation={24}>
      <ClickAwayListener onClickAway={hideMenu}>
        <List>
          <ListItem disablePadding>
            {/* <ListItemButton onClick={onEditClick}> */}
            <ListItemButton>
              <EditPackModal
                currentPackTitle={namePack}
                onEditPackClick={onEditClick}
                stylesOfIcon={{
                  minHeight: 0,
                  minWidth: 0,
                  padding: 0,
                  color: 'black',
                }}
                clickHere={
                  <span>
                    <img src={editSvg} alt="editSvg" />
                    Edit
                  </span>
                }
              />

              {/* <img src={editSvg} alt="editSvg" /> */}
              {/* <ListItemText primary="Edit" /> */}
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            {/* <ListItemButton onClick={onDeleteClick}> */}
            <ListItemButton>
              {/* <img src={deleteSvg} alt="deleteSvg" /> */}
              <DeletePackModal
                stylesOfIcon={{
                  minHeight: 0,
                  minWidth: 0,
                  padding: '0',
                  color: 'black',
                }}
                namePack={namePack}
                packId={packId}
                clickHere={
                  <span>
                    <img src={deleteSvg} alt="deleteSvg" />
                    Delete
                  </span>
                }
              />
              {/* <ListItemText primary="Delete" /> */}
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
