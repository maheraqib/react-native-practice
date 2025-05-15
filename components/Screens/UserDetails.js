import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import { ActionSheetIOS, Platform } from 'react-native';


export default async function UserDetails() {
  const [imageUri, setImageUri] = useState(require('../Screens/images/background-image.jpg'));
  const [videoUri, setVideoUri] = useState(null);


  const handleImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();

    if (!permissionResult.granted || !cameraPermission.granted) {
      Alert.alert('Permission required', 'You must allow camera and gallery access.');
      return;
    }

    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancel', 'Choose from Gallery', 'Take a Photo'],
          cancelButtonIndex: 0,
        },
        async (buttonIndex) => {
          if (buttonIndex === 1) {
            pickFromGallery();
          } else if (buttonIndex === 2) {
            takePhoto();
          }
        }
      );
    } else {
      Alert.alert('Select Image', 'Choose an option', [
        { text: 'Gallery', onPress: pickFromGallery },
        { text: 'Camera', onPress: takePhoto },
        { text: 'Cancel', style: 'cancel' },
      ]);
    }
  };

  const pickFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri({ uri: result.assets[0].uri });
    }
  };

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri({ uri: result.assets[0].uri });
    }
  };

  const pickVideoFromGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setVideoUri(result.assets[0].uri);
      console.log('Video selected:', result.assets[0].uri);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>More About You!</Text>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <View style={styles.imageWrapper}>
          <Image source={imageUri} style={styles.profileImage} />
          <TouchableOpacity style={styles.editIcon} onPress={handleImagePicker}>
            <Icon name="camera" type="feather" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Jhon Michel</Text>
        <Text style={styles.info}>📧 Jhon@gmail.com</Text>
        <Text style={styles.info}>📍 Saint louis, MO</Text>
        <Text style={styles.info}>🎓 MS Veterinarian</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formSection}>
        <CustomInput icon="user" placeholder="First Name*" />
        <CustomInput icon="user" placeholder="Last Name*" />
        <CustomInput icon="mail" placeholder="Email*" />
        <CustomInput icon="phone" placeholder="Phone*" />
        <CustomInput icon="map-pin" placeholder="Current Location" dropdown />
        <CustomInput icon="briefcase" placeholder="Position" dropdown />
      </View>

      {/* About Me Section */}
      <Text style={styles.sectionTitle}>About Me</Text>
      <View style={styles.aboutContainer}>
       <TouchableOpacity style={styles.uploadBtn} onPress={() => pickVideoFromGallery()}>
  <Text style={styles.uploadText}>Upload Video</Text>
</TouchableOpacity>

        <TextInput
          placeholder="Tell us who you are! Let your personality shine through here!"
          multiline
          numberOfLines={6}
          style={styles.textArea}
        />
        <Text style={styles.minWords}>Minimum 500 Words</Text>
      </View>

      {/* Fun Fact Section */}
      <Text style={styles.sectionTitle}>Fun Fact About Me</Text>
      <TextInput placeholder="Type here." multiline numberOfLines={4} style={styles.textArea} />

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.backBtn}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextBtn}>
          <Text style={styles.nextText}>Next →</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const CustomInput = ({ icon, placeholder, dropdown }) => (
  <View style={styles.inputContainer}>
    <Icon name={icon} type="feather" size={18} color="#a855f7" />
    <TextInput placeholder={placeholder} style={styles.input} />
    {dropdown && <Icon name="chevron-down" type="feather" size={18} color="#a855f7" />}
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginVertical: 20,
    color: '#333',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imageWrapper: {
    position: 'relative',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#a855f7',
    borderRadius: 10,
    padding: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  info: {
    color: '#666',
    marginTop: 2,
  },
  formSection: {
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    borderColor: '#a855f7',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 8,
  },
  aboutContainer: {
    position: 'relative',
  },
  uploadBtn: {
    position: 'absolute',
    top: -35,
    right: 0,
    backgroundColor: '#a855f7',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    zIndex: 1,
  },
  uploadText: {
    color: '#fff',
    fontSize: 12,
  },
  textArea: {
    borderColor: '#a855f7',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    minHeight: 100,
  },
  minWords: {
    fontSize: 12,
    color: '#f87171',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  backBtn: {
    borderColor: '#f87171',
    borderWidth: 1.5,
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  backText: {
    color: '#f87171',
    fontSize: 16,
  },
  nextBtn: {
    backgroundColor: '#a855f7',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  nextText: {
    color: '#fff',
    fontSize: 16,
  },
});
