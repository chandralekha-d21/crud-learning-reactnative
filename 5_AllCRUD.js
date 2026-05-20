// ============================================
// ALL CRUD OPERATIONS COMBINED
// A simple Student Manager for LMS
// Create + Read + Update + Delete together
// ============================================

import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  FlatList, Alert, StyleSheet
} from 'react-native';

export default function AllCRUD() {

  const [students, setStudents]     = useState([
    { id: '1', name: 'Rahul Sharma',  course: 'React Native' },
    { id: '2', name: 'Priya Reddy',   course: 'Gen AI'       },
  ]);
  const [name, setName]             = useState('');
  const [course, setCourse]         = useState('');
  const [editingId, setEditingId]   = useState(null);

  // ── CREATE ──────────────────────────────
  const addStudent = () => {
    if (!name.trim() || !course.trim()) {
      Alert.alert('Please enter both name and course');
      return;
    }
    const newStudent = { id: Date.now().toString(), name, course };
    setStudents([...students, newStudent]);
    setName('');
    setCourse('');
  };

  // ── UPDATE (start) ──────────────────────
  const startEdit = (student) => {
    setEditingId(student.id);
    setName(student.name);
    setCourse(student.course);
  };

  // ── UPDATE (save) ───────────────────────
  const saveEdit = () => {
    setStudents(students.map((s) =>
      s.id === editingId ? { ...s, name, course } : s
    ));
    setEditingId(null);
    setName('');
    setCourse('');
  };

  // ── DELETE ──────────────────────────────
  const deleteStudent = (id) => {
    Alert.alert('Delete Student', 'Are you sure?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete', style: 'destructive',
        onPress: () => setStudents(students.filter((s) => s.id !== id)),
      },
    ]);
  };

  // ── READ (render each student) ──────────
  const renderStudent = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.studentName}>{item.name}</Text>
          <Text style={styles.studentCourse}>{item.course}</Text>
        </View>
        <TouchableOpacity style={styles.editBtn} onPress={() => startEdit(item)}>
          <Text style={styles.btnText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteBtn} onPress={() => deleteStudent(item.id)}>
          <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>LMS Student Manager</Text>
      <Text style={styles.sub}>CRUD Operations — React Native</Text>

      {/* INPUT FORM — Create or Update */}
      <View style={styles.form}>
        <Text style={styles.formTitle}>
          {editingId ? '✏️ Edit Student' : '➕ Add Student'}
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Student name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Course name"
          value={course}
          onChangeText={setCourse}
        />
        {editingId ? (
          <View style={styles.row}>
            <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#085041', flex: 1, marginRight: 8 }]} onPress={saveEdit}>
              <Text style={styles.btnText}>Save Changes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#999', flex: 1 }]} onPress={() => { setEditingId(null); setName(''); setCourse(''); }}>
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={[styles.actionBtn, { backgroundColor: '#185FA5' }]} onPress={addStudent}>
            <Text style={styles.btnText}>Add Student</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* STUDENT LIST — Read */}
      <Text style={styles.listTitle}>All Students ({students.length})</Text>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={renderStudent}
        ListEmptyComponent={<Text style={styles.empty}>No students yet. Add one above!</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:    { flex: 1, padding: 20, backgroundColor: '#fff' },
  heading:      { fontSize: 22, fontWeight: 'bold', color: '#185FA5' },
  sub:          { fontSize: 12, color: '#888', marginBottom: 20 },
  form:         { backgroundColor: '#E6F1FB', borderRadius: 12, padding: 16, marginBottom: 20 },
  formTitle:    { fontSize: 15, fontWeight: '600', color: '#0C447C', marginBottom: 10 },
  input:        { backgroundColor: '#fff', borderRadius: 8, padding: 10, marginBottom: 10, borderWidth: 0.5, borderColor: '#85B7EB' },
  row:          { flexDirection: 'row', alignItems: 'center' },
  actionBtn:    { padding: 12, borderRadius: 8, alignItems: 'center', marginTop: 4 },
  card:         { backgroundColor: '#F5F9FF', borderRadius: 10, padding: 14, marginBottom: 10, borderWidth: 0.5, borderColor: '#85B7EB' },
  studentName:  { fontSize: 15, fontWeight: '600', color: '#0C447C' },
  studentCourse:{ fontSize: 12, color: '#666', marginTop: 2 },
  editBtn:      { backgroundColor: '#3C3489', padding: 8, borderRadius: 6, marginLeft: 8 },
  deleteBtn:    { backgroundColor: '#E24B4A', padding: 8, borderRadius: 6, marginLeft: 8 },
  btnText:      { color: '#fff', fontWeight: '600', fontSize: 12 },
  listTitle:    { fontSize: 15, fontWeight: '600', color: '#333', marginBottom: 10 },
  empty:        { textAlign: 'center', color: '#999', padding: 20 },
});
