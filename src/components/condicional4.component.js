import { View, Text, StyleSheet } from "react-native";

// 4. Usando funções auxiliares
const renderizaConteudo = (condicao) => {
    if (condicao) {
        return <Text>Condição é verdadeira</Text>;
    } else {
        return <Text>Condição é falsa</Text>;
    }
};

export default function Condicional4({ condicao }) {
    return (
        <View style={styles.container}>
            <Text>Condicional 4</Text>
            {renderizaConteudo(condicao)}
            {renderizaConteudo(false)}
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
