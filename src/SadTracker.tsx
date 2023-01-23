import { FC, memo } from "react";
import { useSelector } from "react-redux";
import { sadSelector } from "./selectors/selector";

type SadTrackerProps = {};

const SadTracker: FC<SadTrackerProps> = (props) => {
  const sadMoment = useSelector(sadSelector);


  return (
    <div  className="bg-indigo-700 px-3 py-4 rounded-md">
        {sadMoment.map((m) => (
        <div >
          <>
            Sadness intensity:{m.intensity},when :{m.when.toUTCString()}
          </>
        </div>
      ))}
    </div>
  );
};

SadTracker.defaultProps = {};
export default memo(SadTracker);
