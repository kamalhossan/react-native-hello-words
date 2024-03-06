import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";

// Json Placeholder api
// https://jsonplaceholder.typicode.com/

export default function HandleError() {
  const [postlist, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refresing, setRefresing] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState("");

  const fetchData = async (limit = 10) => {
    try{
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
      );
      const data = await response.json();
      setPostList(data);
      setIsLoading(false);
      setError("");
    } catch(error){
      console.error("Error Fetching Data", error);
      setIsLoading(false);
      setError("Failed to fetch post list")
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    setRefresing(true);
    fetchData(20);
    setRefresing(false);
  };

  const handleAddPost = async () => {
    setIsPosting(true);
    try{
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: postTitle,
          body: postBody,
        }),
      });
      const newPost = await response.json();
      setPostList((prevPost) => [newPost, ...prevPost]);
      setPostBody("");
      setPostTitle("");
      setIsPosting(false);
      setError("")
    } catch(error){
      console.error("Error Adding New Post:", error);
      setError("Failed to add new post");
      setIsPosting(false);
    }
    };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00ff00" />
        <Text>Loading</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {error ? (<View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>) : (
      <>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Post Title"
            value={postTitle}
            onChangeText={setPostTitle}
            style={styles.input}
          />
          <TextInput
            placeholder="Post Body"
            value={postBody}
            onChangeText={setPostBody}
            style={styles.input}
          />
          <Button
            title={isPosting ? "Adding..." : "Add Post"}
            onPress={handleAddPost}
            disabled={isPosting}
          />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            ListHeaderComponent={() => (
              <View>
                <Text style={styles.listHeader}>
                  Posts from JSON PLACEHOLDER Api
                </Text>
              </View>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 10 }}></View>}
            ListEmptyComponent={() => (
              <View>
                <Text>No Posts Found</Text>
              </View>
            )}
            data={postlist}
            renderItem={({ item, index }) => (
              <View style={styles.posts} key={index}>
                <Text style={styles.postTitle}>{item.id}</Text>
                <Text style={styles.postTitle}>{item.title}</Text>
                <Text style={styles.postBody}>{item.body}</Text>
              </View>
            )}
            refreshing={refresing}
            onRefresh={handleRefresh} //Optional
          />
        </View>
      </>)}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
  },
  listContainer: {},
  posts: {
    borderRadius: 5,
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderWidth: 2,
    borderColor: "lightblue",
  },
  postTitle: {
    fontSize: 20,
  },
  postBody: {
    fontSize: 16,
  },
  listHeader: {
    textAlign: "center",
    fontSize: 26,
    marginBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8,
    padding: 8,
  },
  errorContainer : {
    backgroundColor: "#ffc0cb",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    alignItems: "center",
  }, 
  errorText: {
    color: 'red',
  }
});
