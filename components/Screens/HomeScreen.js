import React from 'react';
import { View, Text, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DetailsScreen from './DetailsScreen';
import TabBar from './TabBar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
function HomeScreen() {
  return (
    <GestureHandlerRootView style={styles.container}>
     
      <ImageBackground source={require ('../Screens/images/background-image.jpg')} style = {styles.coverImage}>
      <View style = {styles.imageContentContainer}>
        <Text style = {styles.icon}> <AntDesign name="arrowleft" color="#fff" size={24} /> </Text>
        <Text style = {styles.aboutText}> About Clinic </Text>
      </View>
      </ImageBackground>
      
      <DetailsScreen/>
      <TabBar/>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',     // horizontally center
  },
  aboutText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 50,
  },
  coverImage: {
    width:360,
    height: 200
  },
  imageContentContainer: {
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 50,
    padding: 10,
    flexDirection: 'row'
  },
});

export default HomeScreen;
