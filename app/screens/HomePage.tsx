import React from 'react';
import { Text, StyleSheet, StatusBar, ImageBackground, View, Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { CustomButton } from '@/shared/button'
import { useFonts } from 'expo-font';
import appBanner from '@/assets/images/morning-coffee.jpg';

export default function homePage({navigation} : any) {

  const [fontsLoaded] = useFonts({
    'Lobster-Regular': require('../../assets/fonts/Lobster-Regular.ttf'),
    'RobotoSlab-Regular': require('../../assets/fonts/RobotoSlab-Regular.ttf')
  })

  if(!fontsLoaded) {
    return <Text>Loading..</Text>
  }

  const handlePress = () => {
    // Navigate to the 'Login' screen when the button is clicked
    navigation.navigate('login');
  };

  return (
    <>
    <StatusBar backgroundColor={'black'}/>
      <SafeAreaProvider>
        <ImageBackground source={appBanner} resizeMode='cover' style={styles.image}>
          <SafeAreaView style={styles.container}>
            <View style={styles.introContent}>
              <Text style={styles.message}>Sip the magic, feel the Moment</Text>
              <Text style={styles.description}>More than just a coffee experience, it's a moment of joy in every cup.</Text>
              {/* <Button color='#914F1E' title='Get statrted' style={styles.button}/> */}
              <CustomButton handlePress={handlePress} text='Get started'/>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </SafeAreaProvider>
    </>
  );
}

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
    paddingHorizontal: 20,
  },
  message: {
    fontFamily: 'Lobster-Regular',
    fontSize: 40,
    color: '#fff',
    textAlign: 'center',
    
    textShadowColor: '#131010',
    textShadowOffset: { width: 5, height: 5 }, 
    textShadowRadius: 5,
    // marginBottom: 10,
    
  },
  
  introContent : {
    marginBottom: '30%',
    maxWidth: '90%',
    // backgroundColor: 'red'
  },
  
  description: {
    fontFamily: 'RobotoSlab-Regular',
    color: 'white',
    textShadowColor: '#914F1E',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
    textAlign: 'center',
    // fontWeight: 'bold',
    // backgroundColor: 'blue',
    paddingHorizontal: 40,
    fontSize: 12
  },
});
