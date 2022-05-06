import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.brand,

    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    right: 16,
    bottom: 16,
  },
});
