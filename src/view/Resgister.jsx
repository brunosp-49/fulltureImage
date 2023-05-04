import { Text, TextInput, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native"


const Register = ({navigation}) =>{
    return(
        <SafeAreaView>
            <Text>Cadastrar</Text>
            <TextInput placeholder="Email" />
            <TextInput placeholder="Senha" />
            <TouchableOpacity>
                <Text>Cadastrar</Text>
            </TouchableOpacity>
            <Text onPress={()=>navigation.navigate("Login")}>Já é membro? faça seu login</Text>
        </SafeAreaView>
    )
}

export default Register;