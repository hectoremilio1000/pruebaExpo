import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Pressable,
  Button,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import Estudios from "./src/components/Estudios";
import * as Linking from "expo-linking";
import servicios from "./assets/data/servicios";

import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";
Amplify.configure(awsconfig);

const App = () => {
  const onPress = () => {
    Linking.openURL("https://wa.me/+5219511028474");
  };
  return (
    <SafeAreaView
      style={{ padding: 10, flex: 1, backgroundColor: "white", paddingTop: 20 }}
    >
      <Text
        style={{
          textAlign: "center",
          fontWeight: "700",
          fontSize: 16,
          paddingTop: 10,
          marginVertical: 10,
        }}
      >
        Solicita un test a domicilio con un Click
      </Text>

      <FlatList
        data={servicios}
        renderItem={({ item }) => <Estudios servicio={item} />}
      />

      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Otros estudios</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 18,
  },
});
