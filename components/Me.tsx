import { useEffect, useState } from "react";

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
import { db } from "../FirebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { TextInput,Button } from "react-native-paper";
import Tabs from "./Tabs";
export default function Me(props) {
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
     <Image
        style={styles.tinyLogo}
        source={require("../assets/images/Pulse vault.png")}
      />

      <Text style= {styles.texit}>Name:Random User</Text>
      <Text style={styles.texit}>Aadhar Card id :1200300042006700</Text>
      <Text style={styles.texit}>Age:23</Text>
      <Text style={styles.texit}>Phone no. :+91 834567XXX</Text>


    <View style={styles.butt}>
    <Button icon="logout" mode="contained-tonal" 
    
    onPress={() => props.navigation.navigate("Login")}
    >
LOGOUT  </Button>

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
    texit: {
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 10,
    },
    subheader: {
      marginTop: 50,
      marginBottom: 10,
      fontWeight: "bold",
    },
    tinyLogo: {
      marginBottom: 90,

    },
    butt:{
    marginBottom:20,
    marginTop:60,
    },
    
  });
