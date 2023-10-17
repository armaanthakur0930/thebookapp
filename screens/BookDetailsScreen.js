import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function BookDetailsScreen({ route }) {
  const { book } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Details about the book📃</Text>
      <Text style={styles.title}>{book.volumeInfo.title}</Text>
      <Text style={styles.description}>Author: {book.volumeInfo.authors}</Text>
      <Text style={styles.description}>{book.volumeInfo.description}</Text>
      <Text style={styles.description}>Published Date: {book.volumeInfo.publishedDate}</Text>
      <Text style={styles.description}>Page Count: {book.volumeInfo.pageCount}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
});
