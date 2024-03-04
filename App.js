import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar} from 'react-native';
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
import Networking from './Networking/Networking';


export default function App(){
  return(
    <SafeAreaView style={styles.safeContainer}>
      <Networking/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer:{
    flex: 1,
    backgroundColor: Platform.OS === "android" ? "#f5f5f5" : "white",
    paddingTop: StatusBar.currentHeight,
  }
})