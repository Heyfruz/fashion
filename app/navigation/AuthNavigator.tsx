import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Onboarding, Welcome } from "../screens/Authentication";

type jsxElement = JSX.Element | null;
const Stack = createStackNavigator();

function AuthNavigator(): jsxElement {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Welcome" component={Welcome} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
