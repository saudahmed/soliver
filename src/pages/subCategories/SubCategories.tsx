import { useEffect, useCallback, useState, useMemo, useRef } from "react";
import { View, Dimensions, FlatList, RefreshControl, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import BottomSheet from "@gorhom/bottom-sheet";

import { sortData } from "src/constants";
import { useFilterArticles } from "src/hooks/filter";
import Container from "src/components/container/Container";
import { RootStackParamList } from "src/types/rootStackParams";
import ButtonIcon from "src/components/button/icon/icon";
import CategoryCard from "src/components/categoryCard/CategoryCard";
import HorizontalDivider from "src/components/divider/Horizontal";
import ScrollPicker from "src/components/valuePicker/ScrollPicker";

import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";

import { fetchSubArticles, useDispatch, RootState } from "src/store";

export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  sortFilterContainer: {
    paddingVertical: 0,
    flexDirection: "row",
    marginVertical: 12,
  },
  dividerContainer: {
    marginBottom: 12,
  },
  buttonContainer: {
    flex: 1,
  },
  categoriesButtonContainer: {
    paddingRight: 8,
    height: "auto",
  },
  bottomSheetContainer: {
    ...theme.shadow,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: theme.palette.common.white,
  },
  contentContainer: {
    flex: 1,
    alignItems: "flex-start",
    paddingHorizontal: 16,
  },
  sheetView: {
    marginVertical: 10,
  },
  title: {
    ...theme.typography.body1,
    color: theme.palette.primary.main,
    textAlign: "center",
  },
}));

const SubCategories = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, "SubCategoriesScreen">) => {
  const styles = useStyles();
  const { category } = route.params;
  const [sorting, setSorting] = useState("ascending");
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["20%"], []);
  const { subArticles, isSubArticlesLoading } = useSelector(
    (state: RootState) => {
      return state.categories;
    }
  );

  const { filteredArticles } = useFilterArticles(
    subArticles,
    "filterSubArticles"
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

  const handleSheetChanges = useCallback((index: number) => {}, []);

  const sortArticles = useCallback(
    (order) => {
      return [...filteredArticles].sort((a, b) => {
        return order === "ascending" ? a.price - b.price : b.price - a.price;
      });
    },
    [filteredArticles]
  );

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
    <Container paddingHorizontal={paddingHorizontal}>
      <View style={styles.sortFilterContainer}>
        <View style={styles.buttonContainer}>
          <ButtonIcon
            text={
              sorting === "ascending" ? "Preis aufsteigend" : "Preis absteigend"
            }
            border={false}
            iconPosition="left"
            iconName="sort"
            onButtonPress={() => {
              bottomSheetRef.current.expand();
            }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonIcon
            text="Filter"
            border={false}
            iconPosition="left"
            iconName="filter-variant"
            onButtonPress={() => {
              navigation.navigate("FilterScreen", {
                articles: subArticles,
                reducer: "filterSubArticles",
              });
            }}
          />
        </View>
      </View>
      <View style={styles.dividerContainer}>
        <HorizontalDivider fullWidth />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={sortArticles(sorting)}
        renderItem={renderItem}
        numColumns={numColumns}
        contentContainerStyle={{ gap }}
        columnWrapperStyle={{ gap }}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        style={styles.bottomSheetContainer}
        enablePanDownToClose
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{"Sortieren"}</Text>
          <View style={styles.sheetView}>
            <ScrollPicker
              currentValue={sorting}
              list={sortData}
              onItemPress={(value: string) => {
                setSorting(value);
                bottomSheetRef.current.close();
              }}
            />
          </View>
        </View>
      </BottomSheet>
    </Container>
  );
};

export default SubCategories;
