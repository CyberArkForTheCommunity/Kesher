import * as React from "react";
import { StyleSheet } from "react-native";
import Color from "../constants/Colors";
import AppHeader from "./AppHeader";

import { Text, View } from "./Themed";

const AppLayout = ({ navigation, title = "", children }: any) => {
  return (
    <View style={styles.container}>
      <AppHeader title={title} navigation={navigation} />
      {children}
    </View>
  );
};

export default AppLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.app.purple,
    paddingTop: 60,
    width: "100%",
  },
});
