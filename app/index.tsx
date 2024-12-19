import { createStackNavigator } from "@react-navigation/stack"
import HomePage from "./screens/HomePage"
import LoginPage from "./screens/LoginPage"
import Signup from "./screens/SignupPage"

const Stack = createStackNavigator()

export default function App() {
  return (
      <Stack.Navigator  screenOptions={{headerShown: false}}>
         <Stack.Screen name="homePage" component={HomePage}></Stack.Screen>
         <Stack.Screen name="login" component={LoginPage}></Stack.Screen>
         <Stack.Screen name="signup" component={Signup}></Stack.Screen>

      </Stack.Navigator>
  )
}