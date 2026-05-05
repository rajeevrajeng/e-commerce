import { all } from "redux-saga/effects";

import MainCategorySagas from "./MainCategorySagas"

export default function* RootSaga()
{
    yield all([

        MainCategorySagas(),
        //SubCategorySagas()
    ])
}