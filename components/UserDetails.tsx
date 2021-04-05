import * as React from "react";
import { StyleSheet, Image } from "react-native";
import Color from "../constants/Colors";

import { Text, View } from "./Themed";

const UserDetails = () => {
  const images = "https://i.pravatar.cc/300";
  return (
    <View style={styles.container}>
      <Image source={{ uri: images }} style={styles.user}></Image>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.app.purple,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  user: {
    width: 40,
    height: 40,
    borderRadius: 30,
    padding: 0,
    margin: 0,
  },
});
