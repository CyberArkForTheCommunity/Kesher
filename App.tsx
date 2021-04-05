import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import { Text } from "./components/Themed";
import LoginScreen from "./screens/LoginScreen";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [isLogin, setIsLogin] = React.useState(false);

  if (!isLoadingComplete) {
    return null;
  } else {
    return isLogin ? (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    ) : (
      <SafeAreaProvider>
        <LoginScreen onPress={() => setIsLogin(true)} />
      </SafeAreaProvider>
    );
  }
}
