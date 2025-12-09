import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider, useTheme } from "../shared/styles/theme/ThemeProvider";
import { getNavTheme } from "../shared/styles/theme/navTheme";
import { RootStack } from "./navigation/RootStack";
import { StatusBar } from "react-native";

const AppContent = () => {
  const { colors } = useTheme();
 
  const navTheme = getNavTheme(colors);

  return (
    <NavigationContainer theme={navTheme}>
      <RootStack />
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <StatusBar barStyle="dark-content" />
      <AppContent />
    </ThemeProvider>
  );
}
