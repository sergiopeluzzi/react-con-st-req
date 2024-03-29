import { StyleSheet, ScrollView } from "react-native";
import Condicional1 from "./src/components/condicional1.component";
import Condicional2 from "./src/components/condicional2.component";
import Condicional3 from "./src/components/condicional3.component";
import Condicional4 from "./src/components/condicional4.component";
import State1 from "./src/components/state1.component";
import State2 from "./src/components/state2.component";
import State3 from "./src/components/state3.component";
import State4 from "./src/components/state4.component";
import ApiRequest1 from "./src/components/api-request1.component";
import ApiRequest2 from "./src/components/api-request2.component";

export default function App() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/*
            <Condicional1 cor="green" />
            <Condicional2 condicao={true} />
            <Condicional3 condicao={false} />
            <Condicional4 condicao={true} />
            <State1 />
            <State2 />
            <State3 />
            <State4 />
            <ApiRequest1 />
        */}
            <ApiRequest2 />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
