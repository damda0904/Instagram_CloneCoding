import React from 'react';
import { StyleSheet, StatusBar, Text, View, ScrollView, SafeAreaView } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Feather from "react-native-vector-icons/Feather"
import Post from '../screenComponents/Post';
import {useNavigation} from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" animatied={true}/>
            <View style={styles.headerBar}>
                <FontAwesome name="plus-square-o" onPress={()=>navigation.push('Create')} style={styles.plusSquare}/>
                <Text style={{fontSize:25,fontWeight:"500"}}>Instagram</Text>
                <Feather name="navigation" style={styles.feather}/>
            </View>
            <ScrollView>
                <Post/>
            </ScrollView>
        </SafeAreaView>
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
        alignItems:'center',
    },
    plusSquare:{
        fontSize:24
    },
    feather:{
        fontSize:24,
    }
});

export default Home