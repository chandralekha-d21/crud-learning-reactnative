# CRUD Operations - React Native Learning

This repository contains my learning progress on CRUD operations in React Native.

## What is CRUD?
CRUD stands for the 4 basic operations that every app performs on data.
These are the building blocks of any real-world application.
- **C** - Create → Add new data
- **R** - Read → Display data
- **U** - Update → Edit existing data
- **D** - Delete → Remove data

## Files
- `1_Create.js` → Adding new items
- `2_Read.js` → Displaying items
- `3_Update.js` → Editing items
- `4_Delete.js` → Removing items
- `5_AllCRUD.js` → All 4 operations combined
  
 File Descriptions
1️1_Create.js — CREATE Operation

Lets the user type a student name in a TextInput
On pressing "Add Student", the name is added to the list using useState
Demonstrates how new data is created and stored in app memory
Key concepts: useState, TextInput, TouchableOpacity

2_Read.js — READ Operation

Displays a list of LMS courses on the screen
Uses FlatList — the best React Native component for rendering lists
Shows how stored data is fetched and displayed to the user
Key concepts: FlatList, keyExtractor, renderItem

3_Update.js — UPDATE Operation

Shows a list of students with an Edit button next to each
On clicking Edit, an input box appears pre-filled with the current name
User types new name and clicks Save — the list updates instantly
Key concepts: editingId, conditional rendering, map() to update state

4_Delete.js — DELETE Operation

Displays a list of assignments with a Delete button
On clicking Delete, an Alert confirmation popup appears
On confirming, the item is removed using filter()
Key concepts: Alert.alert(), filter(), state update

5_AllCRUD.js — ALL Operations Combined

A complete LMS Student Manager that combines all 4 CRUD operations
Add a new student with name and course (Create)
View all students in a list (Read)
Click Edit to modify a student's details (Update)
Click Delete to remove a student with confirmation (Delete)
This is the main project file that shows everything working together

## Tech Used
- React Native
- useState Hook
- JavaScript
- FlatList
