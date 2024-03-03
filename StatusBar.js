import { View, StatusBar } from 'react-native';

export default function StatusbarEx(props){
    // we can hide the status bar with attribute of hidden
    return(
        <View>
            <StatusBar
            backgroundColor='lightgreen'
            barStyle='dark-content'
            // hidden
            />
        </View>
    )
}