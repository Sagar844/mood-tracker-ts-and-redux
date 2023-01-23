import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { AngraySelector } from "./selectors/selector";

type AngrayTrakerProps = {};

const AngaryTraker: FC<AngrayTrakerProps> = (props) => {
  console.log("angrayTracker refres")
  const AngrayMoment = useSelector(AngraySelector);

  return (
    <div  className="bg-blue-500 px-3 py-4 rounded-md">
        {AngrayMoment.map((m) => (
        <div >
          <>
            Sadness intensity:{m.intensity},when :{m.when.toUTCString()}
          </>
        </div>
      ))}
    </div>
  );
};

AngaryTraker.defaultProps = {};
export default memo(AngaryTraker)