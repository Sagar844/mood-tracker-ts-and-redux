import { combineReducers, createStore, applyMiddleware } from "redux";
import Sadnessreducur from "./reducers/Sadnessreducur";
import Happynessreducur from "./reducers/Happynessreducur";
import Angraynessreducur from "./reducers/Angraynessreducur";
import Productreducur from "./reducers/products";
import sagaMiddleware, { rootSaga } from "./Sagas";

export type Moment = {
  intensity: number;
  when: Date;
};

export type State = ReturnType<typeof reducer>;

const reducer = combineReducers({
  sad: Sadnessreducur,
  happy: Happynessreducur,
  angray: Angraynessreducur,
  products: Productreducur,
});

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)

  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(rootSaga);

export default store;

// first reducer function if and else condition

//   if (action.type === HAPPY_BUTTON_CLICKED) {
//     return { ...currentState, happyCount: currentState.happyCount + action.payload };
//   } else if (action.type === SAD_BUTTON_CLICKED ) {
//     return { ...currentState, sadCount: currentState.sadCount + action.payload };
//   }
//   return currentState;
// }

// second reducer function switch

// switch (action.type) {
//   case HAPPY_BUTTON_CLICKED:
//     return {
//       ...currentState,
//       happyMoment: [
//         ...currentState.happyMoment,
//         { intensity: action.payload.count, when: action.payload.when },
//       ],
//     };
//   case SAD_BUTTON_CLICKED:
//     return {
//       ...currentState,
//       sadMoment: [
//         ...currentState.sadMoment,
//         { intensity: action.payload.count, when: action.payload.when },
//       ],
//     };
//   default:
//     return currentState;
// }

// function reducer(currentState: State = initialState, action: AnyAction): State {
//   return {
//     sad: Sadnessreducur(currentState.sad, action),
//     happy: Happynessreducur(currentState.happy, action),
//     angray: Angraynessreducur(currentState.angray, action),
//   };
// }
