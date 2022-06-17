import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import * as Linking from "expo-linking";
import servicios from "../../../assets/data/servicios";

const Estudios = ({ servicio }) => {
  const onPress = () => {
    Linking.openURL("https://wa.me/+5219511028474");
  };
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image source={{ uri: servicio.imagen }} style={styles.image} />
      <View style={styles.row}>
        <View style={styles.containerTitulo}>
          <Text style={styles.title}>{servicio.titulo}</Text>
          <Text style={styles.subtitle}>{servicio.descripcioncorta}</Text>
        </View>
        <View style={styles.resultados}>
          <Text style={styles.textresultados}>{servicio.resultados}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: "500",
    marginVertical: 5,
  },
  subtitle: {
    color: "grey",
    fontSize: 11,
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
    marginBottom: 5,
    borderRadius: 10,
  },
  containerTitulo: {
    width: "70%",
  },
  resultados: {
    marginLeft: "auto",
    backgroundColor: "lightgray",
    padding: 5,
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  textresultados: {
    fontSize: 9,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
});

export default Estudios;
