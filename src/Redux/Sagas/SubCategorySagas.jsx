import { put, takeEvery } from "redux-saga/effects";
import { CREATE_SUBCATEGORY, CREATE_SUBCATEGORY_RED, GET_SUBCATEGORY, GET_SUBCATEGORY_RED, UPDATE_SUBCATEGORY, UPDATE_SUBCATEGORY_RED, DELETE_SUBCATEGORY, DELETE_SUBCATEGORY_RED } from "../Constant"
import { createRecord, getRecord, updateRecord, deleteRecord } from "./Service/Index"                  // Off if real backend
//import { createMultipartRecordRecord } from "./Service/Index" // ON if real backend

function* createSaga(action)          //Worker saga
{
    let response = yield createRecord("subcategory", action.payload)                       // Off if real backend
    //  let response = yield createMultipartRecordRecord(action.payload)      // ON if real backend, if record has file field
    yield put({ type: CREATE_SUBCATEGORY_RED, payload: response })
}


function* getSaga(action)          //Worker saga
{
    let response = yield getRecord("subcategory")
    yield put({ type: GET_SUBCATEGORY_RED, payload: response })

}

function* updateSaga(action)          //Worker saga
{
    yield updateRecord("subcategory", action.payload)
    yield put({ type: UPDATE_SUBCATEGORY_RED, payload: action.payload })

    // let response = yield updateMultipartRecord(action.payload)      // ON if real backend, if record has file field
    // yield put({ type: UPDATE_SUBCATEGORY_RED, payload: response })

}

function* deleteSaga(action)          //Worker saga
{
    yield deleteRecord("subcategory", action.payload)
    yield put({ type: DELETE_SUBCATEGORY_RED, payload: action.payload })

}


export default function* SubcategorySagas() {
    yield takeEvery(CREATE_SUBCATEGORY, createSaga)          // Watcher Saga
    yield takeEvery(GET_SUBCATEGORY, getSaga)                // Watcher Saga
    yield takeEvery(UPDATE_SUBCATEGORY, updateSaga)          // Watcher Saga
    yield takeEvery(DELETE_SUBCATEGORY, deleteSaga)           // Watcher Saga

}