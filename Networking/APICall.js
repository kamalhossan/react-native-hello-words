import { useState, useEffect } from "react";
import {View, Text, StyleSheet, StatusBar, FlatList, ActivityIndicator, SafeAreaView} from "react-native";

// Json Placeholder api 
// https://jsonplaceholder.typicode.com/

export default function APICall(){

    const [postlist, setPostList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refresing, setRefresing] = useState(false);

    const fetchData  = async (limit = 10) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
        const data = await response.json();
        setPostList(data);
        setIsLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleRefresh = () => {
        setRefresing(true);
        fetchData(20);
        setRefresing(false);
    }

    if(isLoading){
        return(
            <SafeAreaView style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#00ff00" />
                <Text>Loading</Text>
            </SafeAreaView>
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList
                    ListHeaderComponent={()=> <View><Text style={styles.listHeader}>Posts from JSON PLACEHOLDER Api</Text></View>}
                    ItemSeparatorComponent={() => <View style={{height: 10}}></View>}
                    ListEmptyComponent={() => <View><Text>No Posts Found</Text></View>}
                    data={postlist}
                    renderItem={({item, index}) => (
                    <View style={styles.posts} key={index}>
                        <Text style={styles.postTitle}>{item.id}</Text>
                        <Text style={styles.postTitle}>{item.title}</Text>
                        <Text style={styles.postBody}>{item.body}</Text>
                    </View>)
                }
                refreshing={refresing}
                onRefresh={handleRefresh} //Optional
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingTop: StatusBar.currentHeight,
        paddingHorizontal: 20
    },
    listContainer : {

    },
    posts : {
        borderRadius: 5,
        backgroundColor: "#f5f5f5",
        padding: 15,
        borderWidth: 2,
        borderColor: 'lightblue'
    },
    postTitle : {
        fontSize: 20,
    },
    postBody : {
        fontSize: 16,
    },
    listHeader: {
        textAlign: "center",
        fontSize: 26,
        marginBottom: 10
    },
    loadingContainer: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        paddingTop: StatusBar.currentHeight,
        justifyContent: 'center',
        alignItems: 'center'
    }
})