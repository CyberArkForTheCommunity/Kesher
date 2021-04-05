import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Color from "../../constants/Colors";

import { View } from "../Themed";

const BurgerMenu = ({ onPress = (f: any) => f }: any) => {
  return (
    <View style={{ backgroundColor: Color.app.purple }}>
      <TouchableOpacity onPress={onPress}>
        <Image style={styles.img} source={require("../../assets/images/burgerMenu.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default BurgerMenu;

const styles = StyleSheet.create({
  img: {
    width: 34,
    height: 34,
    backgroundColor: Color.app.purple,
  },
});
