
//Navigators
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens 
import LoginScreen from './src/screens/LoginSreen'
import ProfileScreen from './src/screens/ProfileScreen';
import ExpenseScreen from './src/screens/ExpenseScreen';

//Providers 


const Stack = createNativeStackNavigator();


function ExpenseStack() {

  return (
    <Stack.Navigator initialRouteName="Login" >
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Expense" component={ExpenseScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const App = () => (
  <NavigationContainer>
    <ExpenseStack />
  </NavigationContainer>
);

export default App 