import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Overview } from "./screens/Overview/Overview.js";
import { AddGadoScreen } from "./screens/AddGadoScreen/AddGadoScreen.js";
import { Details } from "./screens/Details/Details.js";
import { Image } from "react-native";
import cowIcon from "./assets/icons/cow-icon.png";
import remedyIcon from "./assets/icons/remedy-icon.png";
import gateIcon from "./assets/icons/gate-icon.png";
import handsIcon from "./assets/icons/hands-icon.png";
import placeIcon from "./assets/icons/place-icon.png";
import { StatusBar } from "expo-status-bar";
import { Edit } from "./screens/Edit/Edit.js";
import { Remedy } from "./screens/Remedy/Remedy.js";
import { RemedyDetails } from "./screens/RemedyDetails/RemedyDetails.js";
import Tela1 from "./screens/Tela1.js";
import Tela2 from "./screens/Tela2.js";
import Tela3 from "./screens/Tela3.js";

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
          tabBarIcon: ({ size, focused }) => (
            <Image
              source={cowIcon}
              style={{
                width: size + 5,
                height: size + 5,
                tintColor: focused ? "green" : undefined,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Remedy"
        component={Remedy}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <Image
              source={remedyIcon}
              style={{
                width: size + 5,
                height: size + 5,
                tintColor: focused ? "green" : undefined,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Gate"
        component={Tela1}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <Image
              source={gateIcon}
              style={{
                width: size + 5,
                height: size + 5,
                tintColor: focused ? "green" : undefined,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Hands"
        component={Tela3}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <Image
              source={handsIcon}
              style={{
                width: size + 5,
                height: size + 5,
                tintColor: focused ? "green" : undefined,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Place"
        component={Overview}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, focused }) => (
            <Image
              source={placeIcon}
              style={{
                width: size + 5,
                height: size + 5,
                tintColor: focused ? "green" : undefined,
              }}
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
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RemedyDetails"
          component={RemedyDetails}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Edit"
          component={Edit}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Tela1"
          component={Tela1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tela2"
          component={Tela2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tela3"
          component={Tela3}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
