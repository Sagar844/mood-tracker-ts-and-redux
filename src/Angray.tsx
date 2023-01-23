import { FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { AngrayButtonClicked } from "./actions/action";

type AngrayProps = {};

const Angrayincrement: FC<AngrayProps> = (props) => {
  const [count, setcount] = useState(0);
  const dispatch = useDispatch();

  function increment() {
    dispatch(AngrayButtonClicked(count, new Date()));
  }
  return (
    <div>
      <h3>Are you Angray <img className="w-10" src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/angry-face_1f620.png"/> </h3>
      <input
        className="border boder-1 rounded-md"
        onChange={(event) => setcount(+event.target.value)}
        value={count}
      />

      <button onClick={increment} className=" bg-red-500 px-2 rounded-md  ">
        Yes
      </button>
    </div>
  );
};

Angrayincrement.defaultProps = {};
export default memo(Angrayincrement);
