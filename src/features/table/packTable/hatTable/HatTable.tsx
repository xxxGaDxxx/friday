import React, { useEffect } from 'react';

import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useAppDispatch, useAppSelector } from '../../../../app/store/store';
import arrow from '../../../../assets/svg/arrow.svg';
import { ReturnComponentType } from '../../../../types';
import { packDateTC, setPackSortAC } from '../reducer/packTableReducer';

// import s from './HatTable.module.scss';

export const HatTable = (): ReturnComponentType => {
  const sortPacks = useAppSelector(state => state.pack.sortPacks);
  const dispatch = useAppDispatch();

  const onFilteringClick = (thName: string): void => {
    if (thName === 'name') {
      if (sortPacks === '0name') {
        dispatch(setPackSortAC('1name'));
      } else {
        dispatch(setPackSortAC('0name'));
      }
    }
    if (thName === 'card') {
      if (sortPacks === '0cardsCount') {
        dispatch(setPackSortAC('1cardsCount'));
      } else {
        dispatch(setPackSortAC('0cardsCount'));
      }
    }
    if (thName === 'updated') {
      if (sortPacks === '0updated') {
        dispatch(setPackSortAC('1updated'));
      } else {
        dispatch(setPackSortAC('0updated'));
      }
    }
    if (thName === 'user_name') {
      if (sortPacks === '0user_name') {
        dispatch(setPackSortAC('1user_name'));
      } else {
        dispatch(setPackSortAC('0user_name'));
      }
    }
  };

  useEffect(() => {
    dispatch(packDateTC());
  }, [dispatch, sortPacks]);

  return (
    <TableHead>
      <TableRow sx={{ background: '#EFEFEF' }}>
        <TableCell onClick={() => onFilteringClick('name')}>
          Name
          {sortPacks === '0name' || sortPacks === '1name' ? <ImgArrow /> : ''}
        </TableCell>
        <TableCell align="right" onClick={() => onFilteringClick('card')}>
          Cards
          {sortPacks === '0cardsCount' || sortPacks === '1cardsCount' ? <ImgArrow /> : ''}
        </TableCell>
        <TableCell align="right" onClick={() => onFilteringClick('updated')}>
          Last Updated
          {sortPacks === '0updated' || sortPacks === '1updated' ? <ImgArrow /> : ''}
        </TableCell>
        <TableCell align="right" onClick={() => onFilteringClick('user_name')}>
          Created by
          {sortPacks === '0user_name' || sortPacks === '1user_name' ? <ImgArrow /> : ''}
        </TableCell>
        <TableCell align="right">Actions</TableCell>
      </TableRow>
    </TableHead>
  );
};

const ImgArrow = (): ReturnComponentType => {
  const sortPacks = useAppSelector(state => state.pack.sortPacks);
  const transformRotate = sortPacks[0] === '1' ? 'rotate(180deg)' : '';
  const none = sortPacks === '' ? 'none' : '';

  return (
    <img
      src={arrow}
      alt="arrow"
      style={{ display: none, transform: transformRotate, paddingLeft: '5px' }}
    />
  );
};
