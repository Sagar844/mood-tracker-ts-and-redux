import React, { FC } from "react";
import Parent from "./Parent";

type a ={
  value:string;
  name:string,
  city:string
}

const Hoc:FC<a> = ({ value }) => {
  console.log(value);

  return (
    <div>
      <h1>{value.name}</h1>
      <h1>{value.city}</h1>
    </div>
  );
};

export default Parent(Hoc);
