import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Overview } from "./screens/Overview/Overview.js";
import { AddGadoScreen } from "./screens/AddGadoScreen/AddGadoScreen.js";
import { Image } from "react-native";
import cowIcon from "./assets/icons/cow-icon.png";
import remedyIcon from "./assets/icons/remedy-icon.png";
import gateIcon from "./assets/icons/gate-icon.png";
import handsIcon from "./assets/icons/hands-icon.png";
import placeIcon from "./assets/icons/place-icon.png";
import { StatusBar } from "expo-status-bar";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      initialRouteName="Overview"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Over"
        component={Overview}
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <Image
              source={cowIcon}
              style={{
                width: size + 5,
                height: size + 5,
                tintColor: "green",
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Remedy"
        component={Overview}
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <Image
              source={remedyIcon}
              style={{ width: size + 5, height: size + 5 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Gate"
        component={Overview}
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <Image
              source={gateIcon}
              style={{ width: size + 5, height: size + 5 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Hands"
        component={Overview}
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <Image
              source={handsIcon}
              style={{ width: size + 5, height: size + 5 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Place"
        component={Overview}
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <Image
              source={placeIcon}
              style={{ width: size + 5, height: size + 5 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#999999" />
      <Stack.Navigator>
        <Stack.Screen
          name="Overview"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddGado"
          component={AddGadoScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
