import { put, takeEvery } from "redux-saga/effects";
import { CREATE_FAQ, CREATE_FAQ_RED, GET_FAQ, GET_FAQ_RED, UPDATE_FAQ, UPDATE_FAQ_RED, DELETE_FAQ, DELETE_FAQ_RED } from "../Constant"
import { createRecord, getRecord, updateRecord, deleteRecord } from "./Service/Index"                  // Off if real backend
//import { createMultipartRecordRecord } from "./Service/Index" // ON if real backend

function* createSaga(action)          //Worker saga
{
    let response = yield createRecord("faq", action.payload)                       // Off if real backend
    //  let response = yield createMultipartRecordRecord(action.payload)      // ON if real backend, if record has file field
    yield put({ type: CREATE_FAQ_RED, payload: response })
}


function* getSaga(action)          //Worker saga
{
    let response = yield getRecord("faq")
    yield put({ type: GET_FAQ_RED, payload: response })

}

function* updateSaga(action)          //Worker saga
{
    yield updateRecord("faq", action.payload)
    yield put({ type: UPDATE_FAQ_RED, payload: action.payload })

    // let response = yield updateMultipartRecord(action.payload)      // ON if real backend, if record has file field
    // yield put({ type: UPDATE_FAQ_RED, payload: response })

}

function* deleteSaga(action)          //Worker saga
{
    yield deleteRecord("faq", action.payload)
    yield put({ type: DELETE_FAQ_RED, payload: action.payload })

}


export default function* FaqSagas() {
    yield takeEvery(CREATE_FAQ, createSaga)          // Watcher Saga
    yield takeEvery(GET_FAQ, getSaga)                // Watcher Saga
    yield takeEvery(UPDATE_FAQ, updateSaga)          // Watcher Saga
    yield takeEvery(DELETE_FAQ, deleteSaga)           // Watcher Saga

}