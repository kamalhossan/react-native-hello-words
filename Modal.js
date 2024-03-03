import { useState } from 'react';
import { View, Modal, Text, Button} from 'react-native';

export default function ModalEx(){
    const [modalVisible, setModalVisible] = useState(false);
     // presetation style is working only for Ios
    return(
        <View>
        <Button onPress={() => setModalVisible(true)} title='Show modal' color={"midnightblue"}/>
        <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)} animationType='fade' presentationStyle='pageSheet'>
            <Text>Modal content World</Text>
            <Button onPress={() => setModalVisible(false)} title='Close modal' color={"midnightblue"}/>
        </Modal>
        </View>
    )
}