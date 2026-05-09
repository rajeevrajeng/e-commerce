import { put, takeEvery } from "redux-saga/effects";
import { CREATE_BRAND, CREATE_BRAND_RED, GET_BRAND, GET_BRAND_RED, UPDATE_BRAND, UPDATE_BRAND_RED, DELETE_BRAND, DELETE_BRAND_RED } from "../Constant"
import { createRecord, getRecord, updateRecord, deleteRecord } from "./Service/Index"                  // Off if real backend
//import { createMultipartRecordRecord } from "./Service/Index" // ON if real backend

function* createSaga(action)          //Worker saga
{
    let response = yield createRecord("brand", action.payload)                       // Off if real backend
    //  let response = yield createMultipartRecordRecord(action.payload)      // ON if real backend, if record has file field
    yield put({ type: CREATE_BRAND_RED, payload: response })
}


function* getSaga(action)          //Worker saga
{
    let response = yield getRecord("brand")
    yield put({ type: GET_BRAND_RED, payload: response })

}

function* updateSaga(action)          //Worker saga
{
    yield updateRecord("brand", action.payload)
    yield put({ type: UPDATE_BRAND_RED, payload: action.payload })

    // let response = yield updateMultipartRecord(action.payload)      // ON if real backend, if record has file field
    // yield put({ type: UPDATE_BRAND_RED, payload: response })

}

function* deleteSaga(action)          //Worker saga
{
    yield deleteRecord("brand", action.payload)
    yield put({ type: DELETE_BRAND_RED, payload: action.payload })

}


export default function* BrandSagas() {
    yield takeEvery(CREATE_BRAND, createSaga)          // Watcher Saga
    yield takeEvery(GET_BRAND, getSaga)                // Watcher Saga
    yield takeEvery(UPDATE_BRAND, updateSaga)          // Watcher Saga
    yield takeEvery(DELETE_BRAND, deleteSaga)           // Watcher Saga

}