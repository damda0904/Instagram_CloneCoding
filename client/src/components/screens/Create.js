import React from 'react'
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity  } from 'react-native'
import Ionic from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";

const Create = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView >
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionic name="arrow-back" style={{fontSize:20,color:'black'}}/>
            </TouchableOpacity>
            <Text>create</Text>
        </SafeAreaView >
    )
}

export default Create
