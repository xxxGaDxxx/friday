import { UpdateGradeType } from '../features/learn/reducer/learnReducer';

import { instance } from './config';
import { UpdateGradeResponseType } from './types/apiType';

export const learnAPI = {
  updateGrade(params: UpdateGradeType) {
    return instance.put<UpdateGradeResponseType>('cards/grade', params);
  },
};
