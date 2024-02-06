import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterArticlesState } from "src/types";

export const initialState: IFilterArticlesState = {
  selectedColors: [],
  selectedBrands: [],
  minimumPrice: 0,
  maximumPrice: 0,
};

const filterSubArticlesSlice = createSlice({
  name: "filterSubArticles",
  initialState,
  reducers: {
    initializeSelectedColorsSubArticles: (state, action) => {
      const { value, numberOfColors } = action.payload;
      for (let i = 0; i < numberOfColors; i++) {
        state.selectedColors.push(value);
      }
    },
    setSelectedColorsSubArticles(state, action) {
      const { index, value } = action.payload;
      state.selectedColors[index] = value;
    },
    initializeSelectedBrandsSubArticles: (state, action) => {
      const { value, numberOfBrands } = action.payload;
      for (let i = 0; i < numberOfBrands; i++) {
        state.selectedBrands.push(value);
      }
    },
    setSelectedBrandsSubArticles(state, action) {
      const { index, value } = action.payload;
      state.selectedBrands[index] = value;
    },
    setMinPriceSubArticles(state, action) {
      const { value } = action.payload;
      state.minimumPrice = value;
    },
    setMaxPriceSubArticles(state, action) {
      const { value } = action.payload;
      state.maximumPrice = value;
    },
    resetSubArticles: (state) => initialState,
  },
});

export const {
  initializeSelectedColorsSubArticles,
  setSelectedColorsSubArticles,
  initializeSelectedBrandsSubArticles,
  setSelectedBrandsSubArticles,
  setMinPriceSubArticles,
  setMaxPriceSubArticles,
  resetSubArticles,
} = filterSubArticlesSlice.actions;
export const filterSubArticlesReducer = filterSubArticlesSlice.reducer;
