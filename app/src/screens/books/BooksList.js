// BooksList.js

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import {getBooks} from '../../services/apiService';
import BookFactory from '../../factories/BookFactory';
import {useRoute} from '@react-navigation/native';
import {ROUTES} from '../../helpers/routes';

const BooksList = ({navigation}) => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const route = useRoute();

  useEffect(() => {
    const retrieveBooks = async () => {
      const response = await getBooks();
      const booksData = response.data.map(data => BookFactory.createBook(data));
      setBooks(booksData);
    };
    retrieveBooks();
  }, []);

  const renderBookItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text>Title: {item.title}</Text>
      <Text>Author: {item.author}</Text>
      <Text>Price: ${item.price}</Text>
      <Text>Status: {item.status ? 'Available' : 'Unavailable'}</Text>
      <Text>{item.toString()}</Text>
      <Text>{item.getSummary()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate(ROUTES.BOOKS.STACK.NEW_BOOK)}>
        <Text style={styles.addButtonLabel}>Add Book</Text>
      </TouchableOpacity>
      {error ? (
        <Text>Error: {error}</Text>
      ) : (
        <FlatList
          data={books}
          renderItem={renderBookItem}
          keyExtractor={item => item.book_pk.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  addButton: {
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  addButtonLabel: {
    fontSize: 16,
    color: '#fff',
  },
});

export default BooksList;
