import { put, takeEvery } from "redux-saga/effects";
import { CREATE_MAINCATEGORY, CREATE_MAINCATEGORY_RED } from "../Constant"
import { createRecord } from "./Service/Index"

function* createSaga(action)          //Worker saga
{
    let response = yield createRecord(action.payload)
    yield put({ type: CREATE_MAINCATEGORY_RED, payload: response })

}

function* MaincategorySagas() {
    yield takeEvery(CREATE_MAINCATEGORY, createSaga)          // Watcher Saga

}