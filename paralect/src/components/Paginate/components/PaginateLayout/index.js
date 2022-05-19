import React from "react";
import ReactPaginate from "react-paginate";

import "./styles.css";

const PaginateLayout = ({
  pageCount,
  handlePageClick,
  itemOffset,
  itemSet,
  user,
}) => {
  return (
    <>
      <div className="paginate">
        <span className="paginate_description">{`${itemOffset}-${itemSet}  of  ${user.public_repos} items`}</span>
        <ReactPaginate
          className="paginate_list"
          activeClassName="activ_item"
          pageClassName="paginate_item"
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
};

export default PaginateLayout;
