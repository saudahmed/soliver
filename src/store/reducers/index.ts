import { combineReducers } from "@reduxjs/toolkit";

import { categoriesReducer } from "src/store/slices/categoriesSlice";
import { filterArticlesReducer } from "src/store/slices/filterArticlesSlice";
import { filterSubArticlesReducer } from "src/store/slices/filterSubArticlesSlice";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  filterArticles: filterArticlesReducer,
  filterSubArticles: filterSubArticlesReducer,
});

export default rootReducer;
