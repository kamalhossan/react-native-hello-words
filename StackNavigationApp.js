import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, Pressable, Alert} from 'react-native';
import Greet from './Greet';
import StyleSheetApiEx from './StyleSheetApi';
import BoxModalEx from './BoxModal';
import FlexboxEx from './Flexbox';
import BoxEx from './RNLayout/Box';
import DynamicModule from './DynamicUserInterface/DynamicModule';
import SafeAreaViewEx from './DynamicUserInterface/SafeAreaView';
import SectionListEx from './RNList/SectionList';
import NativeForms from './RNforms/NativeForms';
import FormsFields from './RNforms/FormsFields';
import FormValidation from './RNforms/FormValidation';
import APICall from './Networking/APICall';
import PostViaAPI from './Networking/PostViaAPI';
import HandleError from './Networking/HandingError';
import Navigation from './Navigation/Navigation';
//importing NavigationContainer from React-navigation/native for multipage
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Navigation/screens/HomeScreen';
import AboutScreen from './Navigation/screens/AboutScreen';

const Stack = createNativeStackNavigator();


export default function App(){
  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'
        //global styles goes here
        // screenOptions={{
        //   headerStyle: {backgroundColor: '#6a51ae'},
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {fontWeight: 'bold'},
        //   headerRight: () => (
        //     <Pressable onPress={() => Alert.alert('Menu Button press')}>
        //       <Text style={{color: "#fff", fontSize: 16}}>Menu</Text>
        //     </Pressable>
        //   ),
        //   contentStyle: {backgroundColor: '#e8e4f3'}
        // }}
        >
            <Stack.Screen name="Home" component={HomeScreen} options={{
              title: 'Welcome Home',
              // for specific page styles going to here
              headerStyle: {backgroundColor: '#6a51ae'},
              headerTintColor: '#fff',
              headerTitleStyle: {fontWeight: 'bold'},
              headerRight: () => (
                <Pressable onPress={() => Alert.alert('Menu Button press')}>
                  <Text style={{color: "#fff", fontSize: 16}}>Menu</Text>
                </Pressable>
              ),
              contentStyle: {backgroundColor: '#e8e4f3'}
            }}/>
            <Stack.Screen name="About" component={AboutScreen} 
              options={({route}) => ({
                title: route.params.name,
              })}
            
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeContainer:{
    flex: 1,
    backgroundColor: Platform.OS === "android" ? "#f5f5f5" : "white",
    paddingTop: StatusBar.currentHeight,
  }
})