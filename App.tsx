import { useState } from "react";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
  Switch,
  Alert,
  BackHandler,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Login from "./components/Login";
import Preview from "./components/Preview";
import Tabs from "./components/Tabs";
import Homit from "./components/Homit";
import History from "./components/History";
import Signup from "./components/Signup";
import Signit from "./components/Signit";
import Admin1 from "./components/Admin1";
import Scan from "./components/Scan";
import Admin2 from "./components/Admin2";
import Admin3 from "./components/Admin3";
import Admin4 from "./components/Admin4";

const Stack = createNativeStackNavigator();

export default function App() {
  const [name, setName] = useState("gagan");
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Preview" component={Preview} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Admin1" component={Admin1} />
        <Stack.Screen name="Admin2" component={Admin2} />
        <Stack.Screen name="Admin3" component={Admin3} />
        <Stack.Screen name="Admin4" component={Admin4} />



        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="Signit" component={Signit} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Homit" component={Homit} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
