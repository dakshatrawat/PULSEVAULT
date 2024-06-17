import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
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
import { TextInput, Text } from "react-native-paper";
import { Button } from "react-native-paper";

export default function Signup(props) {
  return (
    <View style={styles.box}>
      <Image
        style={styles.tinyLogo}
        source={require("../assets/images/icon.png")}
      />

      <Text style={styles.header} variant="displaySmall">
        PULSEVAULT
      </Text>

      <Text style={styles.subheader} variant="titleMedium">
        Create your Pulsevault account
      </Text>

      <Text style={styles.texit} variant="bodySmall">
        Pulsevault is a powerful electronic health record system that will keep
        your data secure and available.
      </Text>

      <View style={styles.butt}>
        <Button
          icon="login"
          mode="contained"
          onPress={() => props.navigation.navigate("Signit")}
        >
          SIGNUP
        </Button>
      </View>
      <Button mode="outlined" 
      onPress={() => props.navigation.navigate("Login")}
      >
        LOGIN
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  texit: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 50,
  },
  subheader: {
    marginTop: 50,
    marginBottom: 10,
    fontWeight: "bold",
  },
  tinyLogo: {
    marginBottom: 30,
  },
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginBottom: 50,
    fontWeight: "bold",
    // textDecorationStyle:"bold",
  },
  butt: {
    marginBottom: 10,
  },
});
