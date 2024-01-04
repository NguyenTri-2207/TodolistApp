import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./components/template/home";
import Profiles from "./components/template/profile";
import Cart from "./components/template/cart";

import Promo from "./components/template/promo";

import { StyleSheet, View } from "react-native";
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Tab.Navigator
          initialRouteName="Feed"
          screenOptions={{
            tabBarActiveTintColor: "#e91e66",
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Cart"
            component={Cart}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="cart-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Promo" 
            component={Promo}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="card-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Profiles"
            component={Profiles}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="people-outline" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
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
