import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import User from './screens/User';
import Welcome from './screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import {Ionicons} from '@expo/vector-icons';

//const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3c06ab',
          },
          headerTintColor: 'white',
        }}>
        <Tab.Screen name='User' component={User}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="person" size={size} />
          )
        }} />
        <Tab.Screen name='Welcome' component={Welcome}  options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name='home' size={size} />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

//3c0a6b, f0e1ff,

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
