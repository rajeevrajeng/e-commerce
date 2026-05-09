import { combineReducers } from "@reduxjs/toolkit";
import MaincategoryReducer from "./MainCategoryReducer";
import SubcategoryReducer from "./SubCategoryReducer";
import BrandReducer from "./BrandReducer";
import ProductReducer from "./ProductReducer";
import FeatureReducer from "./FeatureReducer";
import FaqReducer from "./FaqReducer";
import SettingReducer from "./SettingReducer";

export default combineReducers({

    MaincategoryStateData: MaincategoryReducer,
    SubcategoryStateData: SubcategoryReducer,
    BrandStateData: BrandReducer,
    ProductStateData: ProductReducer,
    FeatureStateData: FeatureReducer,
    FaqStateData: FaqReducer,
    SettingStateData: SettingReducer


})