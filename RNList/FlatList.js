import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import PokemonList from './data.json';

export default function FlatListEx(){
    return(
        <View style={styles.scrollView}>
            <Text>RN List text</Text>
            <FlatList
                // mandatory props
                data={PokemonList}
                renderItem={({item}) =>{
                    console.log(item.id);
                    return(
                        <View key={item.id} style={styles.list}>
                            <Text style={styles.listText}>{item.name}</Text>
                            <Text style={styles.listText}>{item.type}</Text>
                        </View>
                    )
                }}
                keyExtractor={(item, index) => item.id.toString()}
                ItemSeparatorComponent={<View style={{height: 10}}/>}
                ListEmptyComponent={<Text>No data</Text>}
                ListHeaderComponent={<Text style={styles.headerText}>Header</Text>}
                ListFooterComponent={<Text>Footer</Text>}
                // horizontal={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        // flexDirection: 'row',
        // marginBottom: 10,
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
    },
    headerText : {
        fontSize: 36,
        textAlign: 'center',
        marginBottom: 20
    }
})