import { useState } from "react";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Switch,
  Alert,
  BackHandler,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import { Avatar } from "react-native-paper";
import { TextInput, Button } from "react-native-paper";
import Tabs from "./Tabs";
import Homit from "./Homit";

export default function Admin1(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        style={styles.tinyLogo}
        source={require("../assets/images/icon.png")}
      />
      <Text style={styles.head}>Sign In as Admin !!</Text>
      {/* <Avatar.Image size={48} source={require("../assets/avatar.jpg")} /> */}

      <TextInput label="Unique ID" style={styles.user} />
      <TextInput label="Enter Password" />
      <View style={styles.butt}>
        <Button
          icon="login"
          mode="contained"
          onPress={() => props.navigation.navigate("Scan")}
        >
          LOGIN
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    tinyLogo:{
        marginBottom:30,
    
      },
  user: {
    marginBottom: 10,
    marginTop: 10,
  },
  head: {
    paddingBottom: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
  butt: {
    marginTop: 20,
  },
});
