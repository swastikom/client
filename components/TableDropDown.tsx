'use client'
import Link from "next/link";
import React, { useState } from "react";
import { MdOutlineWorkHistory } from "react-icons/md";

const TableDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative inline-block">
      <button
        id="TableDropDownHoverButton"
        data-TableDropDown-toggle="TableDropDownHover"
        data-TableDropDown-trigger="hover"
        className="text-slate-700 text-lg gap-1 bg-white border-slate-200 bw hover:bg-slate-100 focus:outline-none font-medium rounded-xl px-6 py-2.5 text-center inline-flex items-center hover:rounded-xl"
        type="button"
      >
        Slippage{" "}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      <div
        id="TableDropDownHover"
        className={`z-10 ${isOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-xl shadow w-44 dark:bg-gray-700 absolute`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="TableDropDownHoverButton"
        >
          <li>
            <Link
              href="#"
              className="block text-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              0 %
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block px-4 py-2 text-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              0.5 %
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="block text-lg px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              1 %
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TableDropDown;
