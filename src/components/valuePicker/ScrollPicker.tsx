import React from "react";
import { FlatList, View, Text, Pressable } from "react-native";
import { ITheme } from "src/assets/themes";
import { Theme } from "src/hooks";
import { IScrollPickerProps } from "src/types";

export const useStyles = Theme.makeStyles((theme: ITheme) => ({
  row: {
    height: 40,
    paddingTop: 6,
    paddingBottom: 8,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  rowText: {
    ...theme.typography.body1,
  },
}));

const ScrollPicker = ({
  list,
  onItemPress,
  currentValue,
}: IScrollPickerProps) => {
  const theme = Theme.useTheme();
  const styles = useStyles();

  const pickedIndex = list.findIndex(
    (item: { value: string; label: string }) => item.value === currentValue
  );

  const FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.8,
          width: "100%",
          backgroundColor: theme.palette.secondary.main,
        }}
      />
    );
  };

  const Row = ({ value, label, index }: any) => {
    return (
      <Pressable style={styles.row} onPress={() => onItemPress(value)}>
        {pickedIndex === index ? (
          <Text
            style={{
              ...styles.rowText,
              color: theme.palette.primary.main,
            }}
          >{`${label}`}</Text>
        ) : (
          <Text
            style={{ ...styles.rowText, color: theme.palette.secondary.main }}
          >{`${label}`}</Text>
        )}
      </Pressable>
    );
  };

  return (
    <FlatList
      data={list}
      ItemSeparatorComponent={FlatListItemSeparator}
      renderItem={({ item, index }) => (
        <Row value={item.value} label={item.label} index={index} />
      )}
      keyExtractor={(item) => item.label}
    />
  );
};

export default ScrollPicker;
