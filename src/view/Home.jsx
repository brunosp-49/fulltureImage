import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Alert, SafeAreaView } from "react-native";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function Home({ navigation }) {
  const [searchValue, setSearchValue] = useState("");

  const onSearch = () => {
    navigation.navigate("Search", {
      text: searchValue
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.image} />
      <TextInput
        value={searchValue}
        onChangeText={(e) => setSearchValue(e)}
        placeholder="Procurar imagens"
        placeholderTextColor={"#bfbfbf"}
        style={styles.input}
      />
      <TouchableOpacity
        onPress={() => onSearch()}
        style={styles.button}
      >
        <Text>Buscar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 300,
    height: 100,
  },
  input: {
    borderColor: "#d0d0d0",
    borderWidth: 1,
    borderRadius: 20,
    width: "80%",
    fontSize: 20,
    paddingHorizontal: 20,
    height: 50,
    marginVertical: 40,
  },
  button: {
    backgroundColor: "#e8e8e8",
    height: 40,
    width: 100,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
