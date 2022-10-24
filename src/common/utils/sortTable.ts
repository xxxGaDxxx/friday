import { AppDispatchType } from '../../app/store/store';
import { setPackSortAC } from '../../features/table/packTable/reducer/packTableReducer';

export const onFilteringClick = (
  thName: string,
  dispatch: AppDispatchType,
  sortPacks: string,
): void => {
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
