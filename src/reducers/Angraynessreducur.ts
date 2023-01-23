import { AnyAction } from "redux";
import { Moment } from "../store";
import { ANGRAY_BUTTON_CLICKED } from "../actions/action";
import produce from "immer";


export type Angraystate = {
  AngrayMoment: Moment[];
};
export const intisialAngrayState: Angraystate = {
  AngrayMoment: [],
};

function  Angraynessreducur(currentState= intisialAngrayState,action:AnyAction) {
  switch (action.type) {
    case ANGRAY_BUTTON_CLICKED:
     const  newAngrayMoment ={
      when:action.payload.when,
      intensity:action.payload.count,

     };
     return produce(currentState,(draft)=>{
      draft.AngrayMoment.push(newAngrayMoment)
     })
    default:
          return currentState;
}

}
export default Angraynessreducur;
