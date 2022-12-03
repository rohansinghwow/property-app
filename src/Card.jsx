import React from "react";
import { useFavourStore } from "./store/store";

export function Card({ img = "", actionBtn, title, desc, location }) {
  const { setFavour } = useFavourStore((state) => state);
  return (
    <div className="flex mr-5 mt-5 max-w-[720px]">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="p-3 h-[180px] w-[220px] rounded-t-lg"
            src={img}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl mb-2 font-semibold tracking-tight text-gray-900 dark:text-white">
              {title},{" "}
              <span className="text-gray-600 text-sm mb-5">{location}</span>
            </h5>
          </a>

          <div className="flex justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              ${desc} <br></br>
            </span>

            <button
              onClick={() => setFavour(title)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {actionBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
