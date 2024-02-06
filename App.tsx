import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootStackNavigator from "src/navigators/rootStackNavigator/RootStackNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Container from "src/components/container/Container";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "src/store";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Lato-Regular": require("./src/assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("./src/assets/fonts/Lato-Bold.ttf"),
    "Lato-Italic": require("./src/assets/fonts/Lato-Italic.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Container onLayout={onLayoutRootView}>
            <NavigationContainer>
              <RootStackNavigator />
            </NavigationContainer>
          </Container>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
