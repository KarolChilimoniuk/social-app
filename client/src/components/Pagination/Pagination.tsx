import { nextPage, previousPage, paginate } from "./Service";
import { PaginationContainer, List, Item } from "./Pagination.style";

const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  setCurrentPage,
}: any): JSX.Element => {
  const pageNumbers: Array<number> = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      <List>
        <Item
          onClick={() => {
            previousPage(currentPage, setCurrentPage);
          }}
        >
          Prev
        </Item>
        {pageNumbers.map((number) => (
          <Item
            key={number}
            onClick={() => {
              paginate(number, setCurrentPage);
            }}
            className="page-number"
            theme={currentPage === number && "active"}
          >
            {number}
          </Item>
        ))}
        <Item
          onClick={() => {
            nextPage(currentPage, totalItems, setCurrentPage, itemsPerPage);
          }}
          className="page-number"
        >
          Next
        </Item>
      </List>
    </PaginationContainer>
  );
};

export default Pagination;
