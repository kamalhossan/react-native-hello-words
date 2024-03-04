import {View, Text, StyleSheet} from 'react-native';
import BoxItemsEx from './BoxItems';

// in react View are already set to CSS properties "Flex" by default
// flexDirection
// justifyContent

export default function BoxEx(){
    return(
        // <View style={{backgroundColor: "plum", flex: 1}}></View>
        <View style={styles.container}>
            <BoxItemsEx style={{backgroundColor: 'red', }}>Box 1</BoxItemsEx>
            <BoxItemsEx style={{backgroundColor: 'green', }}>Box 2</BoxItemsEx>
            <BoxItemsEx style={{backgroundColor: 'blue', flexBasis: 140}}>Box 3</BoxItemsEx>
            <BoxItemsEx style={{backgroundColor: 'lightblue', height: 140}}>Box 4</BoxItemsEx>
            <BoxItemsEx style={{backgroundColor: 'plum'}}>Box 5</BoxItemsEx>
            <BoxItemsEx style={{backgroundColor: 'black'}}>Box 6</BoxItemsEx>
            <BoxItemsEx style={{backgroundColor: 'maroon'}}>Box 7</BoxItemsEx>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        marginTop: 30,
        borderWidth: 4,
        borderColor: 'red',
        flexDirection: 'column',
        // alignContent: 'space-around',
        // height: 300,
        // flexWrap: 'wrap',
        gap: 10
        // justifyContent: 'center',
        // alignItems: 'baseline',
    }
})