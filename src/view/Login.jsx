import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../assets/auth/auth";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);

  const cleanInputs = () => {
    setEmail("");
    setPassword("");
  };

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response);
        navigation.navigate("Home");
        cleanInputs();
      })
      .catch((error) => {
        console.log(error);
        switch (error.code) {
          case "auth/invalid-email":
            Alert.alert("Email inválido");
            break;
          case "auth/user-not-found":
            Alert.alert("Usuário não encontrado");
            break;
          case "auth/wrong-password":
            Alert.alert("Senha incorreta");
            break;
          default:
            Alert.alert(error.message.toString());
            break;
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Login</Text>
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
      <TouchableOpacity onPress={() => login()} style={styles.button}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Register");
          cleanInputs();
        }}
      >
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
