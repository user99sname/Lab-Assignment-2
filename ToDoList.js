import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

const ToDoList = () => {
    return (
        <ScrollView>
            <View style={[styles.task, styles.completed]}>
                <Text style={styles.taskText}>Do laundry</Text>
            </View>
            <View style={[styles.task]}>
                <Text style={styles.taskText}>Go to gym</Text>
            </View>
            <View style={[styles.task, styles.completed]}>
                <Text style={styles.taskText}>Walk dog</Text>
            </View>
            <View style={[styles.task]}>
                <Text style={styles.taskText}>Wash car</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    completed: {
        backgroundColor: '#e0e0e0',
    },
    taskText: {
        fontSize: 16,
    },
});

export default ToDoList;
