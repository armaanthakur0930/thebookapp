import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
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
    <ImageBackground
      source={require('../assets/books-on-the-table-background-for-text-vector-21599813.jpg')}
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
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginTop: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  name: {
      fontSize: 18,
      padding: 10,
      fontWeight: 'bold',
    },
});
