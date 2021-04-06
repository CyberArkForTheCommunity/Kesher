import * as React from "react";
import { StyleSheet, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import AppLayout from "../components/AppLayout";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function LoginScreen({ onPress = (f: any) => f }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../assets/images/splash.png")} style={styles.image}>
        <View style={styles.footer}>
          <TextInput placeholder="הכנס תעודת זהות" style={styles.input} />
          <TouchableOpacity onPress={onPress} style={styles.btn}>
            <Text style={{ fontSize: 20, color: "#fff" }}>אישור</Text>
          </TouchableOpacity>
        </View>
        {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    fontSize: 20,
    backgroundColor: "#fff",
    borderRadius: 20,
    width: 250,
    padding: 8,
    marginBottom: 4,
    // fontWeight: "bold",
    fontFamily: "assistant",
  },
  btn: {
    backgroundColor: Colors.app.purple,
    marginVertical: 30,
    marginTop: 4,
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "flex-end",
  },
});
