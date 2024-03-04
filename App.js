import { View, Text, StyleSheet, SafeAreaView, Platform} from 'react-native';
import Greet from './Greet';
import StyleSheetApiEx from './StyleSheetApi';
import BoxModalEx from './BoxModal';
import FlexboxEx from './Flexbox';
import BoxEx from './RNLayout/Box';
import DynamicModule from './DynamicUserInterface/DynamicModule';
import SafeAreaViewEx from './DynamicUserInterface/SafeAreaView';

export default function App(){
  return(
    <SafeAreaView style={styles.safeContainer}>
      <SafeAreaViewEx/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer:{
    flex: 1,
    backgroundColor: Platform.OS === "android" ? "lightgrey" : "white",
  }
})