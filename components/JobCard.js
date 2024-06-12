// src/components/JobCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const JobCard = ({ job }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{job.title}</Text>
            <Text>{job.company}</Text>
            <Text>{job.salary}</Text>
            <Text>{job.location}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default JobCard;
