import { AnyAction } from "redux";
import { Moment } from "../store";
import { SAD_BUTTON_CLICKED } from "../actions/action";
import produce from "immer";

export type SadState = {
  sadMoment: Moment[];
};
export const intisialsadState: SadState = {
  sadMoment: [],
};

function Sadnessreducur(currentState= intisialsadState, action: AnyAction):SadState {
  switch (action.type) {
    case SAD_BUTTON_CLICKED:
     const  newSadMoment ={
      when:action.payload.when,
      intensity:action.payload.count,

     };
     return produce(currentState,(draft)=>{
      draft.sadMoment.push(newSadMoment)
     })

    default:
      return currentState;
  }
}

export default Sadnessreducur;
