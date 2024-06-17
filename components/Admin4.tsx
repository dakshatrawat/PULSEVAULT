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
export default function Admin4(props) {
  const [disease, setDiseases] = useState([]);
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

  const userCollectionRef = collection(db, "disease");

  const createUser = async () => {
    await addDoc(userCollectionRef, { name: newName, age: newAge });
  };

  useEffect(() => {
    const getDisease = async () => {
      const data = await getDocs(userCollectionRef);
      setDiseases(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getDisease();
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
      <Text style={styles.texit1}>Prescriptions</Text>

      {disease.map((disease) => {
        return (
          <View key={disease.id}>
            <Text>{disease.disease}:{disease.press}</Text>
            {/* <Text>{disease.press}</Text> */}
          </View>
        );
      })}

    <View style={styles.butt}>
    <Button icon="" mode="contained-tonal" 
    
    onPress={() => props.navigation.navigate("Scan")}
    >
Finish</Button>

    </View>

    <Button icon="" mode="contained-tonal" 
    
    onPress={() => props.navigation.navigate("Admin1")}
    >
Logout</Button>
    </View>
  );
}

const styles = StyleSheet.create({
    texit1:{
        fontWeight:'bold',
    },
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
