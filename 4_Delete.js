// D - DELETE OPERATION
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert, StyleSheet } from 'react-native';

export default function DeleteExample() {

  const [assignments, setAssignments] = useState([
    { id: '1', title: 'React Native UI Design',   submitted: false },
    { id: '2', title: 'CRUD Operations Practice', submitted: true  },
    { id: '3', title: 'Firebase Integration',     submitted: false },
    { id: '4', title: 'Gen AI Chatbot',           submitted: false },
  ]);

  // DELETE function - removes item by id
  const deleteAssignment = (id) => {
    Alert.alert(
      'Delete Assignment',
      'Are you sure you want to delete this?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setAssignments(assignments.filter((a) => a.id !== id));
          },
        },
      ]
    );
  };

  const renderAssignment = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={[styles.status, item.submitted ? styles.done : styles.pending]}>
            {item.submitted ? '✅ Submitted' : '⏳ Pending'}
          </Text>
        </View>
        <TouchableOpacity style={styles.deleteBtn} onPress={() => deleteAssignment(item.id)}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>DELETE - Remove Assignment</Text>
      <Text style={styles.sub}>{assignments.length} assignments remaining</Text>
      <FlatList
        data={assignments}
        keyExtractor={(item) => item.id}
        renderItem={renderAssignment}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:  { flex: 1, padding: 20, backgroundColor: '#fff' },
  heading:    { fontSize: 20, fontWeight: 'bold', color: '#712B13', marginBottom: 4 },
  sub:        { color: '#666', marginBottom: 16 },
  card:       { backgroundColor: '#FAECE7', borderRadius: 10, padding: 14, marginBottom: 10 },
  row:        { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title:      { fontSize: 15, fontWeight: '600', color: '#712B13' },
  status:     { fontSize: 12, marginTop: 4 },
  done:       { color: '#085041' },
  pending:    { color: '#633806' },
  deleteBtn:  { backgroundColor: '#E24B4A', padding: 8, borderRadius: 6, marginLeft: 10 },
  deleteText: { color: '#fff', fontWeight: '600', fontSize: 13 },
});
