import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './components/Screens/HomeScreen';
import DetailsScreen from './components/Screens/DetailsScreen';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';

function App() {
  return (
    <GestureHandlerRootView  style={styles.container}>
      <ScrollView>

      <HomeScreen />
      </ScrollView>
   
    
    </GestureHandlerRootView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
