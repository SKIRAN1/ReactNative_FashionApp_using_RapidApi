import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Appbar } from "react-native-paper";

const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewStyle2}>
        <Text>Women's Fashion</Text>
        <AntDesign name="arrowright" size={24} color="black" />
      </View>
      <View style={styles.viewStyle2}>
        <Text>Men's Fashion</Text>
        <AntDesign name="arrowright" size={24} color="black" />
      </View>
      <View style={styles.viewStyle2}>
        <Text>Kid's Fashion</Text>
        <AntDesign name="arrowright" size={24} color="black" />
      </View>
      <View style={styles.viewStyle2}>
        <Text>Beauty</Text>
        <AntDesign name="arrowright" size={24} color="black" />
      </View>
      <View style={styles.viewStyle2}>
        <Text>Jewellary</Text>
        <AntDesign name="arrowright" size={24} color="black" />
      </View>
      <View style={styles.viewStyle2}>
        <Text>Home Furnishings</Text>
        <AntDesign name="arrowright" size={24} color="black" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  viewStyle1: {
    flex: 1,
  },
  viewStyle2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 12,
  },
  viewStyle3: {
    flexDirection: "row",
  },
});

export default CategoriesScreen;
