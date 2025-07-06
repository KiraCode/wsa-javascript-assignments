import React from "react";
import Card from "./Card";
import { assignment } from "../assets/data/assignment";

const Assignment = () => {
  return (
    <>
      <h1 className="text-center text-5xl pb-5 md:text-6xl lg:text-7xl font-semibold bg-gradient-to-r from-purple-500 to-gray-300 bg-clip-text text-transparent leading-tight">
        Javascript Assignments
      </h1>
      <div className="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 sm:px-0">
        {assignment.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default Assignment;
