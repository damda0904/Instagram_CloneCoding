import React,{useState,useRef} from 'react';
import { StyleSheet, Text, View,SafeAreaView,TextInput,TouchableOpacity,Alert} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import "json-circular-stringify";
import Axios from 'axios';

const Signup = () => {
  const navigation = useNavigation();

  const [id,setId] = useState('');
  const [name,setName] = useState('');
  const [username,setUsername] = useState('');
  const [passwd,setPasswd] = useState('');
  
  const sendSignup = () => {
    let signupInfo = {
      userId:id,
      name:name,
      username:username,
      password:passwd,
      profile:null
    };

    // fetch('http://localhost:8080/auth/signup',{
    //   method:'POST',
    //   body:signupInfo
    // })
    // // .then(response => response.json())
    // .then((response) => {
    //     if(response.success === true){
    //       alert('success!!')
    //       navigation.push('Login')
    //     }else{
    //       alert(`fail:${response.status}`)
    //     }
    // }).catch((error)=>{
    //   alert(`error:${error}`);
    // })

    Axios.post('http://127.0.0.1:8080/auth/signup',signupInfo)
    .then(response=>{
      if(response.status == 201){
        alert('success signup')
        navigation.push('Login')
      }else{
        alert('fail signup')
        console.warn(response.status)
      }
    }).catch((error)=>{
      alert(error)
      console.warn(error)
    })
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:25}}>
        Instagram
      </Text>
      <Text  style={{fontSize:18,marginTop:10,color:'#555555'}}>친구들의 사진과 동영상을 보려면 가입하세요.</Text>

      <View style={styles.signupContainer}>
        <TextInput style={styles.signupInput} placeholder="아이디" value={id} onChangeText={setId}/>
        <TextInput style={styles.signupInput} placeholder="성명" value={name} onChangeText={setName}/>
        <TextInput style={styles.signupInput} placeholder="사용자 이름" value={username} onChangeText={setUsername}/>
        <TextInput style={styles.signupInput} placeholder="비밀번호를 입력하세요" value={passwd} onChangeText={setPasswd}/>
        <TouchableOpacity style={styles.signupButton} onPress={()=>sendSignup()}>
          <Text style={{color:'white'}}>가입하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
  },
  signupContainer:{
    width:'100%',
    flexDirection:'column',
    alignItems:'center',
    marginVertical:30,
  },
  signupInput:{
    padding:10,
    width:'80%',
    height:40,
    borderRadius:5,
    borderWidth:1,
    borderColor:'#DEDEDE',
    marginVertical:3
  },
  signupButton:{
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

export default Signup