import React, { useState } from "react";

import Dropdown from "./Dropdown";
import { Card } from "./Card";
import { DATA } from "../MOCK_DATA";
export function Home() {
  const [propArr, setPropArr] = useState(DATA);
  const filterData = (propObj) => {
    const filterArr = DATA.filter((obj) => obj === propObj);
    setPropArr(filterArr);
  };
  console.log(DATA);
  return (
    <>
      {/* Navbar */}

      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://img.icons8.com/nolan/512/home-page.png"
              className="h-6 mr-3 sm:h-9"
              alt="Home Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Property
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Favourites
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex mx-auto w-[420px]">
        <Dropdown
          optionName={"Location"}
          defaultSelected={"Default"}
          menuArray={DATA}
          itemText={"property_name"}
          filterData={filterData}
          itemValue={"id"}
        />

        <Dropdown
          optionName={"Date"}
          defaultSelected={"Default"}
          menuArray={DATA}
          itemText={"date"}
          filterData={filterData}
          itemValue={"date"}
        />

        <Dropdown
          optionName={"Price"}
          defaultSelected={"Default"}
          menuArray={DATA}
          itemText={"price"}
          filterData={filterData}
          itemValue={"price"}
        />

        <Dropdown
          optionName={"Type"}
          defaultSelected={"Default"}
          menuArray={DATA}
          itemText={"property_type"}
          filterData={filterData}
          itemValue={"property_type"}
        />

        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
        >
          Search
        </button>
        <button
          onClick={() => setPropArr(DATA)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
        >
          Reset
        </button>
      </div>
      {propArr.map((i) => (
        <Card title={i.property_name} desc={i.price} actionBtn={"Info"} />
      ))}
    </>
  );
}
