/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {createContext, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../types";

type AuthUserType = {
  user: {
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
    accountType: string;
  };
  token?: string;
  transaction?: {
    reference: string;
    status: string;
    trans: string;
    message: string;
  };
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

export const pushToLocalStorage = (token: string, user?: any) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

const getUser = () => {
  // const userToken = localStorage.getItem("token");
  const userString = localStorage.getItem("user") as string;

  return {userString};
};

const {userString} = getUser();
const user = JSON.parse(userString);

export function AuthProvider({children}: ProviderProps) {
  const [authUser, setAuthUser] = useState<AuthUserType | null>({
    user,
  });
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const logout = () => {
    localStorage.clear();
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
