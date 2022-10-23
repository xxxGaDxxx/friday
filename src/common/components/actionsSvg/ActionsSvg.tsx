import React from 'react';

import deleteSvg from '../../../assets/svg/actions/Delete.svg';
import editSvg from '../../../assets/svg/actions/Edit.svg';
import teacherSvg from '../../../assets/svg/actions/teacher.svg';
import { ReturnComponentType } from '../../../types';

export const ActionsSvg = (): ReturnComponentType => {
  return (
    <div>
      <img src={teacherSvg} alt="teacherSvg" />
      <img src={editSvg} alt="editSvg" />
      <img src={deleteSvg} alt="deleteSvg" />
    </div>
  );
};
