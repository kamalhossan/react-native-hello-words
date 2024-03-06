import {View, Text, StyleSheet, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function HomeScreen({navigation}){

    // another method to use Navigation by hooks
    // const navigation = useNavigation();
    return(
        <View style={StyleSheet.navigatorContainer}>
            <Text style={styles.text}>Home Screen</Text>
            <Button title='Go To About' onPress={() => navigation.navigate("About", {
                name: "Kamal Hossan",
            })} />
        </View>
    )     
}

const styles = StyleSheet.create({
    navigatorContainer : {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'row'
    },
    text : {
        textAlign: 'center',
        fontSize: 26,
        marginBottom: 16
    }
})