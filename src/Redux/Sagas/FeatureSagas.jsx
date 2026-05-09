import { put, takeEvery } from "redux-saga/effects";
import { CREATE_FEATURE, CREATE_FEATURE_RED, GET_FEATURE, GET_FEATURE_RED, UPDATE_FEATURE, UPDATE_FEATURE_RED, DELETE_FEATURE, DELETE_FEATURE_RED } from "../Constant"
import { createRecord, getRecord, updateRecord, deleteRecord } from "./Service/Index"                  // Off if real backend
//import { createMultipartRecordRecord } from "./Service/Index" // ON if real backend

function* createSaga(action)          //Worker saga
{
    let response = yield createRecord("feature", action.payload)                       // Off if real backend
    //  let response = yield createMultipartRecordRecord(action.payload)      // ON if real backend, if record has file field
    yield put({ type: CREATE_FEATURE_RED, payload: response })
}


function* getSaga(action)          //Worker saga
{
    let response = yield getRecord("feature")
    yield put({ type: GET_FEATURE_RED, payload: response })

}

function* updateSaga(action)          //Worker saga
{
    yield updateRecord("feature", action.payload)
    yield put({ type: UPDATE_FEATURE_RED, payload: action.payload })

    // let response = yield updateMultipartRecord(action.payload)      // ON if real backend, if record has file field
    // yield put({ type: UPDATE_FEATURE_RED, payload: response })

}

function* deleteSaga(action)          //Worker saga
{
    yield deleteRecord("feature", action.payload)
    yield put({ type: DELETE_FEATURE_RED, payload: action.payload })

}


export default function* FeatureSagas() {
    yield takeEvery(CREATE_FEATURE, createSaga)          // Watcher Saga
    yield takeEvery(GET_FEATURE, getSaga)                // Watcher Saga
    yield takeEvery(UPDATE_FEATURE, updateSaga)          // Watcher Saga
    yield takeEvery(DELETE_FEATURE, deleteSaga)           // Watcher Saga

}