import React, {useState,useEffect}from "react";
import {View,Text, FlatList, StyleSheet} from "react-native";
import axios from "axios";

const apiURL = "https://asos2.p.rapidapi.com/products/v2/list";

const TestScreen =()=>{
      const [results,setResults] = useState([]);
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
                limit: '48',
            }
        })
        .then((response)=>{
            setResults(response.data.products);
            
        })
        .catch((error => alert(error)))
    },[]);

    return(
        <View>
           <FlatList
           style={styles.itemStyle}
           data={results}
           keyExtractor={({id}) => id}
           renderItem={({item})=>(
               <Text style={styles.textStyle}>
                   
                   {item.id}
                   {item.name}
                   {item.price.current.text}
                   
               </Text>
           )}/>
           
        </View>
    )

           }
           const styles=StyleSheet.create({
             itemStyle:{
                 flexDirection:"column",
                 margin:10,
                borderRadius:20,
                borderWidth:2,
             },
             textStyle:{
                 padding:20,
             }
           })
export default TestScreen;