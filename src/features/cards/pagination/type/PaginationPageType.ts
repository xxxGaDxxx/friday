export type PaginationPageType = {
  itemsPerPage: number;
  selectPage: (page: number) => void;
  changeCountItemsPerPage: (itemsPerPage: number) => void;
};
