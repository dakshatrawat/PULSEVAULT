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
import { db } from "../FirebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import { Avatar } from "react-native-paper";
import { TextInput, Button } from "react-native-paper";
import Tabs from "./Tabs";
import Homit from "./Homit";

export default function Admin3(props) {
  const [newDisease, setNewDisease] = useState("");
  const [newPress, setPress] = useState("");

  const userCollectionRef = collection(db, "disease");

  const createdisease = async () => {
    await addDoc(userCollectionRef, { disease: newDisease, press: newPress });
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        style={styles.tinyLogo}
        source={require("../assets/images/icon.png")}
      />
      <Text style={styles.head}>Add prescription</Text>
      {/* <Avatar.Image size={48} source={require("../assets/avatar.jpg")} /> */}

      <TextInput
        onChangeText={(event) => setNewDisease(event)}
        label="Disease"
        style={styles.user}
      />
      <TextInput onChangeText={(event) => setPress(event)} label="Medicine " />
      <View style={styles.butt}>
        <Button icon="prescription" mode="contained" onPress={createdisease}>
          Add prescription
        </Button>
      </View>

      <Button
        mode="contained"
        onPress={() => props.navigation.navigate("Admin4")}
      >
        Next
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    marginBottom: 30,
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
    marginBottom: 20,

  },
});
