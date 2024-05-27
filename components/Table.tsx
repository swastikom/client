"use client";

import React, { FC } from "react";
import DropDown from "./DropDown";
import { GetStaticProps } from "next";
import { Item, ChildComponentProps } from "@/components/interface";
import ChildComponent from "@/components/Row";

const fetchItems = async (): Promise<Item[]> => {
  // Replace with your data fetching logic
  return [
    { id: 1, name: "Item One", description: "This is item one" },
    { id: 2, name: "Item Two", description: "This is item two" },
  ];
};

interface ParentComponentProps {
  items: Item[];
}

export const getStaticProps: GetStaticProps<
  ParentComponentProps
> = async () => {
  const items = await fetchItems();
  return {
    props: {
      items,
    },
  };
};

const Table: FC<ParentComponentProps> = ({ items }) => {
  return (
    <div className="bg-white ml-6 mr-6 shadow-sm rounded-2xl  p-5 ">
      <div className="flex items-center justify-between px-5 pb-4 border-b-2 border-b-slate-100">
        <h1 className="font-semibold">Basic Backtest</h1>
        <DropDown />
      </div>
      <div className="list-none flex px-5 pt-4 font-semibold justify-between gap-2">
        <li className="w-[6em] ">Rank</li>
        <li className="w-[15em] ">Name</li>
        <li className="w-[10em] ">Calmar Ratio</li>
        <li className="w-[10em] ">Overall Profit</li>
        <li className="w-[10em] ">Avg. Daily Profit</li>
        <li className="w-[10em] ">Win % (Day)</li>
        <li className="w-[10em] ">Price (Rs)</li>
        <li className="w-[10em] ">Action</li>
      </div>
      <div>
        <h1>Parent Component</h1>
        <ChildComponent items={items} />
      </div>
    </div>
  );
};

export default Table;
