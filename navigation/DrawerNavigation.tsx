import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { useWindowDimensions, Image, StyleSheet, TouchableOpacity, Linking } from "react-native";
import AppHeader from "../components/AppHeader";
import { View, Text } from "../components/Themed";

import Colors from "../constants/Colors";
import useUserRole from "../hooks/useUserRoles";
import Board from "../screens/Board";
import Corona from "../screens/Corona";
import Home from "../screens/Home";
import Reports from "../screens/Reports";
import Setting from "../screens/Setting";
import { TabTwoParamList } from "../types";

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  const dimensions = useWindowDimensions();
  const user = useUserRole();

  const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      // drawerType={isLargeScreen ? "permanent" : "back"}
      drawerStyle={styles.drawer}
      overlayColor="transparent"
      drawerContentOptions={{
        activeTintColor: "#fff",
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerIcon: () => <Image style={styles.icon} source={require("../assets/images/home.png")} />,
          drawerLabel: () => <DrawerMenu title="דף הבית" />,
        }}
        component={Home}
      />
      <Drawer.Screen
        name="Corona"
        options={{
          drawerIcon: () => <Image style={styles.icon} source={require("../assets/images/corona.png")} />,
          drawerLabel: () => <DrawerMenu title="הצהרת קורונה" />,
        }}
        component={Corona}
      />
      {user?.role === "admin" && (
        <>
          <Drawer.Screen
            name="Report"
            options={{
              drawerIcon: () => <Image style={styles.icon} source={require("../assets/images/report.png")} />,
              drawerLabel: () => <DrawerMenu title="דיווח יומי" />,
            }}
            component={Reports}
          />
          <Drawer.Screen
            name="Messages"
            options={{
              drawerIcon: () => <Image style={styles.icon} source={require("../assets/images/bord.png")} />,
              drawerLabel: () => <DrawerMenu title="לוח מודעות" />,
            }}
            component={Board}
          />
          <Drawer.Screen
            name="Setting"
            options={{
              drawerIcon: () => <Image style={styles.icon} source={require("../assets/images/setting.png")} />,
              drawerLabel: () => <DrawerMenu title="הגדרות" />,
            }}
            component={Setting}
          />
        </>
      )}
      <Drawer.Screen
        name="Site"
        options={{
          drawerIcon: () => <Image style={styles.icon} source={require("../assets/images/site.png")} />,
          drawerLabel: () => <DrawerMenu link="https://google.com" onPress title="לאתר קלווין" />,
        }}
        component={Setting}
      />
      {/* <Drawer.Screen name="TabTwo" component={TabTwoNavigator} /> */}
    </Drawer.Navigator>
  );
};

const DrawerMenu = ({ title, link }: any) => {
  if (link) {
    return (
      <TouchableOpacity
        style={styles.nav}
        onPress={() => {
          Linking.openURL(link);
        }}
      >
        {/* <Image style={{ width: 24, height: 24 }} source={require(`${icon}`)} /> */}
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.nav}>
      {/* <Image style={{ width: 24, height: 24 }} source={require(`${icon}`)} /> */}
      <Text>{title}</Text>
    </View>
  );
};

export default AppDrawer;

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    borderBottomEndRadius: 30,
    borderTopEndRadius: 30,
    marginTop: 110,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 15,

    // backgroundColor: Colors.app.purple,
    // alignItems: "center",
    // justifyContent: "center",
    // padding: 20,
  },
  nav: {
    fontFamily: "assistant",
    flexDirection: "row-reverse",
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});
