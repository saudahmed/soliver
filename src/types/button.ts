import { TouchableOpacityProps } from "react-native";
import React from "react";

export interface IButton extends TouchableOpacityProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}
