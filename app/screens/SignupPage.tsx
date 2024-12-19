import React from 'react'
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native'
import loginBackgroundImage from '@/assets/images/cofee-beans.png'
import backIcon from '@/assets/images/previous.png'
import { TextInput } from 'react-native-gesture-handler'
import { useFonts } from 'expo-font'
import { CustomButton } from '@/shared/button'

const Signup = ({navigation} : any) => {

  const [fontsLoaded] = useFonts({
    'RobotoSlab-Regular': require('../../assets/fonts/RobotoSlab-Regular.ttf')
  })

  if(!fontsLoaded) {
    return <Text>Loading..</Text>
  }

  function handleNavigate() {
    navigation.navigate('login')
  }

  function goHome() {
    navigation.navigate('homePage')
  }

  return (
     <ImageBackground source={loginBackgroundImage} style={styles.image}>
      <TouchableOpacity onPress={goHome}>
        <Image source={backIcon} style={styles.icon}/>
      </TouchableOpacity>
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Text style={styles.label}>Sign Up</Text>
        <TextInput style={styles.input} placeholder='email'/>
        <TextInput style={styles.input} placeholder='phone'/>
        <TextInput style={styles.input} placeholder='password'/>
        {/* <Text style={styles.forgotPassword}>Forgot password</Text> */}
        <CustomButton handlePress={''} text='Sign up'/>
        <Text style={styles.newAccount}>Already have an account? <Text style={styles.sugnUp} onPress={handleNavigate}>sign in</Text></Text>
      </View>
    </View>
     </ImageBackground>
  )
}

export default Signup

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // paddingHorizontal: 20,
  },

  label: {
    fontFamily: 'RobotoSlab-Regular',
    fontSize: 30,
    color: '#914F1E',
    textAlign: 'center',
    
    textShadowColor: '#131010',
    textShadowOffset: { width: .5, height: .5 }, 
    textShadowRadius: 1,
    marginBottom: 20
  },

  forgotPassword:{
    textAlign: 'center',
    marginBlock: 40,
    color: '#914F1E',
    textDecorationLine: 'underline',
    fontFamily: 'RobotoSlab-Regular'
  },

  loginBox: {
    height: '60%',
    width: '100%',
    backgroundColor: '#fff',
    padding: 40,

    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    position: 'relative'
    // backdropFilter: 'blur'
  },
  input: {
    height: 45, // Adjusted height to make it visible and interactable
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1, // Added left border
    borderRightWidth: 1, // Added right border
    borderTopColor: 'brown', // You can change this to match your design
    borderBottomColor: 'brown', // Set the color for the bottom border
    borderLeftColor: 'brown', // Set the left border color (adjustable)
    borderRightColor: 'brown', // Set the right border color (adjustable)
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 10,
    fontSize: 15,
    marginTop: 15,
    
    borderRadius: 25,// Optional, adds space between the label and the input
  },

  sugnUp: {},
  newAccount: {
    textAlign: 'center',
    color: '#914F1E',
    // backgroundColor: 'blue',
    // flex: 1,
    position: 'absolute',
    marginInline: 'auto',
    bottom: 60,
    left: '25%',
    fontFamily: 'RobotoSlab-Regular'
  },
  icon: {
    position: 'absolute',
    top: 25,
    left: 25,
    width: 40,
    height: 40
  },
})