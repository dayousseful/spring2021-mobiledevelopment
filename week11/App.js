import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';



export default function App() {
  return (
    <View style={styles.container}>
    <Card>
    <Card.Title> Youssef Ibrahim </Card.Title>
      <Text> Pizza </Text>
      <Card.Divider/>
      <Text> Shawerma </Text>
      <Button title="Submit"/>
    </Card>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
  
});
