import {View, Text, StyleSheet, ScrollView, SectionList} from 'react-native';
import GroupPokemon from './group-data.json';

export default function SectionListEx(){
    return(
        <View style={styles.scrollView}>
            <Text>Section List text</Text>
            <SectionList 
            // mandatory
            sections={GroupPokemon}
            renderItem={({item}) => {
                return(
                    <Text style={styles.listText}>{item}</Text>
                )
            }}
            renderSectionHeader={({section}) => (
                <Text style={styles.sectionTitle}>{section.type}</Text>
            )}
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
    sectionTitle : {
        backgroundColor: 'red',
        padding: 10,
        fontSize: 26,
        color: 'white',
        fontWeight: "bold"
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