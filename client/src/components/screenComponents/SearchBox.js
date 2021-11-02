import React,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView,TextInput } from 'react-native';
import Ionic from "react-native-vector-icons/Ionicons"

const SearchBox = () => {
    const [searchKeyword,setSearchKeyword] = useState("")
    return(
        <View style={styles.container}>
            <Ionic name="search" style={styles.search}/>
            <TextInput placeholder="검색" placeholderTextColor="#909090" style={styles.searchInput} onChangeText={setSearchKeyword} value={searchKeyword}/>
        </View>
    )
}

const styles = StyleSheet.create({
  container:{
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
      width:'96%',
      backgroundColor:'#EBEBEB',
      borderRadius:8,
      alignItems:'center',
      justifyContent:'center',
      fontSize:15,
      padding:8,
      paddingLeft:40
  }
});

export default SearchBox