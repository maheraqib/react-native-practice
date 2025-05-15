import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './components/Screens/HomeScreen';
import UserDetails from './components/Screens/UserDetails';
import TabBar from './components/Screens/TabBar';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <GestureHandlerRootView style = {{flex:1}}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='TabBar' component={TabBar}/>
        <Stack.Screen name='UserDetails' component={UserDetails}/>
      </Stack.Navigator>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
