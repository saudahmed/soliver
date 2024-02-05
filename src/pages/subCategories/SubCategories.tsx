import { useEffect, useCallback, useState, useMemo } from "react";
import { View, Dimensions, FlatList, RefreshControl } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import Container from "src/components/container/Container";
import { RootStackParamList } from "src/types/rootStackParams";
import ButtonIcon from "src/components/button/icon/icon";
import CategoryCard from "src/components/categoryCard/CategoryCard";

import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";

import { fetchSubArticles, useDispatch, RootState } from "src/store";

export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  sortFilterContainer: {
    paddingVertical: 0,
    flexDirection: "row",
    marginVertical: 12,
  },
  buttonContainer: {
    flex: 1,
  },
  categoriesButtonContainer: {
    paddingRight: 8,
    height: "auto",
  },
}));

const SubCategories = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, "SubCategoriesScreen">) => {
  const styles = useStyles();
  const { category } = route.params;
  const { subArticles, isSubArticlesLoading } = useSelector(
    (state: RootState) => {
      return state.categories;
    }
  );

  const dispatch = useDispatch();

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch(fetchSubArticles(category));
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    dispatch(fetchSubArticles(category)).then(() => {
      setRefreshing(false);
    });
  }, []);

  const paddingHorizontal = 16;
  const numColumns = 2;
  const gap = 12;
  const screenWidth = useMemo(
    () => Dimensions.get("window").width - paddingHorizontal * 2,
    []
  );

  const availableSpace = screenWidth - (numColumns - 1) * gap;
  const itemSize = availableSpace / numColumns;

  const renderItem = useCallback(({ item, index }) => {
    return (
      <CategoryCard
        data={item}
        cardSize={itemSize}
        onLikeButtonPress={(id) => {}}
        onOrderButtonPress={(id) => {}}
      />
    );
  }, []);

  return (
    <Container paddingHorizontal={16}>
      <View style={styles.sortFilterContainer}>
        <View style={styles.buttonContainer}>
          <ButtonIcon
            text="Beliebteste"
            border={false}
            iconPosition="left"
            iconName="sort"
            onButtonPress={() => {}}
          />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonIcon
            text="Filter"
            border={false}
            iconPosition="left"
            iconName="filter-variant"
            onButtonPress={() => {}}
          />
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={subArticles}
        renderItem={renderItem}
        numColumns={numColumns}
        contentContainerStyle={{ gap }}
        columnWrapperStyle={{ gap }}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </Container>
  );
};

export default SubCategories;
