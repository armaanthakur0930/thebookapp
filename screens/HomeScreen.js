import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native'; // Import ImageBackground
import { searchBooks } from '../services/api';

export default function HomeScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    try {
      const results = await searchBooks(searchQuery);
      navigation.navigate('SearchResults', { results });
    } catch (error) {
      console.error('Error searching for books:', error);
    }
  }

  return (
    <ImageBackground // Use ImageBackground as the top-level component
      source={require('../assets/books-on-the-table-background-for-text-vector-21599813.jpg')} // Replace with the path to your background image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Book Finder📚📓</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for books"
          onChangeText={(text) => setSearchQuery(text)}
          value={searchQuery}
        />
        <View style={styles.buttonContainer}>
          <Button title="Search🔎" onPress={handleSearch} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    padding: 10,
    fontWeight: 'bold',
  },
  searchBar: {
    width: '80%',
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white', // Set a background color if needed
  },
  buttonContainer: {
    marginTop: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'contain' to control the image's size
  },
  name: {
      fontSize: 18,
      padding: 10,
      fontWeight: 'bold',
    },
});
