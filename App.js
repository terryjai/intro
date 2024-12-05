import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from './screens/OnboardingScreen';
import Duolingo from './screens/Duolingo';
import NumberValidation from './screens/NumberValidation';

const Stack = createStackNavigator();

export default function App() {

  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='onboarding'>
      <Stack.Screen name="onboarding" component={OnboardingScreen} options={{headerShown: false}}/>
      <Stack.Screen name='duolingo' component={Duolingo} options={{headerShown: false}} />
      <Stack.Screen name='numberValidation' component={NumberValidation} options={{headerShown: false}} />
      {/* <Stack.Screen name="verifyCode" component={VerifyCodeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="VerificationComplete" component={VerificationComplete} options={{ headerShown: false }} />
      <Stack.Screen name="emailVerificationInput" component={EmailVerificationInputScreen} options={{headerShown: false}} />
      <Stack.Screen name="emailSent" component={EmailSentScreen} options={{headerShown: false}} />
      <Stack.Screen name="emailVerified" component={EmailVerifiedScreen} options={{headerShown: false}} /> */}
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
