import React from "react";

const Search = () => {
  return (
    <>
      <div className="mt-2 relative flex w-[90%] sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 m-auto shadow-md border-2 rounded-full">
        <input
          type="search"
          className="relative m-0 -me-0.5 block flex-auto rounded-full bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill"
          placeholder="Buscar"
          aria-label="Buscar"
          id="exampleFormControlInput3"
          aria-describedby="button-addon3"
        />
        <button
          className="z-[2] inline-block rounded-full border-2 border-black px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-black transition duration-150 ease-in-out hover:border-primary-accent-300 hover:bg-black-50/50 hover:text-white focus:border-yellow-300 focus:bg-black focus:text-yellow-300 focus:outline-none focus:ring-0 active:border-black active:text-primary-700 dark:text-black dark:hover:bg-black dark:focus:bg-black"
          data-twe-ripple-init
          data-twe-ripple-color="white"
          type="button"
          id="button-addon3"
        >
          Buscar
        </button>
      </div>
    </>
  );
};

export default Search;
