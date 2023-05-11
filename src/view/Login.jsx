import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        placeholderTextColor={"#bfbfbf"}
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        placeholderTextColor={"#bfbfbf"}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={styles.button}
      >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.textLink}>
          Ainda não é membro? faça seu cadastro
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    alignSelf: "center",
    fontSize: 18,
    color: "#000",
  },
  input: {
    borderColor: "#d0d0d0",
    borderWidth: 1,
    borderRadius: 20,
    width: "80%",
    height: 50,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#e8e8e8",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 40,
    borderRadius: 5,
    marginVertical: 12,
  },
  textLink: {
    marginTop: 10,
    color: "blue",
  },
});
