import { useEffect, useCallback } from "react";
import { View, ScrollView, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import Container from "src/components/container/Container";
import { RootStackParamList } from "src/types/rootStackParams";
import ButtonIcon from "src/components/button/icon/icon";

import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";
import ButtonCircle from "src/components/button/circle/Circle";
import ButtonColor from "src/components/button/color/Color";
import Tag from "src/components/tag/Tag";

import { fetchAllArticles, useDispatch, RootState } from "src/store";

export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  sortFilterContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
}));

const Categories = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "CategoriesScreen">) => {
  const styles = useStyles();
  const { articles, isArticlesLoading } = useSelector((state: RootState) => {
    return state.categories;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllArticles());
  }, []);

  return (
    <Container>
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
      <ScrollView>
        <Text> {JSON.stringify(articles)}</Text>
      </ScrollView>
      {/* <View style={styles.buttonContainer}>
        <ButtonCircle
          iconNameNormal="heart-outline"
          iconColor="red"
          iconNamePressed="heart"
          selected={false}
          onButtonPress={() => {}}
        />
        <ButtonCircle
          iconNameNormal="heart-outline"
          iconColor="red"
          iconNamePressed="heart"
          selected
          onButtonPress={() => {}}
        />
        <ButtonCircle
          iconNameNormal="shopping-outline"
          iconColor="black"
          iconNamePressed="shopping"
          selected={false}
          onButtonPress={() => {}}
        />
        <ButtonCircle
          iconNameNormal="shopping-outline"
          iconColor="black"
          iconNamePressed="shopping"
          selected
          onButtonPress={() => {}}
        />
        <ButtonColor color="red" selected onButtonPress={() => {}} />
        <ButtonColor color="red" selected={false} onButtonPress={() => {}} />
        <ButtonColor color="teal" selected onButtonPress={() => {}} />
        <ButtonColor color="teal" selected={false} onButtonPress={() => {}} />
      </View>
      <Tag backgroundColor="green" textColor="white" text="nachhaltig" />
      <Tag backgroundColor="white" textColor="black" text="New" /> */}
    </Container>
  );
};

export default Categories;
