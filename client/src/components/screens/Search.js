import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBox from '../screenComponents/SearchBox';
import SearchContent from '../screenComponents/SearchContent';

const Search = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SearchBox/>
        <SearchContent/>
      </ScrollView>
    </View>
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