// javascript oprators

// 1- condisional oprator (ternary oprator)

const user = "admin";

// if (user === "admin") {
//     console.log("you are a admin")

// } else {

//     console.log("you are not admin")
// }

user === "admin"
  ? console.log("you are a admin")
  : console.log("you are not admin");

// 2- comparision oprators

// equl(==)
// srtict equl(===)
// not equl(!=)
// strict not equl(!==)

console.log(4 == 4);
console.log(4 === 4, 4 === "4");

// logical oprators &&
const islogedin = false;
const permissionhas = true;

if (islogedin && permissionhas) {
  console.log("items deleted successfully");
} else {
  console.log("permisssion denied");
}

// map

const numbers = [4, 9, 16, 25];
const newArr = numbers.map((item) => item + 1000000);
console.log(newArr);

let myfavlag = [10, 20, 30, 40, 50, 60, 70];

myfavlag.forEach(function (newvalue, index, arr) {
  console.log(newvalue, index, arr[index] + 100);
});

const newArr1 = myfavlag.map((item) => item * 10);
console.log(newArr);

// api call for axios/

export const api = async () => {
  const res = await axios.get("https://myeasykart.codeyogi.io/products");
  return console.log(res.data);
};

api();

// async await api call

export const api2 = async () => {
  const res = await axios.get("https://myeasykart.codeyogi.io/products");
  return console.log(res.data);
};

try {
  await api2();
} catch (error) {
  console.log(error);
}
// sello copy
// object destucuring

const Products = {
  title: "apple mobile",
  price: 2000,
};

// const {title ,price} = Products;
console.log(a);

export default Interview;
