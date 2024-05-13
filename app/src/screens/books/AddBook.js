import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Switch,
  StyleSheet,
  Alert,
} from 'react-native';
import BookFactory from '../../factories/BookFactory';
import {addNewBook} from '../../services/apiService';

const AddBookForm = ({onAddBook}) => {
  const [formState, setFormState] = useState({
    title: '',
    author: '',
    price: '',
    status: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (value, name) => {
    setFormState({
      ...formState,
      [name]: value,
    });
    // Clear the error when user starts typing again
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm(formState);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newBook = BookFactory.createBook(formState);
    await handleAddBook(newBook);
    setFormState({
      title: '',
      author: '',
      price: '',
      status: false,
    });
  };

  const handleAddBook = async newBook => {
    const response = await addNewBook(newBook);
    console.log('Response:', response);
    Alert.alert('Book added successfully');
  };

  const validateTitle = title => {
    if (title.length < 3) {
      return 'Title must be at least 3 characters long';
    }
    return '';
  };

  const validateForm = formState => {
    let errors = {};
    if (!formState.title) {
      errors.title = validateTitle(formState.title);
    }
    if (!formState.author) {
      errors.author = 'Author is required';
    }
    if (!formState.price) {
      errors.price = 'Price is required';
    }
    return errors;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput
        style={[styles.input, errors.title && styles.errorInput]}
        value={formState.title}
        onChangeText={val => handleChange(val, 'title')}
        placeholder="Enter title"
      />
      {errors.title && <Text style={styles.errorText}>{errors.title}</Text>}
      <Text style={styles.label}>Author</Text>
      <TextInput
        style={[styles.input, errors.author && styles.errorInput]}
        value={formState.author}
        onChangeText={val => handleChange(val, 'author')}
        placeholder="Enter author"
      />
      {errors.author && <Text style={styles.errorText}>{errors.author}</Text>}
      <Text style={styles.label}>Price</Text>
      <TextInput
        style={[styles.input, errors.price && styles.errorInput]}
        value={formState.price}
        onChangeText={val => handleChange(val, 'price')}
        placeholder="Enter price"
        keyboardType="numeric"
      />
      {errors.price && <Text style={styles.errorText}>{errors.price}</Text>}
      <View style={styles.statusContainer}>
        <Text style={styles.label}>Status</Text>
        <Switch
          value={formState.status}
          onValueChange={val => handleChange(val, 'status')}
          name="status"
        />
      </View>
      <Button title="Add Book" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default AddBookForm;
