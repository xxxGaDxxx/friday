import { AppDispatchType } from '../../app/store/store';
import { setCardSortAC } from '../../features/cards/reducer/cardTableReducer';
import { setPackSortAC } from '../../features/packs/reducer/packTableReducer';

export const onSortRows = (thName: string, dispatch: AppDispatchType, sort: string): void => {
  switch (thName) {
    case 'name':
      if (sort === '0name') {
        dispatch(setPackSortAC('1name'));
        break;
      }
      dispatch(setPackSortAC('0name'));
      break;

    case 'card':
      if (sort === '0cardsCount') {
        dispatch(setPackSortAC('1cardsCount'));
        break;
      }
      dispatch(setPackSortAC('0cardsCount'));
      break;

    case 'updated':
      if (sort === '0updated') {
        dispatch(setPackSortAC('1updated'));
        break;
      }
      dispatch(setPackSortAC('0updated'));
      break;

    case 'user_name':
      if (sort === '0user_name') {
        dispatch(setPackSortAC('1user_name'));
        break;
      }
      dispatch(setPackSortAC('0user_name'));
      break;

    case 'question':
      if (sort === '0question') {
        dispatch(setCardSortAC('1question'));
        break;
      }
      dispatch(setCardSortAC('0question'));
      break;

    case 'answer':
      if (sort === '0answer') {
        dispatch(setCardSortAC('1answer'));
        break;
      }
      dispatch(setCardSortAC('0answer'));
      break;

    case 'updatedCard':
      if (sort === '0updated') {
        dispatch(setCardSortAC('1updated'));
        break;
      }
      dispatch(setCardSortAC('0updated'));
      break;
    default:
      break;
  }
};
