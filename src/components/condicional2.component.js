import { View, Text, StyleSheet } from "react-native";

// 2. Usando if statements dentro do componente de função
export default function Condicional2({ condicao }) {
    if (condicao) {
        return (
            <View style={styles.container}>
                <Text>Condicional 2</Text>
                <Text>Condição é verdadeira</Text>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Text>Condicional 2</Text>
                <Text>Condição é falsa</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
});
