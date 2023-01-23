import createSagaMiddleware from "redux-saga";
import { productsLoadedAction } from "../actions/products";
import {takeEvery} from "redux-saga/effects"
import getProductsSaga from "./productsSaga";
 
const sagaMiddleware = createSagaMiddleware()

  export function* rootSaga (){
    yield takeEvery(productsLoadedAction, getProductsSaga)
}


export default sagaMiddleware;