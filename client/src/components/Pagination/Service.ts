export const paginate = (
  pageNumber: number,
  setCurrentPage: Function
): void => {
  setCurrentPage(pageNumber);
};

export const previousPage = (
  currentPage: number,
  setCurrentPage: Function
): void => {
  if (currentPage !== 1) {
    setCurrentPage(currentPage - 1);
  }
};

export const nextPage = (
  currentPage: number,
  totalItems: any,
  setCurrentPage: Function,
  itemsPerPage: number
): void => {
  if (currentPage !== Math.ceil(totalItems / itemsPerPage)) {
    setCurrentPage(currentPage + 1);
  }
};
