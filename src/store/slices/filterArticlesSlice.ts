import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFilterArticlesState {
  selectedColors: Array<boolean>;
  selectedBrands: Array<boolean>;
  minimumPrice: number;
  maximumPrice: number;
}

export const initialState: IFilterArticlesState = {
  selectedColors: [],
  selectedBrands: [],
  minimumPrice: 0.0,
  maximumPrice: 0.0,
};

const filterArticlesSlice = createSlice({
  name: "filterArticles",
  initialState,
  reducers: {
    initializeSelectedColors: (state, action) => {
      const { value, numberOfColors } = action.payload;
      for (let i = 0; i < numberOfColors; i++) {
        state.selectedColors.push(value);
      }
    },
    setSelectedColors(state, action) {
      const { index, value } = action.payload;
      state.selectedColors[index] = value;
    },
    initializeSelectedBrands: (state, action) => {
      const { value, numberOfBrands } = action.payload;
      for (let i = 0; i < numberOfBrands; i++) {
        state.selectedBrands.push(value);
      }
    },
    setSelectedBrands(state, action) {
      const { index, value } = action.payload;
      state.selectedBrands[index] = value;
    },
    setMinPrice(state, action) {
      const { value } = action.payload;
      state.minimumPrice = value;
    },
    setMaxPrice(state, action) {
      const { value } = action.payload;
      state.maximumPrice = value;
    },
    reset(state, _) {
      state = {
        ...initialState,
      };
    },
  },
});

export const {
  initializeSelectedColors,
  setSelectedColors,
  initializeSelectedBrands,
  setSelectedBrands,
  setMinPrice,
  setMaxPrice,
} = filterArticlesSlice.actions;
export const filterArticlesReducer = filterArticlesSlice.reducer;
