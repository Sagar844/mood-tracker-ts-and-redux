import { State } from "../store";

export function happySelector(state: State) {
  return state.happy.happyMoment;
}

export function sadSelector(state: State) {
  return state.sad.sadMoment;
}

export function AngraySelector(state: State) {
  return state.angray.AngrayMoment;
}
