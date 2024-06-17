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
import Homit from "./Homit"

export default function Signit(props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.head}>Create Your Account !!</Text>
      {/* <Avatar.Image size={48} source={require("../assets/avatar.jpg")} /> */}

      <TextInput
        label="Enter Aadhar Card No."
        style={styles.user}
      />
      <TextInput
        label="Enter username"
        style={styles.user}
      />
      <TextInput
        label="Enter Password"
        style={styles.user}
      />
      <TextInput
        label="Confirm Password"
      />
      <View style={styles.butt}>
        

        <Button icon="login" mode="contained"
          onPress={() => props.navigation.navigate("Login")}
        
        >
    SIGNUP
  </Button>


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  user:{
    marginBottom:10,
    marginTop:10,
  },
  head: {
    paddingBottom:20,
    fontSize:25,
    fontWeight:'bold',
  },
  butt: {
    marginTop: 20,
  },

});