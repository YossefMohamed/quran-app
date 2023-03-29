import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import styled, { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { NavigationContainer } from "@react-navigation/native";

import { colors } from "./src/infrastructure/theme/colors";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeArea } from "./src/components/safeArea";
import LoginScreen from "./src/screens/Login";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeArea>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen">
              <Stack.Screen
                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeArea>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
const MainContainer = styled.View`
  flex: 1;
  background-color: ${colors.brand.dark};
`;
