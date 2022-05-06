import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 40,
    height: 40,
    borderRadius: 4,
    backgroundColor: theme.colors.surface_secondary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  removeIcon: {
    position: "absolute",
    right: 0,
    bottom: 0,
  },
  image: {
    width: 40,
    height: 40,
  },
});
