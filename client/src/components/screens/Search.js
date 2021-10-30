import React from 'react';
import { StyleSheet, Text, View, ScrollView,TouchableOpacity,SafeAreaView } from 'react-native';
import SearchBox from '../screenComponents/SearchBox';
import SearchContent from '../screenComponents/SearchContent';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBox/>
        <SearchContent/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    backgroundColor:'white',
    position:'relative'
  }
});

export default Search