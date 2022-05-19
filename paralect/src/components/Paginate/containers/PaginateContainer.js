import PaginateLayout from "../components/PaginateLayout/";

const PaginateContainer = ({
  pageCount,
  handlePageClick,
  user,
  itemOffset,
  itemSet,
}) => {
  return (
    <>
      <PaginateLayout
        pageCount={pageCount}
        user={user}
        itemOffset={itemOffset}
        itemSet={itemSet}
        handlePageClick={handlePageClick}
      />
    </>
  );
};

export default PaginateContainer;
