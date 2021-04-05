import * as React from "react";
import { StyleSheet } from "react-native";
import Color from "../constants/Colors";

import { Text, View } from "./Themed";

const AppLayout = ({ children }: any) => {
  return <View style={styles.container}>{children}</View>;
};

export default AppLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.app.purple,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
});
