import axios from "axios";
import { Platform } from "react-native";

const API_BASE_URL =
  Platform.OS === "ios" ? "http://localhost:3000" : "http://10.0.2.2:3000";

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const getArticles = async () => {
  try {
    const response = await apiService.get("/articles");

    return response.data;
  } catch (ex) {
    throw ex;
  }
};

export const getArticleById = async (id: string) => {
  try {
    const response = await apiService.get(`/articles/${id}`);

    return response.data;
  } catch (ex) {
    throw ex;
  }
};

export const getArticlesByPriceRange = async (
  minPrice: string,
  maxPrice: string
) => {
  try {
    const response = await apiService.get(
      `/articles?price_gte=${minPrice}&price_lte=${maxPrice}`
    );

    return response.data;
  } catch (ex) {
    throw ex;
  }
};

export const getArticlesByBrand = async (brand: string) => {
  try {
    const response = await apiService.get(`/articles?brand=${brand}`);

    return response.data;
  } catch (ex) {
    throw ex;
  }
};

export const getArticlesByCategory = async (category: string) => {
  try {
    const response = await apiService.get(
      `/articles?category=${encodeURIComponent(category)}`
    );

    return response.data;
  } catch (ex) {
    throw ex;
  }
};

export const getArticlesByColorGroup = async (colorGroup: string) => {
  try {
    const response = await apiService.get(
      `/articles?colorVariants.color.group=${colorGroup}`
    );

    return response.data;
  } catch (ex) {
    throw ex;
  }
};

export const updateWishListStatus = async (
  id: string,
  wishListStatus: boolean
) => {
  try {
    const response = await apiService.put(`/articles/${id}`, {
      wishList: wishListStatus,
    });

    return response.data;
  } catch (ex) {
    throw ex;
  }
};

export const updateShoppingCartStatus = async (
  id: string,
  shoppingCartStatus: boolean
) => {
  try {
    const response = await apiService.put(`/articles/${id}`, {
      shoppingCart: shoppingCartStatus,
    });

    return response.data;
  } catch (ex) {
    throw ex;
  }
};
