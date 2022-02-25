import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const itemDetail = ({product})=>{
return(
    <View style={styles.container}>
    <Image style={styles.image} source={{ uri: product.imageUrl }} />
    <Text>{product.name}</Text>
    <Text>
      {product.price.current.text}
    </Text>
  </View>
)
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
      },
      image: {
        width: "100%",
        height: 200,
        borderRadius: 4,
        marginBottom: 5,
      },
      name: {
        fontWeight: "bold",
      },
})

export default itemDetail;