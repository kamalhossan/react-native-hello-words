import { View, Text, StyleSheet} from 'react-native';

export default function SafeAreaViewEx(){
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
        // width: windowWidth > 500 ? "70%" : "90%",
        // height: windowWidth > 600 ? "70%" : "50%" ,
        backgroundColor: "lightblue",
        alignItems: 'center',
        justifyContent: "center"
    }, 
    text : {
        fontSize: 24,
    },
    safeContainer: {

    }
})