import React from "react";
import TableDropDown from "./TableDropDown";
import Link from "next/link";

// Sample data array
const data = [
  {
    name: "Strategy A",
    calamarRatio: 1.2,
    overallProfit: "15%",
    avgDailyProfit: "0.5%",
    winPercentage: "60%",
    price: 500,
    action: "Buy"
  },
  {
    name: "Strategy B",
    calamarRatio: 1.1,
    overallProfit: "12%",
    avgDailyProfit: "0.4%",
    winPercentage: "55%",
    price: 0,
    action: "Sell"
  },
  {
    name: "Strategy B",
    calamarRatio: 1.1,
    overallProfit: "12%",
    avgDailyProfit: "0.4%",
    winPercentage: "55%",
    price: 0,
    action: "Sell"
  },
  {
    name: "Strategy B",
    calamarRatio: 1.1,
    overallProfit: "12%",
    avgDailyProfit: "0.4%",
    winPercentage: "55%",
    price: 0,
    action: "Sell"
  },
  {
    name: "Strategy B",
    calamarRatio: 1.1,
    overallProfit: "12%",
    avgDailyProfit: "0.4%",
    winPercentage: "55%",
    price: 0,
    action: "Sell"
  },
  {
    name: "Strategy B",
    calamarRatio: 1.1,
    overallProfit: "12%",
    avgDailyProfit: "0.4%",
    winPercentage: "55%",
    price: 0,
    action: "Sell"
  },
  {
    name: "Strategy B",
    calamarRatio: 1.1,
    overallProfit: "12%",
    avgDailyProfit: "0.4%",
    winPercentage: "55%",
    price: 0,
    action: "Sell"
  },
  // Add more data objects as needed
];

const Table = () => {
  return (
    <div className="w-[100%] flex content-center items-center pb-10">
      <div className="w-[100%] mx-8 px-7 py-6 bg-white rounded-2xl shadow-lg">
        <div className="pb-5 border-b-2 border-slate-200 flex items-center justify-between">
          <h1 className="font-semibold text-lg px-2 text-slate-700">Basic Backtest</h1>
          <TableDropDown />
        </div>
        <ul className="flex items-center justify-center rounded-xl py-5 gap-2 bg-slate-600 px-5">
          <li className="table-header">Rank</li>
          <li className="table-header">Name</li>
          <li className="table-header">Calamar Ratio</li>
          <li className="table-header">Overall Profit</li>
          <li className="table-header">Avg. Daily Profit</li>
          <li className="table-header">Win % (Day)</li>
          <li className="table-header">Price (Rs)</li>
          <li className="table-header">Action</li>
        </ul>
        {data.map((item, index) => (
          <ul key={index} className="my-2.5 hover:bg-slate-200 hover:cursor-pointer flex items-center justify-center rounded-xl py-5 gap-2 bg-slate-100 px-5">
            <li className="row-cell">{index + 1}</li>
            <li className="row-cell">{item.name}</li>
            <li className="row-cell">{item.calamarRatio}</li>
            <li className="row-cell">{item.overallProfit}</li>
            <li className="row-cell">{item.avgDailyProfit}</li>
            <li className="row-cell">{item.winPercentage}</li>
            <li className="row-cell">{item.price === 0 ? "-" : item.price}</li>
            <li className={item.action === "Sell" ? "row-cell text-red-400" : "row-cell text-green-500"}>
              <Link href={"/"}>{item.action}</Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Table;
