/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import React from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";
import {Control, Controller} from "react-hook-form";

export type IMap = {
  [x: string]: any;
};

type InputProp = {
  control: Control<any, object>;
  name: string;
  placeholder: string;
  rules: IMap;
};

const CustomInput = ({control, rules, name, placeholder}: InputProp) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <View
            style={[styles.container, {borderColor: error ? "red" : "#e8e8e8"}]}
          >
            <TextInput
              autoCorrect={false}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={placeholder}
              style={styles.input}
            />
          </View>
          {error && (
            <Text style={{color: "red", alignSelf: "stretch"}}>
              {error.message || "Error"}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  input: {},
});
export default CustomInput;
