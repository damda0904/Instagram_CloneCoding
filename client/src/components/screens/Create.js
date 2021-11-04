import React,{useState} from 'react'
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity,TextInput,Image } from 'react-native'
import Ionic from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";
import Axios from 'axios';

const Create = () => {
    const navigation = useNavigation();

    
    // const [postImage,setPostImage] = useState('');
    // const [text,setText] = useState('');
    // const [tag,setTag] = useState('');

    const createPost = () => {
        // let postInfo = {
        //     text:text,
        //     postImage:postImage,
        //     hashtag:tag
        // };

        // Axios.post('http://127.0.0.1:8080/post/',postInfo)
        // .then(response=>{
        //     if(response.status == 201){
        //         alert('success create')
        //         navigation.push('bottomTabView')
        //     }else{
        //         alert('fail create')
        //         console.warn(response.status)
        //     }
        // }).catch((error)=>{
        //     alert(error)
        //     console.warn(error)
        // })
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionic name="arrow-back" style={{fontSize:20,color:'black',marginBottom:10,marginLeft:15}}/>
            </TouchableOpacity>
            <View style={styles.inputContainer}>
                {/* <Image style={styles.postImage}/> */}
                <TextInput style={styles.textInput} placeholder="문구 입력..." multiline={true} numberOfLines={4}></TextInput>
                <TextInput style={styles.tagInput} placeholder="해시태그를 입력하세요"></TextInput>
                <TouchableOpacity style={styles.submitButton}>
                    <Text style={{color:'white'}}>등록</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
    },
    inputContainer:{
        alignItems:'center',
        justifyContent:'center'
    },
    postImage:{
        width:'100%',
        height:400,
        backgroundColor:'#CACACA'
    },
    textInput:{
        height:100,
        alignContent:'flex-start',
        width:'100%',
        padding:15,
        borderTopWidth:1,
        borderColor:'#CACACA',
    },
    tagInput:{
        height:35,
        width:'100%',
        paddingHorizontal:15,
        marginTop:5,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'#CACACA',
    },
    submitButton:{
        backgroundColor:'#3493D9',
        width:'80%',
        height:40,
        borderRadius:5,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
    }
});
export default Create
