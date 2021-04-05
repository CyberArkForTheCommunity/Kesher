import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Color from "../constants/Colors";

import { View, Text } from "./Themed";
import BurgerMenu from "./ui/BurgerMenu";
import UserDetails from "./UserDetails";

const AppHeader = ({ title }: any) => {
  return (
    <View style={styles.container}>
      <BurgerMenu />
      {title ? <Text style={styles.text}>{title}</Text> : <Image style={styles.logo} source={require("../assets/images/KesherHeaderLogo.png")} />}
      <UserDetails />
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    height: 45,
    backgroundColor: Color.app.purple,
    flexWrap: "wrap",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: -3,
  },
  text: {
    backgroundColor: Color.app.purple,
    color: "#fff",
    fontSize: 22,
  },
  logo: {
    width: 100,
    height: 40,
  },
});
