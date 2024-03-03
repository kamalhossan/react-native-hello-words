import { View} from 'react-native';
import ScrlView from './ScrollView';
import Button from './Button';
import PresableEx from './Pressable';
import ModalEx from './Modal';
import StatusbarEx from './StatusBar';
import ActivityIndicatorEx from './ActivityIndicator';

export default function App(){
  return(
    // <View>
    //   <ActivityIndicatorEx size='small'/>
    //   <ActivityIndicatorEx size='large'/>
    //   <ActivityIndicatorEx size='large' animation={false}/>
    // </View>
    // <StatusbarEx/>
    <View style={{flex: 1}}>
      <View style={{backgroundColor: 'red', height: '50%'}}>
      <ScrlView/>
      </View>
      <View style={{backgroundColor: 'green', height: '50%', paddingTop: 20}}>
        
        <Button title={'Click me one'}/>
        <Button title={'click me two'}/>
        <Button title={'click me three'}/>
        <Button title={'click me four'}/>
        <PresableEx/>
        <ModalEx/>
      </View>
    </View>
  );
}