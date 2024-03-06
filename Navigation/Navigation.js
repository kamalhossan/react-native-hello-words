import {View, Text, StyleSheet} from 'react-native';
//importing NavigationContainer from React-navigation/native for multipage
import { NavigationContainer } from '@react-navigation/native';

export default function Navigation(){
    return(
        <NavigationContainer>
            <View style={StyleSheet.navigatorContainer}>
                    <Text>Navigations</Text>
                </View>
        </NavigationContainer>
    )     
}

const styles = StyleSheet.create({
    navigatorContainer : {

    },

})