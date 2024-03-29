import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const State3 = () => {
    const [texto, setTexto] = useState("");

    return (
        <View style={styles.container}>
            <Text>Texto: {texto}</Text>
            <TextInput
                style={styles.input}
                onChangeText={setTexto}
                value={texto}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        height: 40,
        marginBottom: 5,
        padding: 5,
        borderWidth: 1,
        marginBottom: 20,
    },
});

export default State3;
