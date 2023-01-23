import { AnyAction } from "redux";
import { Moment } from "../store";
import { HAPPY_BUTTON_CLICKED } from "../actions/action";
import produce from "immer";

export type happystate = {
  happyMoment: Moment[];
};
export const intisialhappyState: happystate = {
  happyMoment: [],
};

function Happynessreducur(currentState= intisialhappyState,action:AnyAction):happystate {
  switch (action.type) {
    case HAPPY_BUTTON_CLICKED:
     const  newhappyMoment ={
      when:action.payload.when,
      intensity:action.payload.count,

     };
     return produce(currentState,(draft)=>{
      draft.happyMoment.push(newhappyMoment)
     })
    default:
          return currentState;
}
}
export default Happynessreducur;
