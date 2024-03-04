import {View, Text, StyleSheet, Dimensions} from 'react-native';
import { useState, useEffect } from 'react';


export default function DynamicModule(){

    const [dimension, setDimension] = useState({
        window: Dimensions.get('window')
        
    });
 
    useEffect(() => {
        const subscription = Dimensions.addEventListener("change", ({window})=>{
            setDimension(window);
        })
        return () => subscription?.remove();
    });

    useEffect(() => {
        console.log(dimension);
    })

    // using dimension api to get the window width and height
    const {window} = dimension;
    const windowWidth = window.width;
    const windowHeight = window.height;
    console.log(windowWidth)
    console.log(windowHeight)


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