import React, {useState} from 'react';
import {Text, View, Button } from 'react-native';
import {Card} from 'react-native-elements';

export default function App() {
  //Binding the function with class
    const [console, setCons] = useState();
    const [votes, setVotes] = useState(false);
  // setting functions for Playstation
    function incPS(value){
      setCons('PS5');
      setVotes(true);
    }
  // setting functions for Xbox
    function incXbox(value){
      setCons('Xbox Series X');
      setVotes(true);
    }
  // setting functions for PC
 function incPC(value){
      setCons('Personal Computer');
      setVotes(true);
    }
        return (
              <View>
              { votes ? (
                <View >
                  <Text> {console} is a Great choice.</Text>
                </View>
                        )
                        : (
                  <View>
                  <Text>Vote for your favorite Console!</Text>
                  <Card>
                  <Button title="PlayStation 5" onPress={(value) => (incPS('PS5'))}/>
                  </Card>
                  <Card.Divider/>
                  <Card>
                  <Button title="Xbox Series X" onPress={(value) => (incXbox('Xbox Series X'))}/>
                  </Card>
                  <Card.Divider/>
                  <Card>
                  <Button title="Personal Computer" onPress={(value) => (incPC('Personal Computer'))}/>
                  </Card>
                  </View>
              )
              }
              </View>
          );
}