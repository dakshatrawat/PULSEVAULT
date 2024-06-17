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

  const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


  export default function Homit(){
    return (
      <View>

      <Card>
      <Card.Content>
        <Text variant="titleLarge">Hello User!</Text>
        <Text variant="bodyMedium">Download Your Vaccination Certificate</Text>
      </Card.Content>
      <Card.Cover source={{ uri: 'https://media.gettyimages.com/id/1334672287/photo/over-the-shoulder-view-of-asian-woman-holding-smartphone-with-a-valid-vaccination-certificate.jpg?s=1024x1024&w=gi&k=20&c=dW8Z-r-8mxCdBqvXLUbqdtL4dF57ihx9wrZiAozHxRg=' }} />
      <Card.Actions>
        <Button>Cancel</Button>
        <Button>Download</Button>
      </Card.Actions>
    </Card>

<List.Section>
<List.Subheader>Recent Visits</List.Subheader>
<List.Item title="Govt. Hospital Ambala  " left={() => <List.Icon icon="folder" />} />
<List.Subheader>Prescription and Immunization Record</List.Subheader>
<List.Item
  title="Fortis Heathcare Clinic,Gurgoan"
  left={() => <List.Icon color={MD3Colors.tertiary70} icon="folder" />}
/>
<List.Subheader>Prescription and Immunization Record</List.Subheader>
</List.Section>
      </View>
    )
  }
