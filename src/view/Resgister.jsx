import { initializeApp } from "firebase/app";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native";
import { firebaseConfig } from "../assets/auth/auth";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  const cleanInputs = () =>{
    setEmail("");
    setPassword("");
  }

  const register = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        Alert.alert("Usuário criado com sucesso!");
        navigation.navigate("Login");
        cleanInputs();
      })
      .catch((error) => {
        switch (error.message) {
          case "Firebase: Error (auth/invalid-email).":
            Alert.alert("Email inválido");
            break;
          case "Firebase: Error (auth/email-already-in-use).":
            Alert.alert("Email já cadastrado");
            break;
          case "Firebase: Password should be at least 6 characters (auth/weak-password).":
            Alert.alert("A senha deve conter pelomenos 6 caracteres");
            break;
          default:
            Alert.alert(error.message.toString());
            break;
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Cadastrar</Text>
      <TextInput
        value={email}
        onChangeText={(e) => setEmail(e)}
        placeholder="Email"
        style={styles.input}
        placeholderTextColor={"#bfbfbf"}
      />
      <TextInput
        secureTextEntry
        value={password}
        onChangeText={(e) => setPassword(e)}
        placeholder="Senha"
        style={styles.input}
        placeholderTextColor={"#bfbfbf"}
      />
      <TouchableOpacity style={styles.button} onPress={() => register()}>
        <Text style={styles.text}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        navigation.navigate("Login");
        cleanInputs();
        }}>
        <Text style={styles.textLink}>Já é membro? faça seu login</Text>
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
