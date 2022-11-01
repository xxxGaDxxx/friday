import { setCardSortAC } from '../../features/cards/reducer/cardsReducer';
import { setPackSortAC } from '../../features/packs/reducer/packsReducer';
import { AppDispatchType } from '../../store/store';

export const sortRows = (thName: string, dispatch: AppDispatchType, sort: string): void => {
  switch (thName) {
    case 'name':
      dispatch(setPackSortAC(sort === '0name' ? '1name' : '0name'));
      break;

    case 'card':
      dispatch(setPackSortAC(sort === '0cardsCount' ? '1cardsCount' : '0cardsCount'));
      break;

    case 'updated':
      dispatch(setPackSortAC(sort === '0updated' ? '1updated' : '0updated'));
      break;

    case 'user_name':
      dispatch(setPackSortAC(sort === '0user_name' ? '1user_name' : '0user_name'));
      break;

    case 'question':
      dispatch(setCardSortAC(sort === '0question' ? '1question' : '0question'));
      break;

    case 'answer':
      dispatch(setCardSortAC(sort === '0answer' ? '1answer' : '0answer'));
      break;

    case 'updatedCard':
      dispatch(setCardSortAC(sort === '0updated' ? '1updated' : '0updated'));
      break;

    default:
      break;
  }
};
