import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import {
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  Switch,
  Alert,
  BackHandler,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Login from "./Login";
import Preview from "./Preview";
import Home from "./Home";
import Homit from "./Homit";
import History from "./History";
import Me from "./Me";

const Tab = createMaterialBottomTabNavigator();

export default function Tabs(Props) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor="#808080"
      barStyle={{ backgroundColor: "#694fad" }}
    >
      <Tab.Screen
        name="Homit"
        component={Homit}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="history"  component={History}
      options={{
        tabBarLabel: "History",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="history" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen name="Me" component={Me}
      options={{
        tabBarLabel: "Me",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
      />

    </Tab.Navigator>
  );
}
