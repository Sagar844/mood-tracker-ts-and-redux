import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { happySelector } from "./selectors/selector";

type HappyTrackerProps = {};

const HappyTracker: FC<HappyTrackerProps> = (props) => {
  console.log("HappyTracker refres")
  const happyMoment = useSelector(happySelector);

  return (
    <div className="bg-green-700 px-3 py-4 rounded-md">
      {happyMoment.map((m) => (
        <div  >
          <>
            happyness intensity:{m.intensity},when :{m.when.toUTCString()}
          </>
        </div>
      ))}
    </div>
  );
};

HappyTracker.defaultProps = {};
export default memo(HappyTracker);
