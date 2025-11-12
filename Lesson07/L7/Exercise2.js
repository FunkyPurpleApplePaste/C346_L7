// Exercise 2
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Exercise2 = () => {
    return (
        <View style={{ marginTop: 30 }}>
            <View style={styles.greenBox}>
                <Text style={[styles.title, styles.boxText]}>Who We Are</Text>
            </View>

            <View style={styles.greenBox}>
                <Text style={styles.boxText}>Our People</Text>
            </View>

            <View style={styles.greenBox}>
                <Text style={styles.boxText}>Our Campus</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    greenBox: {
        width: 100,
        height: 100,
        marginTop: 30,
        backgroundColor: "green",
        borderWidth: 1,
        borderColor: "black",
    },
    boxText: {
        textAlign: "center",
        color: "white",
    },
    title: {
        fontWeight: "bold",
    },
});

export default Exercise2;
