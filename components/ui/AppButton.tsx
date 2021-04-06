import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";
import { Text, View } from "../../components/Themed";

const AppButton = ({ onPress, title, size = 20, style = null }: any) => {
  const sizeCustom: any = { fontSize: size };
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, style]}>
      <Text style={{ fontSize: size, color: "#fff" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.app.purple,
    marginVertical: 30,
    marginTop: 4,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
  },
});
