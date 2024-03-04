// styleing React Native using javascript
// inline style with style props
// using camel case css properties name
// Stylesheet API

// style various core components
// styles across iOs and Android

import {Text, View, StyleSheet} from 'react-native';

export default function StyleSheetApiEx(){
    return(
        <View>
            <Text style={style.textStyle}>Hello</Text>
            <Text style={[style.redStyle, style.globalFont]}>Hello Red</Text>
        </View>
    )
}

const style = StyleSheet.create({
    textStyle: {
        color: 'black',
        fontSize: 30
    },
    redStyle: {
        color: 'red',
    },
    globalFont: {
        fontSize: 32
    },
    bluebox: {
        backgroundColor: 'lightblue',
        height: 100,
        width: 100,
        padding: 10
    }
})