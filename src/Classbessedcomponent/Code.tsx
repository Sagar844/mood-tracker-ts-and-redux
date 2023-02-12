import axios from "axios";
import React, { useState } from "react";

const Code = () => {
  const [count, setcount] = useState(0);

  // type
  type a = {
    name: string;
    roll: number;
    addrese: {
      city: string;
    };

    getdata: any;
  };

  // object destucuring

  // const user1: a = {
  //   name: "sagar",
  //   roll: 10,
  //   city: "khatima",
  // };
  // console.log({ ...user1 });

  const user2: a = {
    name: "sagar",
    roll: 10,
    addrese: {
      city: "khatima",
    },

    getdata: function () {
      return "all data here";
    },
  };
  // let user ={...user2}

  // let user = JSON.parse(JSON.stringify(user2));
  // // let user = cloneDeep(user2);
  // user.addrese.city = "mathura";
  // console.log(user2);
  // console.log(user);

  return (
    <div>
    
      
    </div>
  );
};
export default Code;

// sessionStorage.removeItem("sagar")

const person = {
  name: "sagar",
  age: 18,
  city: "khatima",
};

const a = JSON.stringify(person);

localStorage.setItem("persom", a);
// const usetting = JSON.parse(localStorage.getItem("persom"))

// console.log(usetting.name)

// function cloneDeep(user2: {
//   name: string;
//   roll: number;
//   addrese: {
//     city: string;
//   };
//   getdata: any;
// }) {
//   throw new Error("Function not implemented.");
// }

// export const api = () => {
//   return axios
//     .get("https://myeasykart.codeyogi.io/products")
//     .then((res) => console.log(res.data));
// };

// api();
const islogedin = false;
const permissionhas = true;
if (islogedin && permissionhas) {
  console.log("items deleted successfully");
} else {
  console.log("permisssion denied");
}


// method shorthand
const Products = {
  name:"mobile",
  buy(){
    price:200
  }
}

console.log(Products)

export const api = async () => {
  const res = await axios
    .get("https://myeasykart.codeyogi.io/products");
  return console.log(res.data.data);
};

api();
