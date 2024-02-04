import { createAsyncThunk } from "@reduxjs/toolkit";
import { getArticles, getArticlesByCategory } from "src/api/articlesApi";

const fetchAllArticles = createAsyncThunk(
  "categories/fetchAllArticles",
  async () => {
    try {
      const response = getArticles();
      console.log(response);

      return response;
    } catch (ex) {
      throw ex;
    }
  }
);

const fetchSubArticles = createAsyncThunk(
  "categories/fetchSubArticles",
  async (category: string) => {
    try {
      const response = getArticlesByCategory(category);
      console.log(response);

      return response;
    } catch (ex) {
      throw ex;
    }
  }
);

// DEV ONLY!!!
const pause = (duration: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchAllArticles, fetchSubArticles };
