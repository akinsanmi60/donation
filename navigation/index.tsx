/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from "react";
import {Entypo, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Pressable} from "react-native";
// import Colors from "../constants/Colors";
// import useColorScheme from "../hooks/useColorScheme";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";

//Screens
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import SplashScreenA from "../screens/splashScreenA/splashScreenA";
import LauchScreen from "../screens/launchScreen";
import SplashScreenB from "../screens/splashScreenB/splashScreenB";
import SplashScreenC from "../screens/splashScreenC/splashScreenC";
import Signscreen from "../screens/loginScreen/signscreen";
import SignUpScreen from "../screens/signup/signupscreen";
import ConfirmEmailScreen from "../screens/confirmEmail/confirmEmail";
import HomeScreen from "../screens/homeScreen/homescreen";
import ForgotPasswordScreen from "../screens/forgotPassword/forgotPassword";
import NewPasswordScreen from "../screens/newPassword/newPassword";
import PickupScreen from "../screens/pickups/pickupscreen";
import CommunityScreen from "../screens/community/communityscreen";
import TellAFriendScreen from "../screens/tellFriend/tellFriendscreen";
import SelectMediumScreen from "../screens/selectMedium/selectMedium";
import FellowDonorScreen from "../screens/fellowDonor/fellowDonorscreen";
import MoreScreen from "../screens/more/morescreen";
import FavouriteScreen from "../screens/favouriteScreen/favourite";
import DonationScreen from "../screens/donationScreen/donation";
import RewardScreen from "../screens/rewardScreen/reward";
import FollowUpScreen from "../screens/followUpScreen/follow";

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
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
      }}
    >
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
        options={{headerShown: true, title: "Login"}}
      />
      <Stack.Screen
        name="Register"
        component={SignUpScreen}
        options={{headerShown: true, title: "Register"}}
      />
      <Stack.Screen
        name="Confirmation"
        component={ConfirmEmailScreen}
        options={{headerShown: true, title: "Confirmation"}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResetPassword"
        component={NewPasswordScreen}
        options={{headerShown: true, title: "Reset Password"}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{headerShown: true, title: "Forgot Password"}}
      />
      <Stack.Screen
        name="SelectMedium"
        component={SelectMediumScreen}
        options={{headerShown: true, title: "Select Medium"}}
      />
      <Stack.Screen
        name="FellowDonor"
        component={FellowDonorScreen}
        options={{headerShown: true, title: "Fellow Donor Near-By"}}
      />
      <Stack.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{headerShown: true, title: "Favourite"}}
      />
      <Stack.Screen
        name="Donation"
        component={DonationScreen}
        options={{headerShown: true, title: "My Donations"}}
      />
      <Stack.Screen
        name="Rewards"
        component={RewardScreen}
        options={{headerShown: true, title: "Reward"}}
      />
      <Stack.Screen
        name="FollowUp"
        component={FollowUpScreen}
        options={{headerShown: true, title: "Follow Up"}}
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
  // const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        // tabBarStyle: {position: "absolute"}, it enable to see screen beneath the tab
        tabBarActiveTintColor: "white",
        tabBarActiveBackgroundColor: "#009CDE",
        tabBarInactiveTintColor: "#009CDE",
        headerStyle: {
          shadowColor: "black",
        },
        headerTitleAlign: "center",
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color}: {color: string}) => (
            <TabBarIcon name="home" color={color} />
          ),
        }}
      />

      <BottomTab.Screen
        name="PickUp"
        component={PickupScreen}
        options={({navigation}: RootTabScreenProps<"PickUp">) => ({
          title: "Pick Up",

          tabBarIcon: ({color}) => (
            <TabBarIcon name="truck-fast" color={color} />
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={({pressed}) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <Ionicons
                name="arrow-back"
                size={24}
                color="black"
                style={{marginLeft: 15}}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TellFriend"
        component={TellAFriendScreen}
        options={({navigation}: RootTabScreenProps<"TellFriend">) => ({
          title: "Tell a friend ",

          tabBarIcon: ({color}: {color: string}) => (
            <Entypo name="sound" size={24} color={color} />
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={({pressed}) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <Ionicons
                name="arrow-back"
                size={24}
                color="black"
                style={{marginLeft: 15}}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Community"
        component={CommunityScreen}
        options={({navigation}: RootTabScreenProps<"Community">) => ({
          title: "Community",
          tabBarIcon: ({color}: {color: string}) => (
            <Ionicons name="ios-people-sharp" size={24} color={color} />
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={({pressed}) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <Ionicons
                name="arrow-back"
                size={24}
                color="black"
                style={{marginLeft: 15}}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="More"
        component={MoreScreen}
        options={{
          title: "More",
          tabBarIcon: ({color}: {color: string}) => (
            <TabBarIcon name="dots-vertical" color={color} />
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
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  color: string;
}) {
  return (
    <MaterialCommunityIcons size={30} style={{marginBottom: -3}} {...props} />
  );
}
