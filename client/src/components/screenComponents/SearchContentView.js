import React from 'react';
import { StyleSheet, Text, View, TextInput,SafeAreaView,Image,TouchableOpacity } from 'react-native';
import Feather from "react-native-vector-icons/Feather"
import AntDesign from "react-native-vector-icons/AntDesign"
import Ionic from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

const SearchContentView = (props) => {
    const contentData = {
        userName: 'mr_salmon',
        userImage: require('../../storage/images/userImage.jpeg'),
        postImage: require('../../storage/images/postImage.jpeg'),
        postDesc:'게시물을 등록했습니다~~',
        likes:102,
        isLiked:false,
        comments:[{
            commentUserName:'hello',
            commentText:'myname'
        }]
    }

    const like = contentData.isLiked;

    return (
        <SafeAreaView style={styles.container}>
            {/* post header*/}
            <View style={styles.postHeader}>
                <View style={styles.userInfo}>
                    <Image source={contentData.userImage} style={styles.userImage}/>
                    <Text style={styles.userName}>{contentData.userName}</Text>
                </View>
                <Feather name="more-vertical" style={styles.more}/>
            </View>

            {/* post image*/}
            <View style={styles.imageContainer}>
                <Image source={contentData.postImage} style={styles.postImage}/>
            </View>

            {/* Icon list */}
            <View style={styles.iconWrapper}>
                <View style={styles.iconLeft}>
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
                    {like ? contentData.likes + 1 : contentData.likes} others
                </Text>
                <Text 
                style={{
                fontSize:14,
                paddingTop:5,
                flexDirection:'row',
                alignItems:'center'
                }}>
                    <Text style={{fontWeight:'700'}}>{contentData.userName}</Text>
                    <Text style={{marginLeft:10}}>{contentData.postDesc}</Text>
                </Text>
            </View>

            {/* comment list*/}
            <Text style={styles.viewComments}>
                View all comments
            </Text>
            <View style={{flexDirection:'column'}}>
            {
                contentData.comments.map((comment,index) => {
                    return (
                        <Text key={index} style={styles.commentList}>
                            <Text style={{fontWeight:'700'}}>{comment.commentUserName}</Text>
                            <Text style={{paddingLeft:10}}>{comment.commentText}</Text>
                        </Text>
                    )
                })
            }
            </View>

            {/* comment input*/}
            <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:15,paddingHorizontal:15}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image 
                    source={contentData.userImage} 
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
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
        position:'absolute',
        top:0,
        zIndex:5,
    },
    postHeader:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:15
    },
    userInfo:{
        flexDirection:'row',
        alignItems:'center',
    },
    more:{
        fontSize:20
    },
    userImage:{
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

    },
    iconWrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:12,
        paddingVertical:15
    },
    iconLeft:{
        flexDirection:'row',
        alignItems:'center'
    },
    viewComments:{
        opacity:0.4,
        paddingVertical:5,
        paddingHorizontal:15
    },
    commentList:{
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:15
    }

});

export default SearchContentView