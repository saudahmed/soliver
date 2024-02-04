import { useMemo, useState } from "react";
import { Text, View } from "react-native";
import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";
import { ICategoryCardProps } from "src/types";
import { Image } from "expo-image";

import ButtonCircle from "src/components/button/circle/Circle";
import ButtonColor from "src/components/button/color/Color";
import Tag from "src/components/tag/Tag";

/**
 * CategoryCard is a component to show image, name, price and available colors of the article.
 *
 * @param {object} [props.data] - The data for the card.
 * @param {number} [props.cardSize] - Size of the card to give width and heigh to it.
 * @param {Function} [props.onLikeButtonPress] - Function call to handle press of like button.
 * @param {Function} [props.onOrderButtonPress] - Function call to handle press of order button.
 * @param {Function} [props.onColorButtonPress] - Function call to handle press of color button.
 *
 * @returns {React.Element} A React element representing the ButtonIcon component.
 *
 * @example
 * // Basic usage
 * return <CategoryCard data={item} cardSize={itemSize} onLikeButtonPress={(id) => {}} onOrderButtonPress={(id) => {}} />
 */

export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  image: {
    flex: 1,
  },
  circleButtonContainer: {
    position: "absolute",
    top: 0,
    right: 8,
    zIndex: 1,
  },
  tagsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    zIndex: 1,
  },
  tag: {
    marginBottom: 10,
  },
  circleButton: {
    marginTop: 8,
  },
  textContainer: {
    marginTop: 8,
  },
  text: {
    ...theme.typography.body1,
  },
  colorContainer: {
    marginTop: 8,
    flexDirection: "row",
  },
  color: {
    marginRight: 4,
  },
}));

const CategoryCard = ({
  data,
  cardSize,
  onLikeButtonPress,
  onOrderButtonPress,
}: ICategoryCardProps) => {
  const styles = useStyles();
  const theme = Theme.useTheme();
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const colors = useMemo(
    () => data.colorVariants.map((item) => item.color),
    [data]
  );

  return (
    <View
      style={{
        height: cardSize * 2,
        width: cardSize,
        backgroundColor: theme.palette.common.white,
      }}
    >
      <View
        style={{
          height: cardSize * 1.43,
          width: cardSize,
          backgroundColor: theme.palette.secondary.light,
        }}
      >
        <Image
          style={styles.image}
          source={data.colorVariants[selectedColorIndex].pictures.front}
          contentFit="cover"
          transition={500}
        />
        <View style={styles.circleButtonContainer}>
          <View style={styles.circleButton}>
            <ButtonCircle
              testID="like-button"
              iconNameNormal="heart-outline"
              iconColor="red"
              iconNamePressed="heart"
              selected={false}
              onButtonPress={() => {
                onLikeButtonPress(data.id);
              }}
            />
          </View>
          <View style={styles.circleButton}>
            <ButtonCircle
              iconNameNormal="shopping-outline"
              iconColor="black"
              iconNamePressed="shopping"
              selected={false}
              onButtonPress={() => {
                onOrderButtonPress(data.id);
              }}
            />
          </View>
        </View>
        <View style={styles.tagsContainer}>
          {data.tags.new && (
            <View style={styles.tag}>
              <Tag backgroundColor="white" textColor="black" text="New" />
            </View>
          )}
          {data.tags.sustainable && (
            <View style={styles.tag}>
              <Tag
                backgroundColor="green"
                textColor="white"
                text="nachhaltig"
              />
            </View>
          )}
          {data.tags.premium && (
            <View style={styles.tag}>
              <Tag backgroundColor="white" textColor="black" text="premium" />
            </View>
          )}
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{data.detail}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{`${data.price} €`}</Text>
      </View>
      <View style={styles.colorContainer}>
        {colors.map((color, index) => (
          <View
            style={styles.color}
            key={`color_${index}`}
            testID={`color_${index}`}
          >
            <ButtonColor
              color={color.value}
              selected={index === selectedColorIndex}
              onButtonPress={() => {
                setSelectedColorIndex(index);
              }}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default CategoryCard;
