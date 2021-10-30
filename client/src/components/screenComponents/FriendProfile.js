import React from 'react'
import { View, Text, SafeAreaView,TouchableOpacity } from 'react-native'
import Ionic from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import {ProfileBody,ProfileButtons} from './ProfileBody';
import {useNavigation} from "@react-navigation/native";
const FriendProfile = ({route}) => {
    const {name,profileImage,follow,post,followers,following} = route.params;
    const navigation = useNavigation();
    return (
        <SafeAreaView 
            style={{
                width:'100%',
                height:'100%',
                backgroundColor:'white',
                padding:10,
            }}>
            <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:15}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionic name="arrow-back" style={{fontSize:20,color:'black'}}/>
                </TouchableOpacity>
                <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    width:'92%'
                }}>
                    <Text style={{fontSize:15,marginLeft:10, fontWeight:'bold'}}>{name}</Text>
                    <Feather name="more-vertical" style={{fontSize:20, color:'black'}}/>
                </View>
            </View>
            <ProfileBody name={name} profileImage={profileImage} post={post} followers={followers} following={following}/>
            <ProfileButtons id={1} />
        </SafeAreaView>
    )
}

export default FriendProfile
