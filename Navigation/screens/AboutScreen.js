import {View, Text, StyleSheet, Button} from 'react-native';

export default function AboutScreen({navigation, route}){
    const {name} = route.params;
    return(
        <View style={StyleSheet.navigatorContainer}>
            <Text style={styles.text}>About {name}</Text>
            <Button title='Go To Home' onPress={() => navigation.navigate("Home")} />
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