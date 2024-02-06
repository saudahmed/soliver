import { combineReducers } from "@reduxjs/toolkit";

import { categoriesReducer } from "src/store/slices/categoriesSlice";
import { filterArticlesReducer } from "src/store/slices/filterArticlesSlice";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  filterArticles: filterArticlesReducer,
});

export default rootReducer;
