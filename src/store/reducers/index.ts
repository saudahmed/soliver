import { combineReducers } from "@reduxjs/toolkit";

import { categoriesReducer } from "src/store/slices/categoriesSlice";

const rootReducer = combineReducers({
  categories: categoriesReducer,
});

export default rootReducer;
