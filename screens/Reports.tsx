import * as React from "react";
import { StyleSheet } from "react-native";
import AppLayout from "../components/AppLayout";
import ChildImageList from "../components/ChildImageList";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function Reports({ navigation }: any) {
  return (
    <AppLayout navigation={navigation} title="דיווח יומי">
      <View style={styles.container}>
        <Text style={styles.title}>דיווח יומי</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <ChildImageList />
      </View>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    paddingTop: 5,
    // fontWeight: "bold",
    fontFamily: "assistant-bold",
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: "80%",
  },
});
