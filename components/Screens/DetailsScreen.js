import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';


function DetailsScreen() {
  return (
   <View style = {styles.container}>
    <View style = {styles.titleContainer}>
      <Text style = {{fontSize: 18, fontWeight: 500}}> West Loop Veterinary Care </Text>
      <TouchableOpacity style = {styles.shareButton}>
        <SimpleLineIcons name="share-alt" color="#bd32d3" size={18} style = {{marginLeft:5}} />
        <Text style = {{color: '#bd32d3'}}> Share </Text>
      </TouchableOpacity>
      </View>
      <View style = {styles.DatailsContainer}>
        <Text style = {styles.subtitle}> Address: </Text>
        <Text style = {styles.text}> 1891 S 10th St, Independence, KS </Text>
      </View>

       <View style = {styles.DatailsContainer}>
        <Text style = {styles.subtitle}> Team Size: </Text>
        <Text style = {styles.text}> 10–20 </Text>
      </View>

       <View style = {styles.DatailsContainer}>
        <Text style = {styles.subtitle}> Practice Type: </Text>
        <Text style = {styles.text}> General Practice </Text>
      </View>

       <View style = {styles.DatailsContainer}>
        <Text style = {styles.subtitle}> Species: </Text>
        <Text style = {styles.text}> Dog, Exotics, Large Animals </Text>
      </View>

       <View style = {styles.DatailsContainer}>
        <Text style = {styles.subtitle}> Software: </Text>
        <Text style = {styles.text}> EzyVet </Text>
      </View>
    
   </View>
  )
}

export default DetailsScreen;
const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 20,
    borderColor: '#bd32d3',
    borderWidth: 1,
    padding: 5,
  },
  DatailsContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  subtitle: {
    fontWeight: 'bold'
  }
})
