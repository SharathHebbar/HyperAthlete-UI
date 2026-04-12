import { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ScreenWrapper from "./src/components/ScreenWrapper";
import {
  useFonts,
  SpaceGrotesk_400Regular,
  SpaceGrotesk_500Medium,
  SpaceGrotesk_600SemiBold,
  SpaceGrotesk_700Bold,
} from "@expo-google-fonts/space-grotesk";
import {
  Tomorrow_400Regular,
  Tomorrow_500Medium,
  Tomorrow_600SemiBold,
  Tomorrow_700Bold,
} from "@expo-google-fonts/tomorrow";
import LoginScreen from "./src/screens/components/LoginScreen";
import HomeScreen from "./src/screens/components/HomeScreen";
import SignUpScreen from "./src/screens/components/SignUpScreen";
import FeedScreen from "./src/screens/components/FeedScreen";
import WelcomeScreen from "./src/screens/components/WelcomeScreen";

const Stack = createStackNavigator();

function WrappedScreen({ children }) {
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(opacity, { // TODO: added animation for every page load but not working on home screen
      toValue: 1,
      duration: 350,
      useNativeDriver: true,
    }).start();
  }, [opacity]);

  return (
    <ScreenWrapper>
      <Animated.View style={{ flex: 1, opacity }}>{children}</Animated.View>
    </ScreenWrapper>
  );
}

const linking = {
  prefixes: ["http://localhost:8081"],
  config: {
    screens: {
      Home: "home",
      Login: "login",
      Signup: "signup",
      Feed: "feed",
      Welcome: "welcome",
    },
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({
    // Space Grotesk
    "SpaceGrotesk-Regular": SpaceGrotesk_400Regular,
    "SpaceGrotesk-Medium": SpaceGrotesk_500Medium,
    "SpaceGrotesk-SemiBold": SpaceGrotesk_600SemiBold,
    "SpaceGrotesk-Bold": SpaceGrotesk_700Bold,

    // Tomorrow
    "Tomorrow-Regular": Tomorrow_400Regular,
    "Tomorrow-Medium": Tomorrow_500Medium,
    "Tomorrow-SemiBold": Tomorrow_600SemiBold,
    "Tomorrow-Bold": Tomorrow_700Bold,
  });

  if (!fontsLoaded) return null; // avoid flicker

  return (
    <NavigationContainer
      linking={linking}
      documentTitle={{
        formatter: (options, route) => "HyperAthlete",
      }}
    >
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home">
          {(props) => (
            <WrappedScreen>
              <HomeScreen {...props} />
            </WrappedScreen>
          )}
        </Stack.Screen>

        <Stack.Screen name="Welcome">
          {(props) => (
            <WrappedScreen>
              <WelcomeScreen {...props} />
            </WrappedScreen>
          )}
        </Stack.Screen>

        <Stack.Screen name="Login">
          {(props) => (
            <WrappedScreen>
              <LoginScreen {...props} />
            </WrappedScreen>
          )}
        </Stack.Screen>

        <Stack.Screen name="Signup">
          {(props) => (
            <WrappedScreen>
              <SignUpScreen {...props} />
            </WrappedScreen>
          )}
        </Stack.Screen>
        <Stack.Screen name="Feed">
          {(props) => (
            <WrappedScreen>
              <FeedScreen {...props} />
            </WrappedScreen>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
