import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArticle } from "src/types";
import {
  fetchAllArticles,
  fetchSubArticles,
} from "src/store/thunks/categoriesThunks";

interface IArticlesState {
  articles: Array<IArticle>;
  isArticlesLoading: boolean;

  subArticles: Array<IArticle>;
  isSubArticlesLoading: boolean;

  articlesError: any;
  subArticlesError: any;

  articleCategories: Array<string>;
}

export const initialState: IArticlesState = {
  articles: [],
  subArticles: [],

  isArticlesLoading: false,
  isSubArticlesLoading: false,

  articlesError: null,
  subArticlesError: null,

  articleCategories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllArticles.pending, (state, action) => {
      state.isArticlesLoading = true;
    });
    builder.addCase(
      fetchAllArticles.fulfilled,
      (state, action: PayloadAction<Array<IArticle>>) => {
        state.isArticlesLoading = false;

        const articles = action.payload;

        //Also Update article Categories
        state.articleCategories = Array.from(
          new Set(articles.map((article: IArticle) => article.category))
        );

        state.articles = action.payload;
      }
    );
    builder.addCase(fetchAllArticles.rejected, (state, action) => {
      state.isArticlesLoading = false;
      state.articlesError = action.error;
    });

    builder.addCase(fetchSubArticles.pending, (state, action) => {
      state.isSubArticlesLoading = true;
    });
    builder.addCase(fetchSubArticles.fulfilled, (state, action) => {
      state.isSubArticlesLoading = false;
      state.subArticles = action.payload;
    });
    builder.addCase(fetchSubArticles.rejected, (state, action) => {
      state.isSubArticlesLoading = false;
      state.subArticlesError = action.error;
    });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
