import * as React from "react";
import { StyleSheet } from "react-native";
import AppLayout from "../components/AppLayout";
import ChildImageList from "../components/ChildImageList";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function Presence({ navigation }: any) {
  const childSelected = (data: any) => {
    console.log(`child ${data.id} is ${data.selected}`);
  };

  return (
    <AppLayout navigation={navigation} title="עדכון נוכחות">
      <View style={styles.container}>
        <ChildImageList onSelect={childSelected} />
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
