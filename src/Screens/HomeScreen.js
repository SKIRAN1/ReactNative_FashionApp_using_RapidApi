import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import axios from "axios";
import ItemDetail from "../Components/ItemDetail";


const apiURL = "https://asos2.p.rapidapi.com/products/v2/list";


const HomeScreen = () => {
  const [products, setProducts] = useState([]);
 useEffect(()=>{
  console.log("Hello");
axios.get(apiURL,{
    headers:{
        'x-rapidapi-host': 'asos2.p.rapidapi.com',
        'x-rapidapi-key': 'd1707efb26msh0df8d1f7da7d695p1e0d46jsn1a6b76995e50'
    },
    params:{
        store: 'US',
        offset: '0',
        categoryId: '4208',
        limit: '8',
    }
})
.then((response)=>{
    setProducts(response.data.products);
    
})
.catch((error => alert(error)))
},[]);


  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.viewStyle1}>
        <Text>Hello</Text>
        <FlatList
           data={products}
           keyExtractor={(product) => product.id}
           renderItem={({item})=>{
               return(
                   <ItemDetail product={item}/>
               );
      
           }}
           />
      </View>
      <Footer />
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
});

export default HomeScreen;
