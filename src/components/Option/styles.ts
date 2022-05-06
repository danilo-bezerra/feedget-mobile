import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    height: 112,
    width: 104,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: theme.colors.surface_secondary,
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 14,
    marginTop: 8,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  },
});
