import * as React from "react";
import { StyleSheet } from "react-native";
import AppLayout from "../components/AppLayout";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function Corona({ navigation }: any) {
  return (
    <AppLayout navigation={navigation}>
      <View style={styles.container}>
        <Text style={styles.title}>הצהרת קורונה</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/Home.tsx" />
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
    // fontWeight: "bold",
    fontFamily: "assistant-bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
