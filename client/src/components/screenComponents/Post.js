import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,TextInput } from 'react-native';
import Feather from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionic from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
const Post = () => {
    const postInfo = [
        {
            userName: 'mr_salmon',
            postPersonImage: require('../../storage/images/userImage.jpeg'),
            postImage: require('../../storage/images/postImage.jpeg'),
            likes:102,
            isLiked:false,
            comments:[{
                commentUserName:'hello',
                commentText:'myname'
            }]
        },
        {
            userName: 'chillhousekr',
            postPersonImage: require('../../storage/images/userImage.jpeg'),
            postImage: require('../../storage/images/postImage.jpeg'),
            likes:236,
            isLiked:false,
            comments:[
                {
                    commentUserName:'hello',
                    commentText:'myname'
                },
                {
                    commentUserName:'black_kr',
                    commentText:'댓글이요'
                },
            ]

        },
        {
            userName: 'hello_world',
            postPersonImage: require('../../storage/images/userImage.jpeg'),
            postImage: require('../../storage/images/postImage.jpeg'),
            likes:70,
            isLiked:false,
            comments:[
                {
                    commentUserName:'hello',
                    commentText:'myname'
                },
                {
                    commentUserName:'black_kr',
                    commentText:'댓글이요'
                },
            ]
        },
        {
            userName: 'gg_root',
            postPersonImage: require('../../storage/images/userImage.jpeg'),
            postImage: require('../../storage/images/postImage.jpeg'),
            likes:7,
            isLiked:false,
            comments:[
                {
                    commentUserName:'groot',
                    commentText:'댓글이요'
                },
            ]
        },
        
    ]

  return (
    <View style={styles.container}>
      {
          postInfo.map((data,index) => {
              const like = data.isLiked;
              return(
                  <View key={index} style={styles.post}>

                    {/* post header*/}
                    <View style={styles.postHeader}>
                        <View style={styles.postProfile}>
                            <Image source={data.postPersonImage} style={styles.postPersonImage}/>
                            <View>
                                <Text style={styles.userName}>
                                    {data.userName}
                                </Text>
                            </View>
                        </View>
                        <Feather name="more-vertical" style={styles.more}/>
                    </View>

                    {/* post image */}
                    <View style={{
                        position:'relative',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>
                        <Image source={data.postImage} style={styles.postImage}/>
                    </View>

                    {/* Icon list */}
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:12,paddingVertical:15}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <TouchableOpacity>
                                <AntDesign 
                                    name={like ? 'heart' : 'hearto'} 
                                    style={{
                                        paddingRight:10,
                                        fontSize:20,
                                        color:like ? 'red':'black',
                                    }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Ionic name="ios-chatbubble-outline" style={{fontSize:20,paddingRight:10}}/>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Feather name="navigation" style={{fontSize:20}}/>
                            </TouchableOpacity>
                        </View>
                        <Feather name="bookmark" style={{fontSize:20}}/>
                    </View>

                    {/* likes */}
                    <View style={{paddingHorizontal:15}}>
                        <Text>
                            Liked by {like ? "you and" : ''}
                            {like ? data.likes + 1 : data.likes} others
                        </Text>
                        <Text 
                        style={{
                        fontSize:14,
                        paddingTop:5,
                        flexDirection:'row',
                        alignItems:'center'
                        }}>
                            <Text style={{fontWeight:'700'}}>{data.userName}</Text>
                            <Text style={{marginLeft:10}}>게시물입니다~~~게시물입니다~~~게시물입니다~~~게시물입니다~~~게시물입니다~~~게시물입니다~~~</Text>
                        </Text>

                        {/* comment list*/}
                        <Text style={{opacity:0.4,paddingVertical:3}}>
                            View all comments
                        </Text>
                        <View style={{flexDirection:'column'}}>
                        {
                            data.comments.map((comment,index) => {
                                return (
                                    <Text key={index} style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={{fontWeight:'700'}}>{comment.commentUserName}</Text>
                                        <Text style={{paddingHorizontal:10}}>{comment.commentText}</Text>
                                    </Text>
                                )
                            })
                        }
                        </View>

                        {/* comment input*/}
                        <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:15}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image 
                                source={data.postPersonImage} 
                                style={{width:25,height:25,borderRadius:100,backgroundColor:'orange',marginRight:10}}
                                />
                                <TextInput placeholder="Add a comment" style={{opacity:0.5}} />
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Entypo name="emoji-happy" style={{fontSize:15,color:'lightgreen',marginRight:10}}/>
                                <Entypo name="emoji-neutral" style={{fontSize:15,color:'pink',marginRight:10}}/>
                                <Entypo name="emoji-sad" style={{fontSize:15,color:'red'}}/>
                             </View>
                        </View>
                    </View>
                  </View>
              )
          })
      }
    </View>
  );
}

const styles = StyleSheet.create({
    post:{
        paddingBottom:10,
        borderBottomColor:'gray',
        borderBottomWidth:0.1,
    },
    postHeader:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:15
    },
    postProfile:{
        flexDirection:'row',
        alignItems:'center',
    },
    more:{
        fontSize:20
    },
    postPersonImage:{
        width:40,
        height:40,
        borderRadius:100,
        marginRight:10
    },
    userName:{
        fontSize:15,
        fontWeight:'bold'
    },
    postImage:{
        width:'100%',
        height:400

    }
    
});

export default Post