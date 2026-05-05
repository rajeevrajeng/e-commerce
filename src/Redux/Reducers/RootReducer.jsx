import { combineReducers } from "@reduxjs/toolkit";
import MainCategoryReducer from "./MainCategoryReducer";

export default combineReducers({

    MaincategoryStateData: MainCategoryReducer,


})