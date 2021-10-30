import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView,Image } from 'react-native';
import {FriendsProfileData} from '../screenComponents/Database';
import AntDesign from "react-native-vector-icons/AntDesign"
import {useNavigation} from "@react-navigation/native";

const Activity = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{width:'100%',height:'100%',backgroundColor:'white'}}>
        <Text style={{
          fontSize:20,
          fontWeight:'bold',
          borderBottomWidth:0.5,
          borderBottomColor:'#DEDEDE',
          padding:10,
        }}>
          활동
        </Text>
        <ScrollView style={{
          margin:10
        }} showsVerticalScrollIndicator={false}>
          <Text style={{fontWeight:'bold'}}>이번 주</Text>
          <View style={{flexDirection:'row',paddingVertical:10}}>
            {FriendsProfileData.slice(0,3).map((data,index)=>{
              return(
                <TouchableOpacity onPress={()=>navigation.push('FriendProfile',{
                  name:data.name,
                  profileImage:data.profileImage,
                  follow:data.follow,
                  post:data.posts,
                  followers:data.followers,
                  following:data.following
                })} key={index}>
                  <Text>{data.name}, </Text>
                </TouchableOpacity>
              )
            })}
            <Text>님이 회원님을 팔로우합니다.</Text>
          </View>
          <Text style={{fontWeight:'bold'}}>이번 달</Text>
          {
            FriendsProfileData.slice(3,6).map((data,index)=>{
              const [follow,setFollow] = useState(data.follow)
              return(
                <View key={index} style={{width:'100%'}}>
                  <View style={{
                    flexDirection:'row',
                    justifyContent:'space-between',
                    alignItems:'center',
                    paddingVertical:20,
                    width:'100%',
                  }}>
                    <TouchableOpacity style={{
                      flexDirection:'row',
                      justifyContent:'space-between',
                      alignItems:'center',
                      maxWidth:'64%'
                    }}>
                      <Image source={data.profileImage} 
                        style={{
                          width:45,
                          height:45,
                          borderRadius:100,
                          marginRight:10}} />
                      <Text style={{fontSize:15}}>
                        회원님이 알 수도 있는 <Text style={{fontWeight:'bold'}}>{data.name}</Text>님이 Instagram을 사용중입니다.
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setFollow(!follow)} style={{width:72}}>
                      <View style={{
                        width:'100%',
                        height:30,
                        borderColor: follow ? '#DEDEDE' : null,
                        borderRadius:5,
                        backgroundColor:follow ? null : '#3493D9',
                        borderWidth: follow ? 1 : 0,
                        justifyContent:'center',
                        alignItems:'center',
                      }}>
                        <Text style={{
                          color: follow ? 'black' : 'white'
                        }}>
                          {follow ? "팔로잉" : "팔로우"}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              )
            })}
            <Text style={{fontWeight:'bold',paddingVertical:10}}>
              회원님을 위한 추천
            </Text>
            {
              FriendsProfileData.slice(6,12).map((data,index)=>{
                const [follow,setFollow] = useState(data.follow)
                const [close,setClose] = useState(false);

                return(
                  <View key={index}>
                    { close ? null :
                      (
                        <View 
                          style={
                            {paddingVertical:10,
                            flexDirection:'row',
                            width:'100%',
                            justifyContent:'space-between'
                        }}>
                          <View>
                            <TouchableOpacity style={{flexDirection:'row',alignItems:'center',maxWidth:'64%'}}>
                              <Image source={data.profileImage} style={{width:45,height:45,borderRadius:100,marginRight:10}}/>
                              <View style={{width:'100%'}}>
                                <Text style={{fontSize:14,fontWeight:'bold'}}>{data.name}</Text>
                                <Text style={{fontSize:12,opacity:0.5}}>{data.accountName}</Text>
                                <Text style={{fontSize:12,opacity:0.5}}>suggested for you</Text>
                              </View>
                            </TouchableOpacity>
                          </View>
                          <View style={{flexDirection:'row',alignItems:'center'}}>
                            {follow ? (
                              <TouchableOpacity onPress={()=>setFollow(!follow)} style={{width:72}}>
                                <View style={{
                                  width:'100%',
                                  height:30,
                                  borderColor: follow ? '#DEDEDE' : null,
                                  borderRadius:5,
                                  backgroundColor:follow ? null : '#3493D9',
                                  borderWidth: follow ? 1 : 0,
                                  justifyContent:'center',
                                  alignItems:'center',
                                }}>
                                  <Text style={{color:follow ? "black" : "white"}}>
                                    {follow ? '팔로잉' : '팔로우'}
                                  </Text>
                                </View>
                              </TouchableOpacity>
                            ):(
                              <>
                              <TouchableOpacity onPress={()=>setFollow(!follow)} style={{width:72}}>
                                <View style={{
                                  width:'100%',
                                  height:30,
                                  borderColor: follow ? '#DEDEDE' : null,
                                  borderRadius:5,
                                  backgroundColor:follow ? null : '#3493D9',
                                  borderWidth: follow ? 1 : 0,
                                  justifyContent:'center',
                                  alignItems:'center',
                                }}>
                                  <Text style={{color:follow ? "black" : "white"}}>
                                      {follow ? '팔로잉' : '팔로우'}
                                  </Text>
                                </View>
                              </TouchableOpacity>
                              <TouchableOpacity onPress={()=>setClose(true)}>
                                <AntDesign name="close" style={{fontSize:14,color:'black',opacity:0.8,marginLeft:10}}/>
                              </TouchableOpacity>
                              </>
                              )
                            }
                          </View>
                        </View>
                      )}
                  </View>
                )
              })}
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default Activity