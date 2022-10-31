import { AxiosResponse } from 'axios';

import { updateGradeType } from '../features/learn/reducer/learnReducer';

import { instance } from './config';
import { updateGradeResponseType } from './types/apiType';

export const learnAPI = {
  putGrade(data: updateGradeType) {
    return instance.put<updateGradeType, AxiosResponse<updateGradeResponseType>>(
      'cards/grade',
      data,
    );
  },
};
