import React from "react";
import { Link } from "react-router-dom";
import { useFavourStore } from "./store/store";
export function Favourite() {
  const uniqueIds = [];
  const favours = useFavourStore((state) => state.favour);

  return (
    <div className="mt-10 ml-10">
      <Link
        to={"/"}
        className="ml-10 mt-[100px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Go Back
      </Link>

      <div className="w-48 mt-[100px] mx-auto text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <div className="w-48 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <a
            href="#"
            aria-current="true"
            className="block py-2 px-4 w-full text-white bg-blue-700 rounded-t-lg border-b border-gray-200 cursor-pointer dark:bg-gray-800 dark:border-gray-600"
          >
            Favourites
          </a>
          {favours
            .filter((data, index) => {
              return favours.indexOf(data) === index;
            })
            ?.map((i) => (
              <a
                href="#"
                className="block py-2 px-4 w-full border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
              >
                {i}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
