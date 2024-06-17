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
import { Button } from 'react-native-paper';

export default function Preview(props) {
  return (
    <View style={styles.box}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/images/icon.png')}
      />

      <Text style={styles.header} variant="displaySmall">PULSEVAULT</Text>

      <View style={styles.butt}>
        <Button
          icon="ambulance"
          mode="contained"
          onPress={() => props.navigation.navigate("Signup")}
        >
Continue as Patient
        </Button>
      </View>
      <Button icon="doctor" mode="contained"
      
      onPress={() => props.navigation.navigate("Admin1")}
       
       >
    Continue as Admin
  </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  tinyLogo:{
    marginBottom:30,

  },
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header:{
    marginBottom:50,
    fontWeight:'bold',
    // textDecorationStyle:"bold",
  },
  butt: {
    marginBottom: 10,
  },
});
