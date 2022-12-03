import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import { Card } from "../components/Card";
import { DATA } from "../../MOCK_DATA";
import { useFavourStore } from "../store/store";

export function Home() {
  const [formObj, setFormObj] = useState({});
  const { favour } = useFavourStore((state) => state);
  const [propArr, setPropArr] = useState(DATA);
  const [query, setQuery] = useState("");
  const filterData = () => {
    const res = DATA.filter((item) =>
      Object.entries(formObj).every(([key, value]) => item[key] === value)
    );

    // .entries(([key, value]) => row[key] === value)
    // setPropArr(res);
    console.log(res);

    setPropArr(res);
  };
  function handleSearch(e) {
    setQuery(e.target.value);
  }
  useEffect(() => {
    console.log(formObj);
  }, [formObj]);
  return (
    <>
      {/* Navbar */}

      <nav className="bg-white shadow-lg mb-5 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                onChange={(e) => handleSearch(e)}
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Houses, Location..."
                required
              />
            </div>
          </form>

          <div href="" className="flex items-center">
            <img
              src="https://img.icons8.com/nolan/512/home-page.png"
              className="h-6 mr-3 sm:h-9"
              alt="Home Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Property
            </span>
          </div>
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
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 mt-3 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/favourites"}
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <button
                    type="button"
                    className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Favourite
                    <span className="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                      {favour.length}
                    </span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="flex shadow-md  mx-auto justify-around items-center w-[420px]">
        <Dropdown
          label={"Where"}
          menuArray={DATA}
          itemText={"location"}
          filterData={filterData}
          itemValue={"location"}
          setFormObj={setFormObj}
        />

        <Dropdown
          label={"When"}
          menuArray={DATA}
          itemText={"date"}
          filterData={filterData}
          itemValue={"date"}
          setFormObj={setFormObj}
        />

        <Dropdown
          label={"Price"}
          menuArray={DATA}
          itemText={"price"}
          filterData={filterData}
          itemValue={"price"}
          setFormObj={setFormObj}
        />

        <Dropdown
          label={"Type"}
          menuArray={DATA}
          itemText={"property_type"}
          filterData={filterData}
          itemValue={"property_type"}
          setFormObj={setFormObj}
        />
        <div className="flex ml-10 w-[300px]">
          <button
            onClick={filterData}
            type="button"
            className="text-white py-2 ml-3 mr-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
          >
            Search
          </button>
          <button
            onClick={() => setPropArr(DATA)}
            className="text-white py-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 "
          >
            Reset
          </button>
        </div>
      </div>
      <div className="w-[75%] flex mx-auto items-left flex-wrap">
        {propArr
          ?.filter(
            (obj) =>
              obj.property_name?.toLowerCase().includes(query.toLowerCase()) ||
              String(obj.price).toLowerCase().includes(query.toLowerCase()) ||
              obj.location?.toLowerCase().includes(query.toLowerCase())
          )
          ?.map((i, idx) => (
            <Card
              key={idx}
              img={i.img}
              title={i.property_name}
              desc={i.price}
              actionBtn={"Favourite"}
              location={i.location}
            />
          ))}
      </div>
    </>
  );
}
