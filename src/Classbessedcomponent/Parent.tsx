import React, { FC } from "react";
type a = {
  name: string;
  city: string;

};

const Parent = (Component:a) => {
  const data = {
    name: "sagar",
    city: "khatima",
  };

  return () => <Component value={data}/>
  
};

export default Parent;
