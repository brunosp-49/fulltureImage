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
import { api } from "../assets/api/req";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/logo.png")} />
      <TextInput />
      <TouchableOpacity onPress={()=> {}}>
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
