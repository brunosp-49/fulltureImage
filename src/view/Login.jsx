import { Text, TextInput, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native"


const Login = ({ navigation }) =>{
    return(
        <SafeAreaView>
            <Text>Login</Text>
            <TextInput placeholder="Email" />
            <TextInput placeholder="Senha" />
            <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                <Text>Login</Text>
            </TouchableOpacity>
            <Text onPress={()=>navigation.navigate("Register")}>Ainda não é membro? faça seu cadastro</Text>
        </SafeAreaView>
    )
}

export default Login;