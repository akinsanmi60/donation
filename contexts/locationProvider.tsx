/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {createContext, useState} from "react";
import * as Location from "expo-location";

type ProviderProps = {
  children: React.ReactNode;
};

type ContextType = {
  errorMsg: string;
  location: {};
  getLocation: () => void;
};
const LocationContext = createContext<ContextType | null>(null);

export function LocationProvider({children}: ProviderProps) {
  const [errorMsg, setErrorMsg] = useState("");
  const [location, setLocation] = useState({});

  const getLocation = async () => {
    // asking for request to get location
    const {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Location access denied!");
      return;
    }
    const currentLocation = await Location.getCurrentPositionAsync({});
    setLocation(currentLocation);
  };

  return (
    <LocationContext.Provider value={{getLocation, location, errorMsg}}>
      {children}
    </LocationContext.Provider>
  );
}

export default LocationContext;
