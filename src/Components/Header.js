import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="reorder-three-outline"
        size={34}
        style={styles.iconStyle}
      />
      <Text style={styles.textStlye}>TRENDY ZONE</Text>
      <EvilIcons name="search" size={34} style={styles.iconStyle} onPress={()=>{}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 45,
    borderRadius: 5,
  },
  iconStyle: {
    color: "black",
    marginHorizontal: 15,
    alignSelf: "center",
  },
  textStlye: {
    color: "grey",
    fontSize: 24,
    alignSelf: "center",
  },
});
export default Header;
