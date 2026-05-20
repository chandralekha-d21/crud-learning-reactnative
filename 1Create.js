// C - CREATE OPERATIOn
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CreateExample() {

  // useState stores our list of students
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');

  // CREATE function - adds a new student to the list
  const addStudent = () => {
    if (name.trim() === '') return; // dont add empty names

    const newStudent = {
      id: Date.now(),   // unique id using current time
      name: name,
    };

    setStudents([...students, newStudent]); // add to existing list
    setName(''); // clear input box
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CREATE - Add Student</Text>

      {/* Input box to type name */}
      <TextInput
        style={styles.input}
        placeholder="Enter student name"
        value={name}
        onChangeText={setName}
      />

      {/* Button to add */}
      <TouchableOpacity style={styles.button} onPress={addStudent}>
        <Text style={styles.buttonText}>Add Student</Text>
      </TouchableOpacity>

      {/* Show count */}
      <Text style={styles.count}>Total Students: {students.length}</Text>

      {/* Show all added students */}
      {students.map((student) => (
        <Text key={student.id} style={styles.item}>• {student.name}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title:     { fontSize: 20, fontWeight: 'bold', marginBottom: 20, color: '#185FA5' },
  input:     { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 10 },
  button:    { backgroundColor: '#185FA5', padding: 12, borderRadius: 8, alignItems: 'center' },
  buttonText:{ color: '#fff', fontWeight: 'bold' },
  count:     { marginTop: 16, color: '#666', marginBottom: 8 },
  item:      { fontSize: 16, padding: 4, color: '#333' },
});
