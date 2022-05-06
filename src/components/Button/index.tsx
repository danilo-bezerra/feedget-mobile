import { isLoading } from "expo-font";
import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";
import { theme } from "../../theme";

interface Props extends TouchableOpacityProps {
  isLoading: boolean;
}

import { styles } from "./styles";

export function Button({ isLoading, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.text_on_brand_color} />
      ) : (
        <Text style={styles.title}>Enviar Feedback</Text>
      )}
    </TouchableOpacity>
  );
}
