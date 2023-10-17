import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function SearchResults({ route, navigation }) {
  const { results } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Results👀</Text>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.resultItem}
            onPress={() => navigation.navigate('BookDetails', { book: item })}
          >
            <Text>{item.volumeInfo.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
  resultItem: {
    marginVertical: 10,
  },
});
