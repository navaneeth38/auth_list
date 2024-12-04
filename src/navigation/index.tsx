import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { DetailsScreen, HomeScreen, LoginScreen, SignUpScreen } from '../screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const Navigation = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Group>
                 <Stack.Screen name="Login" component={LoginScreen} />
                 <Stack.Screen name="SignUp" component={SignUpScreen} />
                </Stack.Group>
                <Stack.Group>
                 <Stack.Screen name="Home" component={HomeScreen} />
                 <Stack.Screen name="Details" component={DetailsScreen} />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
};