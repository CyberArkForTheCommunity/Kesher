import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import AppHeader from "../components/AppHeader";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ReportSubCategory from "../screens/ReportSubCategory";
import ReportScreen from "../screens/ReportTab";
import TabTwoScreen from "../screens/TabTwoScreen";
import { BottomTabParamList, ReportParamList, TabTwoParamList } from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator initialRouteName="Report" tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="דיווח יומי"
        component={ReportNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>["name"]; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ReportStack = createStackNavigator<ReportParamList>();

function ReportNavigator() {
  return (
    <ReportStack.Navigator>
      <ReportStack.Screen
        name="ReportScreen"
        component={ReportScreen}
        options={{
          headerTitle: () => <AppHeader title="" />,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: Colors.app.purple,
          },
        }}
      />
      <ReportStack.Screen
        name="ReportSubCategory"
        component={ReportSubCategory}
        options={{ headerTitle: '' }}
      />
    </ReportStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{
          headerTitle: () => <AppHeader />,
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: Colors.app.purple,
          },
        }}
      />
    </TabTwoStack.Navigator>
  );
}
