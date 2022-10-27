import { AppDispatchType } from '../../app/store/store';
import { setCardSortAC } from '../../features/table/cards/reducer/cardTableReducer';
import { setPackSortAC } from '../../features/table/packs/reducer/packTableReducer';

export const onFilteringClick = (thName: string, dispatch: AppDispatchType, sort: string): void => {
  switch (thName) {
    case 'name':
      if (sort === '0name') {
        dispatch(setPackSortAC('1name'));
      } else {
        dispatch(setPackSortAC('0name'));
      }
      break;
    case 'card':
      if (sort === '0cardsCount') {
        dispatch(setPackSortAC('1cardsCount'));
      } else {
        dispatch(setPackSortAC('0cardsCount'));
      }
      break;
    case 'updated':
      if (sort === '0updated') {
        dispatch(setPackSortAC('1updated'));
      } else {
        dispatch(setPackSortAC('0updated'));
      }
      break;
    case 'user_name':
      if (sort === '0user_name') {
        dispatch(setPackSortAC('1user_name'));
      } else {
        dispatch(setPackSortAC('0user_name'));
      }
      break;
    case 'question':
      if (sort === '0question') {
        dispatch(setCardSortAC('1question'));
      } else {
        dispatch(setCardSortAC('0question'));
      }
      break;
    case 'answer':
      if (sort === '0answer') {
        dispatch(setCardSortAC('1answer'));
      } else {
        dispatch(setCardSortAC('0answer'));
      }
      break;
    case 'updatedCard':
      if (sort === '0updated') {
        dispatch(setCardSortAC('1updated'));
      } else {
        dispatch(setCardSortAC('0updated'));
      }
      break;
    default:
      break;
  }
};
