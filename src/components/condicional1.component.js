import { View, Text, StyleSheet } from "react-native";

// 1. Usando operadores ternários
export default function Condicional1({ cor }) {
    return (
        <View style={styles.container}>
            <Text>Condicional 1</Text>
            {cor == "red" ? (
                <Text style={{ color: "red" }}>Condição verdadeira</Text>
            ) : (
                <Text style={{ color: "green" }}>Condição falsa</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
});
