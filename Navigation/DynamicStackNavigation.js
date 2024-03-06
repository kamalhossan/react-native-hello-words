import {View, Text, StyleSheet} from 'react-native';
//importing NavigationContainer from React-navigation/native for multipage
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

// two type of stack navigations
// 1. Stack navigator
// A javascript navigation which offers a high degree of customizations, apps unique navigations experience
// 2. Native Stack Navigator
// // Leverage the native nagivation constructs of Ios and Android, providing better performance and more native feel to the transitions and gestures

export default function DynamicStackNavigator(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )     
}

const styles = StyleSheet.create({
    navigatorContainer : {

    },

})