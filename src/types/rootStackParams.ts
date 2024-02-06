import { IArticle } from ".";

export type RootStackParamList = {
  BottomTabScreen: undefined;
  FilterScreen: { articles: IArticle[] };

  HomeScreen: undefined;

  CategoriesScreen: undefined;
  SubCategoriesScreen: { category: string };

  WishListScreen: undefined;
  ShoppingCartScreen: undefined;
  ProfileScreen: undefined;

  HomeTab: undefined;
  CategoriesTab: undefined;
  WishListTab: undefined;
  ShoppingCartTab: undefined;
  ProfileTab: undefined;
};
