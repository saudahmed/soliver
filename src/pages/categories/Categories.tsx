import * as React from "react";
import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import Container from "src/components/container/Container";

import { RootStackParamList } from "src/types/rootStackParams";
import ButtonIcon from "src/components/button/icon/icon";

import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";

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
  const theme = Theme.useTheme();

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
    </Container>
  );
};

export default Categories;
