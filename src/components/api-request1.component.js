import { useState, useEffect } from "react";
import {
    ScrollView,
    Text,
    TextInput,
    StyleSheet,
    FlatList,
} from "react-native";
import { buscarTodosLivros } from "../services/livros.http.service";

const ApiRequest1 = () => {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        buscarTodosLivros().then((data) => setLivros(data));
    }, []);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Lista de Livros</Text>
            <FlatList
                data={livros}
                keyExtractor={(item) => item.abbrev.pt}
                renderItem={({ livro }) => <Text>{livro.name}</Text>}
            />
        </ScrollView>
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

export default ApiRequest1;
