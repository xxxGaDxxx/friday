import * as React from 'react';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';

import { ReturnComponentType } from '../../../common/types';

import { PacksTableBody } from './PacksTableBody';
import { PacksTableHeader } from './PacksTableHeader';

export const PacksTableGeneral = (): ReturnComponentType => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <PacksTableHeader />

        <PacksTableBody />
      </Table>
    </TableContainer>
  );
};
