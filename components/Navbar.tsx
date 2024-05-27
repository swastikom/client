"use client";

import React from "react";
import Link from "next/link";
import DropDown from "./DropDown";
import { FaTableList } from "react-icons/fa6";
import { FaChartSimple } from "react-icons/fa6";
import { MdDocumentScanner } from "react-icons/md";
import { TbAlertSquareFilled } from "react-icons/tb";
import { LuAlignHorizontalDistributeStart } from "react-icons/lu";
import { SiSpeedtest } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaCoins } from "react-icons/fa";





const Navbar = () => {
  return (
    <div className="fixed w-full bg-[#f6f8fe] items-center flex-col justify-center">
      <div className="flex items-center justify-around pt-6 pb-6 ">
        <Link href="/" className="font-bold text-xl">
          LOGO
        </Link>
        <div className="flex gap-4">
          <button className="nav-buttons">Login</button>
          <button className="nav-buttons">Signup</button>
        </div>
      </div>
      <div className="items-center justify-center w-full flex pb-3">
      <div className=" bg-blue-600 ml-6 mr-6 shadow-md p-5 rounded-2xl flex items-center gap-2 w-fit justify-center" >
        <Link href={"/"} className="tool-buttons"><FaTableList />
Leader Board</Link>
        <DropDown/>
        <Link href={"/"} className="tool-buttons"> <FaChartSimple/> Historical Charts</Link>
        <Link href={"/"} className="tool-buttons"><MdDocumentScanner/>Scanners</Link>
        <Link href={"/"} className="tool-buttons"><TbAlertSquareFilled/>Alerts</Link>
        <Link href={"/"} className="tool-buttons"><LuAlignHorizontalDistributeStart/>Basic Backtest</Link>
        <Link href={"/"} className="tool-buttons"><SiSpeedtest/>Advanced Backtest</Link>
        <Link href={"/"} className="tool-buttons"><IoMdPricetag/>Pricing</Link>
        <Link href={"/"} className="tool-buttons"><FaCoins/>My Earning</Link>
      </div>
      </div>
      
    </div>
  );
};

export default Navbar;
