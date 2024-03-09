/* eslint-disable react/prop-types */
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

//Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15,16,17,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15,16,17,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15,16,17];

function Items({ currentItems }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-4">
      {currentItems &&
        currentItems.map((item) => (
          //className="bg-gray-100 p-4 rounded-md"
          <div key={item}> 
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