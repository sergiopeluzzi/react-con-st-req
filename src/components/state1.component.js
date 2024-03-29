import { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const State1 = () => {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text>Curtidas: {count}</Text>
            <Button title="Curtir" onPress={() => setCount(count + 1)} />
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
});

export default State1;
