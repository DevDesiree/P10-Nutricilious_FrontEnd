import React from 'react';
import ReactPaginate from 'react-paginate';

<<<<<<< HEAD
function Pagination({ totalItems, itemsPerPage, onPageChange }) {
  const pageCount = Math.ceil(totalItems / itemsPerPage);
=======

>>>>>>> 60a7b4711fdfdb3f4cc0f6757aa709b5b0eb7619

  const handlePageClick = (selectedPage) => {
    onPageChange(selectedPage.selected);
  };

  return (
<div className="flex justify-center mt-5 mb-5">
  <ReactPaginate
    breakLabel="..."
    nextLabel=">"
    onPageChange={handlePageClick}
    pageRangeDisplayed={5}
    pageCount={pageCount}
    previousLabel="<"
    renderOnZeroPageCount={null}
    containerClassName="pagination"
    pageClassName="bg-white p-2 rounded cursor-pointer"
    activeClassName="bg-yellow-300 text-black"
    previousClassName="bg-gray-300 hover:bg-black hover:text-white p-2 rounded-full cursor-pointer mr-2"
    nextClassName="bg-gray-300 hover:bg-black hover:text-white p-2 rounded-full cursor-pointer"
    className="flex"
  />
</div>
  );
}

export default Pagination;