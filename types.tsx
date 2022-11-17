/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {BottomTabScreenProps} from "@react-navigation/bottom-tabs";

declare global {
  namespace ReactNavigation {
    type RootParamLists = RootStackParamList;
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  Launch: undefined;
  Welcome: undefined;
  Schedule: undefined;
  DropOff: undefined;
  Login: undefined;
  HomeScreen: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
  Register: undefined;
  Location: undefined;
  Confirmation: undefined;
  SelectMedium: undefined;
  FellowDonor: undefined;
  Favourite: undefined;
  Donation: undefined;
  Rewards: undefined;
  ClaimReward: undefined;
  RewardClaimed: undefined;
  FollowUp: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Home: undefined;
  PickUp: undefined;
  TellFriend: undefined;
  Community: undefined;
  More: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type InputProps = {
  lastName: string;
  firstName: string;
  code: string;
  password: string;
  email: string;
  phoneNumber: string;
  newPassword: string;
  confirmPassword: string;
};

export type ConfirmEmailProp = Pick<InputProps, "code">;
export type LoginProp = Pick<InputProps, "email" | "password">;
export type ForgetProp = Pick<InputProps, "email">;
export type ResetProp = Pick<
  InputProps,
  "code" | "newPassword" | "confirmPassword"
>;
export type RegisterProp = Pick<
  InputProps,
  "email" | "password" | "firstName" | "lastName" | "phoneNumber"
>;
