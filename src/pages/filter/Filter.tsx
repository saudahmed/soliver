import { useState, useMemo, useCallback, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Slider from "rn-range-slider";
import { useSelector } from "react-redux";

import Container from "src/components/container/Container";
import ButtonColor from "src/components/button/color/Color";

import Thumb from "src/components/slider/Thumb";
import Rail from "src/components/slider/Rail";
import RailSelected from "src/components/slider/RailSelected";

import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";
import {
  initializeSelectedColors,
  setSelectedColors,
  initializeSelectedBrands,
  setSelectedBrands,
  setMinPrice,
  setMaxPrice,
  initializeSelectedColorsSubArticles,
  setSelectedColorsSubArticles,
  initializeSelectedBrandsSubArticles,
  setSelectedBrandsSubArticles,
  setMinPriceSubArticles,
  setMaxPriceSubArticles,
  useDispatch,
  RootState,
} from "src/store";
import { useFilterArticles } from "src/hooks/filter";

import { RootStackParamList } from "src/types/rootStackParams";
import ButtonSelect from "src/components/button/select/Select";
import ButtonPrimary from "src/components/button/primary/Primary";
import SafeAreaContainer from "src/components/safeAreaContainer/SafeAreaContainer";

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
  primaryButtonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
}));

const Filter = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, "FilterScreen">) => {
  // Get styles and theme using the Theme provider
  const styles = useStyles();
  const theme = Theme.useTheme();
  const { articles, reducer } = route.params;
  const { selectedColors, selectedBrands, minimumPrice, maximumPrice } =
    useSelector((state: RootState) => {
      return state[reducer];
    });
  const dispatch = useDispatch();
  const { filteredArticles, uniqueColorGroups, uniqueBrandGroups } =
    useFilterArticles(articles, reducer);

  const prices = articles.map((item) => item.price);

  const initialMinPrice = Math.min(...prices);
  const initialMaxPrice = Math.max(...prices);

  useEffect(() => {
    if (minimumPrice === 0.0 && maximumPrice === 0.0) {
      if (reducer === "filterArticles") {
        dispatch(setMinPrice({ value: initialMinPrice }));
        dispatch(setMaxPrice({ value: initialMaxPrice }));
      } else {
        dispatch(setMinPriceSubArticles({ value: initialMinPrice }));
        dispatch(setMaxPriceSubArticles({ value: initialMaxPrice }));
      }
    }
  }, []);

  useEffect(() => {
    if (selectedColors.length === 0) {
      if (reducer === "filterArticles") {
        dispatch(
          initializeSelectedColors({
            value: false,
            numberOfColors: uniqueColorGroups.length,
          })
        );
      } else {
        dispatch(
          initializeSelectedColorsSubArticles({
            value: false,
            numberOfColors: uniqueColorGroups.length,
          })
        );
      }
    }

    if (selectedBrands.length === 0) {
      if (reducer === "filterArticles") {
        dispatch(
          initializeSelectedBrands({
            value: false,
            numberOfBrands: uniqueBrandGroups.length,
          })
        );
      } else {
        dispatch(
          initializeSelectedBrandsSubArticles({
            value: false,
            numberOfBrands: uniqueBrandGroups.length,
          })
        );
      }
    }
  }, [
    selectedColors.length,
    selectedBrands.length,
    uniqueColorGroups.length,
    uniqueBrandGroups.length,
  ]);

  const handleColorButtonPress = useCallback(
    (index: number) => {
      // Update the selected state of the button at the given index
      if (reducer === "filterArticles") {
        dispatch(
          setSelectedColors({
            index: index,
            value: !selectedColors[index],
          })
        );
      } else {
        dispatch(
          setSelectedColorsSubArticles({
            index: index,
            value: !selectedColors[index],
          })
        );
      }
    },
    [selectedColors]
  );

  const handleBrandButtonPress = useCallback(
    (index: number) => {
      // Update the selected state of the button at the given index
      if (reducer === "filterArticles") {
        dispatch(
          setSelectedBrands({
            index: index,
            value: !selectedBrands[index],
          })
        );
      } else {
        dispatch(
          setSelectedBrandsSubArticles({
            index: index,
            value: !selectedBrands[index],
          })
        );
      }
    },
    [selectedBrands]
  );

  const paddingHorizontal = 16;

  const handleValueChange = useCallback((lowValue, highValue) => {
    if (reducer === "filterArticles") {
      dispatch(setMinPrice({ value: lowValue.toFixed(2) }));
      dispatch(setMaxPrice({ value: highValue.toFixed(2) }));
    } else {
      dispatch(setMinPriceSubArticles({ value: lowValue.toFixed(2) }));
      dispatch(setMaxPriceSubArticles({ value: highValue.toFixed(2) }));
    }
  }, []);

  return (
    <SafeAreaContainer edges={["bottom"]}>
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
                    selected={selectedColors[index]}
                    onButtonPress={() => {
                      handleColorButtonPress(index);
                    }}
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
                    selected={selectedBrands[index]}
                    onButtonPress={() => handleBrandButtonPress(index)}
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
          >{`${minimumPrice} € bis ${maximumPrice} €`}</Text>
        </View>
        <Slider
          min={initialMinPrice}
          max={initialMaxPrice}
          low={minimumPrice}
          high={maximumPrice}
          step={1}
          disableRange={false}
          floatingLabel={false}
          renderThumb={(name: "high" | "low") => <Thumb name={name} />}
          renderRail={() => <Rail />}
          renderRailSelected={() => <RailSelected />}
          onValueChanged={handleValueChange}
        />
        <View style={styles.primaryButtonContainer}>
          <ButtonPrimary
            text={`${filteredArticles.length} Artikel anzeigen`}
            enabled={
              !(
                filteredArticles.length === 0 ||
                filteredArticles.length === articles.length
              )
            }
            onButtonPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </Container>
    </SafeAreaContainer>
  );
};

export default Filter;
