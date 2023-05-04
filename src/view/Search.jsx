import { SafeAreaView, TextInput } from "react-native";

const Search = () => {
  const [value, setValue] = useState("soccer");

  async function start() {
    var result = await api.get(
      `${value}&per_page=35&format=json&nojsoncallback=1`
    );

    setValue(result);
  }

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    start();
  }, [value]);

  return (
    <SafeAreaView>
      <TextInput />
      {/* <FlatList/> */}
    </SafeAreaView>
  );
};

export default Search;
