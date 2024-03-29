import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const State4 = () => {
    const [texto, setTexto] = useState("");
    const [inputText, setInputText] = useState("");

    return (
        <View style={styles.container}>
            <Text>Texto: {texto}</Text>
            <TextInput
                style={styles.input}
                onChangeText={setInputText}
                value={inputText}
            />
            <Button
                title="Atualizar texto"
                onPress={() => setTexto(inputText)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    input: {
        height: 40,
        marginBottom: 5,
        padding: 5,
        borderWidth: 1,
    },
});

export default State4;
