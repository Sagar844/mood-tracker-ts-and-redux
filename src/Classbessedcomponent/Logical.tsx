import { useState } from "react";

const arr = ["Javascript ", "Typescript", "css", "html"];

const Logical = () => {
  const [item, setitem] = useState(arr);
  const [toggle, setToggle] = useState(false);

  const handlechange = (value: any, i: any ) => {
    setToggle(!toggle);
  };

  return (
    <>
      <ul className="list-group">
        {item.map((el, i) => (
          <li key={i}>
            {el}

            <input
              onChange={(e) => handlechange(e.target.value, i)}
              className="font-xl"
              type="checkBox"
            />
            {toggle  ===!!  i  && ( <button>del</button>)}
          </li>
        ))}
      </ul>
    </>
  );
};
export default Logical;

// import { useState } from "react";

// const Logical = () => {
//   const [toggle, setToggle] = useState(false);
//   console.log(toggle)

//   return (
//     <>
//       <button onClick={() => setToggle(!toggle)} >
//       {toggle? "togle on" : "togle off"}
//       </button>
//       {toggle && (
//         <ul className="list-group">
//           <h1>sagar</h1>
//           <h1>vishal</h1>
//           <h1>madhu</h1>
//           <h1>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
//             molestiae reprehenderit necessitatibus, neque doloribus sit
//             voluptates eius veniam harum nulla vitae voluptatibus hic?
//             Laboriosam autem repellat beatae quidem sapiente sed?
//           </h1>
//         </ul>
//       )}
//     </>
//   );
// };
// export default Logical;






