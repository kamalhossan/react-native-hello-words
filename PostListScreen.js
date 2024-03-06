// Import necessary libraries
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

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

// Functional component
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
    // Assuming you have defined a screen named 'PostScreen' for individual posts
    navigation.navigate('PostScreen', { postId });
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

export default PostListScreen;
