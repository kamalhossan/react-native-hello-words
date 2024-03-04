import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';



export default function DynamicModule(){

    // useWindowDimension for responsive style
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;

    return(
        <View style={styles.continare}>
            <View style={styles.box}>
                <Text style={{fontSize: windowWidth > 500 ? 50 : 24}}>Dynamic Modules</Text>
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
        // fontSize: windowWidth > 500 ? 36 : 24,
    }
})