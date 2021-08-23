import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Login, Onboarding, Welcome } from "../screens/Authentication";

import { Routes } from "./Navigation";

type jsxElement = JSX.Element | null;
const Stack = createStackNavigator<Routes>();

function AuthNavigator(): jsxElement {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
