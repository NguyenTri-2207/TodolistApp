import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import images from "../../assets/background.png";

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Text style={styles.welcomeText}>Welcome to BBCIncorp</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("Button pressed")}
          >
            <Text style={styles.buttonText}>Add Newss</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  welcomeText: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
    marginTop: 180,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 180,
  },
  button: {
    backgroundColor: "#3498db",
    width: 200,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
