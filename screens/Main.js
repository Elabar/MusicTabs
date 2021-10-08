import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListScreen from "./List";
import TabScreen from "./Tab";

const Stack = createNativeStackNavigator();
// °

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={ListScreen} />
        <Stack.Screen
          name="TabScreen"
          component={TabScreen}
          options={({ route }) => ({
            title: route.params.title,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
