import { useState } from "react";
import Button from "../Button/Button";
import TodoList from "./TodoList";

function BtnDisabled() {
  const [inputValue, SetInputValue] = useState("");
  const [data, setdata] = useState<string[]>([]);

  const handleclick = () => {
    setdata((data) => {
      const updateList = [...data, inputValue];

      SetInputValue("");

      return updateList;
    });
  };
  const remove = (id: number) => {
    setdata((item) => {
      return item.filter((ele, i) => {
        return i !== id;
      });
    });
  };

  return (
    <div>
      <label> Type Here : </label>
      <input
        className="border-2 border-black"
        value={inputValue}
        onChange={(e) => SetInputValue(e.target.value)}
      ></input>
      <br /> <br />
      <button
        onClick={handleclick}
        className="bg-green-500 rounded-md text-white font-xm px-2 py-1"
      >
        Submit
      </button>
      {data.map((d, i) => (
        <TodoList key={i} id={i} todo={d} onselect={remove} />
      ))}


      <Button theme="secondary" size="large">button</Button>
    </div>
  );
}

export default BtnDisabled;
 