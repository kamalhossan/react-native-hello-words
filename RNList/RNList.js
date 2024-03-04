import {View, Text, StyleSheet, ScrollView} from 'react-native';
import PokemonList from './data.json';

export default function RnList(){
    return(
        <View>
            <Text>RN List text</Text>
            <ScrollView style={styles.scrollView}>
            {PokemonList.map((item) => {
                return(
                    <View key={item.id} style={styles.list}>
                        <Text style={styles.listText}>{item.name}</Text>
                        <Text style={styles.listText}>{item.type}</Text>
                    </View>
                )
            })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 2,
        padding: 10
    },
    scrollView: {
        padding: 10,
        marginBottom: 30
    }, 
    listText: {
        fontSize: 24
    }
})