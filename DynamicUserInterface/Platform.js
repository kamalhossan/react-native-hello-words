import { View, Text, StyleSheet, Platform} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// Platform to identified which type of devices it' using an the features of the devices
export default function PlatformEx(){
    return(
        <View style={styles.continare}>
            <View style={styles.box}>
                <Text style={styles.text}>Dynamic Modules</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    continare:{
        flex: 1,
        backgroundColor: "plum",
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    box : {
        backgroundColor: "lightblue",
        alignItems: 'center',
        justifyContent: "center"
    }, 
    text : {
        // using of Platform
        ...Platform.select({
            ios: {
                fontSize: 20,
            },
            android: {
                fontSize: 24,
            }
        }),
        color: platform.os === 'android' ? 'white' : 'red'
    },
    safeContainer: {

    }
})