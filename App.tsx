/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React from 'react';
import {
  View,

} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button } from '@react-navigation/elements';


function HomeScreen() {
  const navigation = useNavigation();

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.navigate("Notifications" as never)}>
        Go to Notifications
      </Button>
    </View>
  );
}

function NotificationScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()}>Go Back home</Button>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function App(): React.JSX.Element {
  return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Notifications" component={NotificationScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}


export default App;
