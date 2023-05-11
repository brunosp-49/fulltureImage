import { useEffect, useState } from "react";
import { Alert, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { api } from "../assets/api/req";

const Search = ({ navigation, route }) => {
  const [value, setValue] = useState(route.params.text);
  const [images, setImages] = useState([]);

  async function start() {
    var result = await api.get(
      `${value}&per_page=35&format=json&nojsoncallback=1`
    );

    setImages(result.data.photos.photo);
  }

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    start();
  }, [value]);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput 
        value={value}
        onChangeText={(e)=>setValue(e)}
        placeholder="Procurar imagens"
        placeholderTextColor={"#bfbfbf"}
        style={styles.input}
      />
      <FlatList
        numColumns={2}
        data={images}
        keyExtractor={(item, index) => item.id}
        renderItem={({item, index}) => (
          <Image
            key={index}
            style={styles.image}
            source={{
              uri: `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    paddingHorizontal: 10
  },
  input: {
    borderColor: '#d0d0d0',
    borderWidth: 1,
    width: '90%',
    height: 60,
    borderRadius: 20,
    fontSize: 20,
    paddingHorizontal: 20,
    marginVertical: 40
  },
  image: {
    width: 180,
    height: 80,
    alignSelf: 'center',
    marginHorizontal: 12,
    marginVertical: 6
  }
})

export default Search;
