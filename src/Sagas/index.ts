import createSagaMiddleware from "redux-saga";
import { productsLoadedAction } from "../actions/products";
import { takeEvery, takeLatest, takeLeading } from "redux-saga/effects";
import getProductsSaga from "./productsSaga";

const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
  yield takeLeading(productsLoadedAction, getProductsSaga);
}

export default sagaMiddleware;
 
