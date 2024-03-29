import { useState } from "react";
import {
    ScrollView,
    Text,
    TextInput,
    StyleSheet,
    FlatList,
    View,
} from "react-native";
import { Button } from "react-native-web";
import { buscarLivro } from "../services/livros.http.service";

const ApiRequest2 = () => {
    const [versiculos, setVersiculos] = useState([]);
    const [abreviacao, setAbreviacao] = useState("");
    const [capitulo, setCapitulo] = useState("");

    const handleBuscarLivro = () => {
        buscarLivro(abreviacao, capitulo).then((data) => setVersiculos(data));
    };

    return (
        <View style={styles.container}>
            <Text>Lista de versículos do capítulo</Text>
            <TextInput
                onChangeText={setAbreviacao}
                style={styles.input}
                placeholder="Abreviação"
            />
            <TextInput
                onChangeText={setCapitulo}
                style={styles.input}
                placeholder="Capítulo"
            />
            <Button title="Buscar" onPress={handleBuscarLivro} />

            <FlatList
                data={versiculos}
                renderItem={({ item }) => (
                    <Text style={styles.versiculos}>
                        {item.number + ". " + item.text}
                    </Text>
                )}
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
        width: "80%",
    },
    input: {
        height: 40,
        marginBottom: 5,
        padding: 5,
        borderWidth: 1,
    },
    versiculos: {
        textAlign: "center",
    },
});

export default ApiRequest2;
