import {Pressable, Image, Alert} from 'react-native';
const sampleImg = require('./assets/adaptive-icon.png');

export default function PresableEx(){
    return(
        // onPressIs is called when a press is activated
        // onLongPress is triggered when a press in held for longer than 500 milliseconds
        // onPressOut is called when the press gesture is deactivated
        <Pressable onPress={() => Alert.alert('imaged pressd')}>
            <Image style={{width: '80%', height: 200}} source={sampleImg}/>
        </Pressable>
    )
}