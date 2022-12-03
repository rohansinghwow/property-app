import React from "react";

export function Card({ img = "", actionBtn, title, desc, setFavour }) {
  return (
    <div className="flex mr-5 mt-5 max-w-[720px]">
      <div class="w-full max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            class="p-3 h-[180px] w-[220px] rounded-t-lg"
            src={img}
            alt="product image"
          />
        </a>
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>

          <div class="flex justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">
              ${desc}
            </span>
            <button
              onClick={(el) =>
                setFavour(...el, img, actionBtn, title, desc, setFavour)
              }
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {actionBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
