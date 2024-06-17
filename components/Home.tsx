import { useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { db } from "../FirebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { TextInput } from "react-native-paper";
import Tabs from "./Tabs";
export default function Home(props) {
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

  const userCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(userCollectionRef, { name: newName, age: newAge });
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 30 }}>home Screen</Text>
      {/* <Text style={{ fontSize: 10 }}>Name:{props.route.params.name}</Text> */}
      {/* <Text style={{ fontSize: 10 }}>Name:{props.route.params.age}</Text> */}

      <TextInput
        onChangeText={(event) => setNewName(event)}
        label="type name"
      />
      <TextInput onChangeText={(event) => setNewAge(event)} label="type Age" />
      <Button
        onPress={() => props.navigation.navigate("Tabs")}
        title="create user"
      ></Button>

      {users.map((user) => {
        return (
          <View key={user.id}>
            <Text>{user.name}</Text>
            <Text>{user.age}</Text>
          </View>
        );
      })}
    </View>
  );
}
