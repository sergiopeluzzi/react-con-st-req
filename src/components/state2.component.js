import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Alert } from "react-native";

const State2 = () => {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = () => {
        if (usuario === "user" && senha === "123") {
            console.log("Login bem-sucedido");
            Alert.alert("Login bem-sucedido");
        } else {
            console.log("Login falhou");
            Alert.alert("Login falhou");
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nome de usuário"
                onChangeText={setUsuario}
                value={usuario}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                onChangeText={setSenha}
                value={senha}
                secureTextEntry={true}
            />
            <Button title="Login" onPress={handleLogin} />
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

export default State2;
