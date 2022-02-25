import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

const Footer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Entypo name="home" size={24} style={styles.iconStyle} />
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.textStlye}>Home</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Octicons name="three-bars" size={24} style={styles.iconStyle} />
        <TouchableOpacity onPress={() => navigation.navigate("Categories")}>
          <Text style={styles.textStlye}>Categories</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Entypo name="water" size={24} style={styles.iconStyle} />
        <TouchableOpacity onPress={() => navigation.navigate("Brand")}>
          <Text style={styles.textStlye}>Brand</Text>
        </TouchableOpacity>
      </View>
      <View>
        <MaterialCommunityIcons
          name="account-circle-outline"
          size={24}
          style={styles.iconStyle}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Account")}>
          <Text style={styles.textStlye}>Account</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Entypo name="shopping-bag" size={24} style={styles.iconStyle} />
        <TouchableOpacity onPress={() => navigation.navigate("Mybag")}>
          <Text style={styles.textStlye}>My Bag</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    borderRadius: 5,
    padding: 5,
  },
  iconStyle: {
    color: "black",
    marginHorizontal: 15,
    alignSelf: "center",
  },
  textStlye: {
    color: "grey",
    fontSize: 16,
    alignSelf: "center",
  },
});

export default withNavigation(Footer);
