import { put, takeEvery } from "redux-saga/effects";
import { CREATE_SETTING, CREATE_SETTING_RED, GET_SETTING, GET_SETTING_RED, UPDATE_SETTING, UPDATE_SETTING_RED, DELETE_SETTING, DELETE_SETTING_RED } from "../Constant"
import { createRecord, getRecord, updateRecord, deleteRecord } from "./Service/Index"                  // Off if real backend
//import { createMultipartRecordRecord } from "./Service/Index" // ON if real backend

function* createSaga(action)          //Worker saga
{
    let response = yield createRecord("setting", action.payload)                       // Off if real backend
    //  let response = yield createMultipartRecordRecord(action.payload)      // ON if real backend, if record has file field
    yield put({ type: CREATE_SETTING_RED, payload: response })
}


function* getSaga(action)          //Worker saga
{
    let response = yield getRecord("setting")
    yield put({ type: GET_SETTING_RED, payload: response })

}

function* updateSaga(action)          //Worker saga
{
    yield updateRecord("setting", action.payload)
    yield put({ type: UPDATE_SETTING_RED, payload: action.payload })

    // let response = yield updateMultipartRecord(action.payload)      // ON if real backend, if record has file field
    // yield put({ type: UPDATE_SETTING_RED, payload: response })

}

function* deleteSaga(action)          //Worker saga
{
    yield deleteRecord("setting", action.payload)
    yield put({ type: DELETE_SETTING_RED, payload: action.payload })

}


export default function* SettingSagas() {
    yield takeEvery(CREATE_SETTING, createSaga)          // Watcher Saga
    yield takeEvery(GET_SETTING, getSaga)                // Watcher Saga
    yield takeEvery(UPDATE_SETTING, updateSaga)          // Watcher Saga
    yield takeEvery(DELETE_SETTING, deleteSaga)           // Watcher Saga

}