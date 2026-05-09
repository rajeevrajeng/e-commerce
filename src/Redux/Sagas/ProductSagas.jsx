import { put, takeEvery } from "redux-saga/effects";
import { CREATE_PRODUCT, CREATE_PRODUCT_RED, GET_PRODUCT, GET_PRODUCT_RED, UPDATE_PRODUCT, UPDATE_PRODUCT_RED, DELETE_PRODUCT, DELETE_PRODUCT_RED } from "../Constant"
import { createRecord, getRecord, updateRecord, deleteRecord } from "./Service/Index"                  // Off if real backend
//import { createMultipartRecordRecord } from "./Service/Index" // ON if real backend

function* createSaga(action)          //Worker saga
{
    let response = yield createRecord("product", action.payload)                       // Off if real backend
    //  let response = yield createMultipartRecordRecord(action.payload)      // ON if real backend, if record has file field
    yield put({ type: CREATE_PRODUCT_RED, payload: response })
}


function* getSaga(action)          //Worker saga
{
    let response = yield getRecord("product")
    yield put({ type: GET_PRODUCT_RED, payload: response })

}

function* updateSaga(action)          //Worker saga
{
    yield updateRecord("product", action.payload)
    yield put({ type: UPDATE_PRODUCT_RED, payload: action.payload })

    // let response = yield updateMultipartRecord(action.payload)      // ON if real backend, if record has file field
    // yield put({ type: UPDATE_PRODUCT_RED, payload: response })

}

function* deleteSaga(action)          //Worker saga
{
    yield deleteRecord("product", action.payload)
    yield put({ type: DELETE_PRODUCT_RED, payload: action.payload })

}


export default function* ProductSagas() {
    yield takeEvery(CREATE_PRODUCT, createSaga)          // Watcher Saga
    yield takeEvery(GET_PRODUCT, getSaga)                // Watcher Saga
    yield takeEvery(UPDATE_PRODUCT, updateSaga)          // Watcher Saga
    yield takeEvery(DELETE_PRODUCT, deleteSaga)           // Watcher Saga

}