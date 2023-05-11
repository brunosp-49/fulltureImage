import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native";

const Register = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Cadastrar</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Senha" style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.textLink}>
          Já é membro? faça seu login
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Register;

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
