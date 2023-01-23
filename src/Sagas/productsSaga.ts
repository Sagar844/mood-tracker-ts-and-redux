import getProducts from "../api";
import {call} from "redux-saga/effects"


function* getProductsSaga ():Generator{
const data =  yield call (getProducts)
console.log("data is", data)
}


export default getProductsSaga;
