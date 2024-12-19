import { useFonts } from "expo-font";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export function CustomButton({text, handlePress} ) {

    const [fontsLoaded] = useFonts({
        'RobotoSlab-Regular': require('../assets/fonts/RobotoSlab-Regular.ttf')
      })
    
      if(!fontsLoaded) {
        return <Text>Loading..</Text>
      }

    // onPress={() => navigation.navigate('login')}

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#914F1E',
        paddingVertical: 10,
        borderRadius: 25,
        marginTop: 20,
    },

    buttonText: {
        fontFamily: 'RobotoSlab-Regular',
        color: 'white',
        textAlign: 'center',
        // fontWeight: 'bold',
        fontSize: 17,
    }
})