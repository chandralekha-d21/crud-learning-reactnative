// U - UPDATE OPERATION
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function UpdateExample() {

  const [students, setStudents] = useState([
    { id: '1', name: 'Rahul Sharma' },
    { id: '2', name: 'Priya Reddy' },
    { id: '3', name: 'Arun Kumar' },
  ]);

  const [editingId, setEditingId]   = useState(null);  // which student is being edited
  const [editedName, setEditedName] = useState('');     // new name being typed

  // Start editing - fills input with current name
  const startEdit = (student) => {
    setEditingId(student.id);
    setEditedName(student.name);
  };

  // UPDATE function - saves the new name
  const saveEdit = () => {
    setStudents(students.map((s) =>
      s.id === editingId ? { ...s, name: editedName } : s
    ));
    setEditingId(null);   // stop editing mode
    setEditedName('');
  };

  const renderStudent = ({ item }) => (
    <View style={styles.card}>
      {editingId === item.id ? (
        // EDIT MODE - show input box
        <View>
          <TextInput
            style={styles.input}
            value={editedName}
            onChangeText={setEditedName}
          />
          <TouchableOpacity style={styles.saveBtn} onPress={saveEdit}>
            <Text style={styles.btnText}>Save</Text>
          </TouchableOpacity>
        </View>
      ) : (
        // NORMAL MODE - show name with edit button
        <View style={styles.row}>
          <Text style={styles.name}>{item.name}</Text>
          <TouchableOpacity style={styles.editBtn} onPress={() => startEdit(item)}>
            <Text style={styles.btnText}>Edit</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>UPDATE - Edit Student Name</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={renderStudent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title:     { fontSize: 20, fontWeight: 'bold', marginBottom: 16, color: '#3C3489' },
  card:      { backgroundColor: '#EEEDFE', borderRadius: 10, padding: 14, marginBottom: 10 },
  row:       { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  name:      { fontSize: 16, color: '#3C3489' },
  input:     { borderWidth: 1, borderColor: '#AFA9EC', borderRadius: 8, padding: 8, marginBottom: 8, backgroundColor: '#fff' },
  editBtn:   { backgroundColor: '#3C3489', padding: 8, borderRadius: 6 },
  saveBtn:   { backgroundColor: '#085041', padding: 8, borderRadius: 6, alignItems: 'center' },
  btnText:   { color: '#fff', fontWeight: '600', fontSize: 13 },
});
