import {Button, Alert} from 'react-native';

export default function ButtonEx(props){
    const title = (props.title) ? props.title : 'Click me';
    return(
        <Button onPress={() => Alert.alert(title + ' Button Pressed')} title={title} color='midnightblue'/>
    )
}