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

  import { Avatar, Button, Card, Text } from 'react-native-paper';
  import { List, MD3Colors } from 'react-native-paper';
  import { useState } from "react";
  
  export default function History(){
    const [expanded, setExpanded] = useState(true);

    const handlePress = () => setExpanded(!expanded);


    return (
      <List.Section title="Patient's Details">
      <List.Accordion
        title="Radiology"
        left={props => <List.Icon {...props} icon="heart" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Prescriptions"
        left={props => <List.Icon {...props} icon="history" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Health Checkup Due"
        left={props => <List.Icon {...props} icon="ambulance" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Insurance"
        left={props => <List.Icon {...props} icon="doctor" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      {/* <List.Accordion
        title="Uncontrolled Accordion"
        left={props => <List.Icon {...props} icon="ambulance" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
       */}
    </List.Section>
    )
  }
