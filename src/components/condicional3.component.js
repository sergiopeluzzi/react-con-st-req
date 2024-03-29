import { View, Text, StyleSheet } from "react-native";

// 3. Usando variáveis ​​para armazenar componentes
export default function Condicional3({ condicao }) {
    let conteudo;
    if (condicao) {
        conteudo = <Text>Condição é verdadeira</Text>;
    } else {
        conteudo = <Text>Condição é falsa</Text>;
    }

    return (
        <View style={styles.container}>
            <Text>Condicional 3</Text>
            {conteudo}
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
