import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import RepositoriesLayout from "../components/RepositoriesLayout/";
import PaginateContainer from "../../Paginate/containers/PaginateContainer";
import { PAGE } from "../../../pages/HomePage/actions/";

const RepositoriesContainer = () => {
  const dispatch = useDispatch();
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(1);
  const [itemSet, setItemSet] = useState(1);

  const { user, page, itemsPerPage, repositories } = useSelector(
    (state) => state.userManagerReducer
  );

  useEffect(() => {
    setPageCount(Math.ceil(user.public_repos / itemsPerPage));
  }, [user, page]);

  useEffect(() => {
    setItemOffset(page * itemsPerPage - itemsPerPage + 1);
  }, [user, page]);

  useEffect(() => {
    setItemSet(page * itemsPerPage);
  }, [user, page]);

  const handlePageClick = (event) => {
    dispatch(PAGE(event.selected + 1));
  };

  return (
    <div className="repositories">
      <RepositoriesLayout repositories={repositories} userState={user} />
      <PaginateContainer
        itemOffset={itemOffset}
        user={user}
        itemSet={itemSet}
        handlePageClick={handlePageClick}
        pageCount={pageCount}
      />
    </div>
  );
};

export default RepositoriesContainer;
