import React from 'react';
import { StyleSheet, Text, View, ScrollView,TextInput } from 'react-native';
import Ionic from "react-native-vector-icons/Ionicons"

const SearchBox = () => {
    return(
        <View style={styles.container}>
            <Ionic name="search" style={styles.search}/>
            <TextInput placeholder="Search" placeholderTextColor="#909090" style={styles.searchInput}/>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
    marginTop:40,
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    paddingVertical:10,
    position:'relative',
  },
  search:{
      fontSize:18,
      opacity:0.7,
      position:'absolute',
      zIndex:1,
      left:25,
  },
  searchInput:{
      width:'94%',
      backgroundColor:'#EBEBEB',
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
      fontSize:15,
      padding:5,
      paddingLeft:40
  }
});

export default SearchBox