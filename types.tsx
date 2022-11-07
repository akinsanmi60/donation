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
  Home: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
  Register: undefined;
  Confirmation: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  TabThree: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type CustomInputProp = {
  lastName: string;
  firstName: string;
  code: string;
  password: string;
  email: string;
  phoneNumber: string;
};

export type ConfirmEmailProp = Pick<CustomInputProp, "code">;
export type LoginProp = Pick<CustomInputProp, "email" | "password">;
export type RegisterProp = Pick<
  CustomInputProp,
  "email" | "password" | "firstName" | "lastName" | "phoneNumber"
>;
