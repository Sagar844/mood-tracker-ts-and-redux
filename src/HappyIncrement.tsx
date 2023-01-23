import { FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { HappyButtonClicked } from "./actions/action";


type HappyIncrementProps = {};

const HappyIncrement: FC<HappyIncrementProps> = (props) => {
  const [count,setcount] = useState(0)
  const dispatch = useDispatch();

  function increment() {

    dispatch( HappyButtonClicked(count,new Date()))
  }
  return (
    <div>
      <h3>Are you Happy <img className="w-10" src="https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/grinning-face-with-big-eyes_1f603.gif"/>  </h3>
      <input className="border boder-1 rounded-md" onChange={(event)=> setcount(+event.target.value)} value={count}  />
      
      <button onClick={increment} className=" bg-green-500 px-2 rounded-md  ">
        Yes
      </button>
    </div>
  );
};

HappyIncrement.defaultProps = {};
export default memo(HappyIncrement);
