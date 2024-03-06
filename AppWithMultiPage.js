// Import necessary libraries
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Function to fetch data from API
const fetchPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const singlePost = async (id) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


// Create Stack Navigator
const Stack = createStackNavigator();

// Functional component for individual post screen
const PostScreen = ({ route }) => {
  const { postId } = route.params;

  // Fetch individual post data and render it
  return (
    <View>
      <Text>Post ID: {postId}</Text>
        {singlePost(postId)}
    </View>
  );
};



// Functional component for post list screen
const PostListScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const postData = await fetchPosts();
      setPosts(postData);
    };
    fetchData();
  }, []);

  // Function to navigate to individual post page
  const navigateToPost = (postId) => {
    navigation.navigate('Post', { postId });
  };

  // Render each post title as a TouchableOpacity for navigation
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToPost(item.id)}>
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

// Main component with navigation container
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PostList" component={PostListScreen} />
        <Stack.Screen name="Post" component={PostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;