import { useState, useMemo, useCallback } from "react";
import { View, Text, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Slider from "rn-range-slider";

import Container from "src/components/container/Container";
import ButtonColor from "src/components/button/color/Color";

import Thumb from "src/components/slider/Thumb";
import Rail from "src/components/slider/Rail";
import RailSelected from "src/components/slider/RailSelected";

import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";

import { RootStackParamList } from "src/types/rootStackParams";
import ButtonSelect from "src/components/button/select/Select";

// Define styles using the Theme provider
export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  headingContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  headingText: {
    marginTop: 28,
    marginBottom: 14,
    ...theme.typography.headlineM,
    fontWeight: "normal",
    color: theme.palette.primary.main,
  },
  colorContainer: {
    flexDirection: "row",
  },
  color: {
    alignItems: "center",
    marginRight: theme.spacing(2),
  },
  colorText: {
    marginTop: 8,
    ...theme.typography.body3,
  },
  button: {
    alignItems: "center",
    marginRight: theme.spacing(0.7),
  },
  priceText: {
    marginTop: 28,
    marginBottom: 14,
    ...theme.typography.body2,
    alignSelf: "flex-end",
  },
  priceContainer: {
    flexDirection: "row",
    alignitems: "center",
    justifyContent: "space-between",
  },
}));

const Filter = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, "FilterScreen">) => {
  // Get styles and theme using the Theme provider
  const styles = useStyles();
  const theme = Theme.useTheme();
  const { articles } = route.params;

  const prices = articles.map((item) => item.price);

  const initialMinPrice = Math.min(...prices);
  const initialMaxPrice = Math.max(...prices);

  const [minPrice, setMinPrice] = useState(initialMinPrice);
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice);

  const uniqueColorGroups = useMemo(() => {
    const groups = Array<string>();
    articles.forEach((item) => {
      item.colorVariants.forEach((colorVariant) => {
        const colorGroup = colorVariant.color.group;
        if (!groups.includes(colorGroup)) {
          groups.push(colorGroup);
        }
      });
    });
    return groups;
  }, [articles]);

  const uniqueBrandGroups = useMemo(() => {
    const groups = Array<string>();
    articles.forEach((item) => {
      if (!groups.includes(item.brand)) {
        groups.push(item.brand);
      }
    });
    return groups;
  }, [articles]);

  const paddingHorizontal = 16;

  const handleValueChange = useCallback((lowValue, highValue) => {
    setMinPrice(lowValue.toFixed(2));
    setMaxPrice(highValue.toFixed(2));
  }, []);

  return (
    <Container paddingHorizontal={paddingHorizontal}>
      <View style={styles.headingContainer}></View>
      <Text style={styles.headingText}>{"FARBE"}</Text>
      <View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <View style={styles.colorContainer}>
            {uniqueColorGroups.map((color, index) => (
              <View
                style={styles.color}
                key={`color_${index}`}
                testID={`color_${index}`}
              >
                <ButtonColor
                  color={color.toLowerCase()}
                  buttonSize={theme.spacing(3.5)}
                  selected={index === 0}
                  onButtonPress={() => {}}
                />
                <Text style={styles.colorText}>{color.toLowerCase()}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <Text style={styles.headingText}>{"MARKE"}</Text>
      <View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
          <View style={styles.colorContainer}>
            {uniqueBrandGroups.map((brand, index) => (
              <View
                style={styles.button}
                key={`color_${index}`}
                testID={`color_${index}`}
              >
                <ButtonSelect
                  text={brand}
                  selected={false}
                  onButtonPress={() => {}}
                />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.headingText}>{"PREIS"}</Text>
        <Text
          style={styles.priceText}
        >{`${minPrice} € bis ${maxPrice} €`}</Text>
      </View>
      <Slider
        min={initialMinPrice}
        max={initialMaxPrice}
        step={1}
        disableRange={false}
        floatingLabel={false}
        renderThumb={(name: "high" | "low") => <Thumb name={name} />}
        renderRail={() => <Rail />}
        renderRailSelected={() => <RailSelected />}
        onValueChanged={handleValueChange}
      />
    </Container>
  );
};

export default Filter;
