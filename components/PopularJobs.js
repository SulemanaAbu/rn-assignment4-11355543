import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

const PopularJobs = ({ jobs }) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={jobs}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.logo }} style={styles.logo} />
                        <View style={styles.jobInfo}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.company}>{item.company}</Text>
                        </View>
                        <View style={styles.salaryLocation}>
                            <Text style={styles.salary}>{item.salary}</Text>
                            <Text style={styles.location}>{item.location}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    header: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    card: {
        backgroundColor: 'rgba(249,249,249,0.98)',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 41.26,
        height: 43,
        marginRight: 10,
    },
    jobInfo: {
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        width: 120,
        height: 18,
        fontSize: 16,
    },
    company: {
        opacity: 0.6,
        width: 74,
        height: 21,
    },
    salaryLocation: {
        alignItems: 'center',
    },
    salary: {
        width: 62,
        height: 19,
        fontWeight: 'bold',
        alignItems: 'right',
        fontSize: 13,
    },
    location: {
        opacity: 0.6,
        width: 89,
        height: 21,
    },
});

export default PopularJobs;
