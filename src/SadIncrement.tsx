import { FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { SadButtonClicked } from "./actions/action";

type SadIncrementProps = {

};

const SadIncrement: FC<SadIncrementProps> = (props) => {

  const [count,setcount] = useState(0)
  const dispatch = useDispatch();

  function increment() {
    dispatch( SadButtonClicked(count,new Date()))
  }


  return (
    <div>
     
      <h3>Are you Sad <img className="w-10" src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/sad-but-relieved-face_1f625.png"/></h3>
     
      <input className="border boder-1" onChange={(event)=> setcount(+event.target.value)} value={count}   />
      <button
        onClick={increment}
        className="bg-indigo-500 px-2  rounded-md text-white"
      >
        {" "}
        Yes
      </button> 

    </div>
  );
};

SadIncrement.defaultProps = {};
export default memo(SadIncrement);

