import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/logo.png")} />
      <TextInput />
      <TouchableOpacity>
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
});

{
  /*
<View></View>
<Text></Text>
<StatusBar /> 
<TouchableOpacity></TouchableOpacity>
<TextInput />
<FlatList />
<Image />
*/
}
