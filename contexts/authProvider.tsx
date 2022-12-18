/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, {createContext, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

type UserProp = {
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  state: string;
  lga: string;
  gender: string;
  _id: string;
  userIdNos: string;
};

type AuthUserType = {
  user: UserProp;
  token?: string;
};

type ContextType = {
  authUser: AuthUserType | null;
  setAuthUser: React.Dispatch<React.SetStateAction<AuthUserType | null>>;
  logout: () => void;
};

type ProviderProps = {
  children: React.ReactNode;
};
const AuthContext = createContext({} as ContextType);

export const pushToLocalStorage = async (token: string, user: UserProp) => {
  try {
    await AsyncStorage.setItem("token", token);
    await AsyncStorage.setItem("user", JSON.stringify(user));
  } catch (err) {
    console.log(err);
  }
};

const getUser = async () => {
  const userToken = await AsyncStorage.getItem("@storage_Key");
  const userGotten = await AsyncStorage.getItem("@storage_User");
  const userString = JSON.parse(userGotten!);

  return {userString, userToken};
};

const {userString} = await getUser();
const user = userString as UserProp;

export function AuthProvider({children}: ProviderProps) {
  const [authUser, setAuthUser] = useState<AuthUserType | null>({
    user,
  });
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const logout = () => {
    AsyncStorage.clear();
    setAuthUser(null);
    navigation.navigate("Login");
  };

  return (
    <AuthContext.Provider value={{authUser, setAuthUser, logout}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
