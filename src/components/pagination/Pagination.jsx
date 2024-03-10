/* eslint-disable react/prop-types */
import { useState } from 'react';
import ReactPaginate from 'react-paginate';



function Items({ currentItems }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      {currentItems &&
        currentItems.map((item) => (
          <div key={item}>
             {/* <div key={item} className="bg-gray-100 p-4 rounded-md"> */}
            {/* <h3 className="text-lg font-semibold">Item #{item}</h3> */}
          </div>
        ))}
    </div>
  );
}

export default function Pagination({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="flex flex-col items-center mt-8 gap-3">
      <Items currentItems={currentItems} />
      <div className="pagination-container mb-4 w-full flex justify-center items-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          previousLabel="<"
          renderOnZeroPageCount={null}
          containerClassName="pagination flex space-x-2"
          pageClassName="bg-white p-2 rounded cursor-pointer"
          activeClassName="bg-yellow-300 text-black"
          previousClassName="bg-gray-300 hover:bg-black hover:text-white p-2 rounded-full cursor-pointer"
          nextClassName="bg-gray-300 hover:bg-black hover:text-white p-2 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
}
