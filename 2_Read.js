// ============================================
// R - READ OPERATION
// Displaying / showing data on screen
// ============================================

import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function ReadExample() {

  // This is our data (normally this comes from a database)
  const [courses] = useState([
    { id: '1', title: 'React Native Basics',   duration: '4 weeks' },
    { id: '2', title: 'JavaScript Fundamentals', duration: '3 weeks' },
    { id: '3', title: 'Gen AI Integration',    duration: '2 weeks' },
    { id: '4', title: 'Firebase & Backend',    duration: '3 weeks' },
  ]);

  // READ - this renders each item on screen
  const renderCourse = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.courseTitle}>{item.title}</Text>
      <Text style={styles.duration}>Duration: {item.duration}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>READ - View All Courses</Text>
      <Text style={styles.subtitle}>{courses.length} courses available</Text>

      {/* FlatList is the best way to display a list in React Native */}
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={renderCourse}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:   { flex: 1, padding: 20, backgroundColor: '#fff' },
  title:       { fontSize: 20, fontWeight: 'bold', marginBottom: 4, color: '#085041' },
  subtitle:    { color: '#666', marginBottom: 16 },
  card:        { backgroundColor: '#E1F5EE', borderRadius: 10, padding: 14, marginBottom: 10 },
  courseTitle: { fontSize: 16, fontWeight: '600', color: '#085041' },
  duration:    { fontSize: 13, color: '#666', marginTop: 4 },
});
