import { ActivityIndicator, View } from "react-native";

export default function ActivityIndicatorEx(props) {
    // activator Indicator props
    // three props availble size color and animating
    const size = props.size || 'small';
    const color = props.color || 'midnightblue';
    const animation = props.animation || true;
    return(
        <ActivityIndicator size={size} color={color} animating={animation}/>
    )
}