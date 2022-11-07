/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {FontAwesome} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import * as React from "react";
import {Pressable} from "react-native";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";

//Screens
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import SplashScreenA from "../screens/splashScreenA/splashScreenA";
import LauchScreen from "../screens/launchScreen";
import SplashScreenB from "../screens/splashScreenB/splashScreenB";
import SplashScreenC from "../screens/splashScreenC/splashScreenC";
import Signscreen from "../screens/loginScreen/signscreen";
import SignUpScreen from "../screens/signup/signupscreen";
import ConfirmEmailScreen from "../screens/confirmEmail/confirmEmail";
import HomeScreen from "../screens/homeScreen/homescreen";

import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Launch"
        component={LauchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Welcome"
        component={SplashScreenA}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Schedule"
        component={SplashScreenB}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DropOff"
        component={SplashScreenC}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Signscreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Register"
        component={SignUpScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Confirmation"
        component={ConfirmEmailScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{title: "Oops!"}}
      />
      <Stack.Group screenOptions={{presentation: "modal"}}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({navigation}: RootTabScreenProps<"TabOne">) => ({
          title: "Tab One",
          tabBarIcon: ({color}: {color: string}) => (
            <TabBarIcon name="code" color={color} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({pressed}) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{marginRight: 15}}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: "Tab Two",
          tabBarIcon: ({color}: {color: string}) => (
            <TabBarIcon name="code" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{marginBottom: -3}} {...props} />;
}
