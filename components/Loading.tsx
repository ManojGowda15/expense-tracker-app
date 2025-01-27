import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { colors } from "@/constants/theme";

const Loading = ({
  size = "small",
  color = colors.black,
}: ActivityIndicatorProps) => {
  return <ActivityIndicator size={size} color={color} />;
};

export default Loading;
