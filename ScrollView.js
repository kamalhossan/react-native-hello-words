import {View, Text, ScrollView, Image, ImageBackground} from 'react-native';
const sampleImg = require('./assets/adaptive-icon.png');

export default function ScrlView(){
    return(
  
        <ScrollView style={{backgroundColor: 'plum', flex: 1, paddingTop: '50px'}}>
            {/* <Text>Hello words</Text>
            <Text>Hello words</Text> */}
            {/* <View style={{backgroundColor: 'red', width: '100%', height: 200}}></View> */}
            <View style={{backgroundColor: 'green', width: '100%', height: 200}}></View>
            <View style={{backgroundColor: 'gray', padding: 20 }}><Text style={{color: 'white'}}>Hello Text</Text></View>
            <View style={{backgroundColor: 'gray', padding: 20 }}><Text style={{color: 'white', textAlign: 'center'}}>I am learning React Native</Text></View>
            <Image style={{width: '80%', height: 200}} source={sampleImg}/>
            <Image style={{width: '100%', height: 200}} source={{uri: 'https://images.pexels.com/photos/13621773/pexels-photo-13621773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}}/>
            <ImageBackground style={{flex: 1}} source={sampleImg}>
            <Text style={{paddingTop: 100, textAlign: 'center'}}>Image Text</Text>
            </ImageBackground>
            <View style={{padding: 20}}>
                <Text>Lorem ipsum doller smith Lorem ipsum doller smith Lorem ipsum doller smith Lorem ipsum doller smith Lorem ipsum doller smith Lorem ipsum doller smith Lorem ipsum doller smith Lorem ipsum doller smith Lorem ipsum doller smith Lorem ipsum doller smith Lorem ipsum doller smith Lorem ipsum doller smith Lorem ipsum doller smith Lorem ipsum doller smith Lorem ipsum doller smith Lorem ipsum doller smith Lorem ipsum doller smith Lorem ipsum doller smith Lorem ipsum doller smith Lorem ipsum doller smith Lorem ipsum doller smith </Text>
                </View>
        </ScrollView>
    
    )
}