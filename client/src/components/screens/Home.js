import React from 'react';
import { StyleSheet, StatusBar, Text, View, ScrollView } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"
import Post from '../screenComponents/Post';

const Home = () => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" animatied={true}/>
        <View style={styles.headerBar}>
            <FontAwesome name="plus-square-o" style={styles.plusSquare}/>
            <Text style={styles.title}>Instagram</Text>
            <Feather name="navigation" style={styles.feather}/>
        </View>
        <ScrollView>
            <Post/>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        height:'100%'
    },
    headerBar:{
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:15,
        padding:15,
        marginTop:40,
        alignItems:'center',
    },
    plusSquare:{
        fontSize:24
    },
    title:{
        fontSize:25,
        fontWeight:"500",
    },
    feather:{
        fontSize:24,
    }
});

export default Home