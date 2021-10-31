import React,{useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView,TextInput,TouchableOpacity} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import Ionic from "react-native-vector-icons/Ionicons";

const Login = () => {
  const navigation = useNavigation();

  const [id,setId] = useState('');
  const [passwd,setPasswd] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.back}>
          <Ionic name="arrow-back" style={{fontSize:25,color:'black'}}/>
      </TouchableOpacity>
      <Text style={{fontSize:25}}>
        Instagram
      </Text>

      <View style={styles.loginContainer}>
        <TextInput style={styles.loginInput} placeholder="이메일 또는 아이디를 입력하세요." value={id} onChangeText={setId}/>
        <TextInput style={styles.loginInput} placeholder="비밀번호를 입력하세요." value={passwd} onChangeText={setPasswd}/>
        <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.push('Home')}>
          <Text style={{color:'white'}}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row',alignItems:'center',paddingVertical:15}}>
        <Text>계정이 없으신가요?</Text>
        <TouchableOpacity onPress={()=>navigation.push('Signup')}>
          <Text style={{color:'#3493D9',marginLeft:4}}>가입하기</Text>
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
  back:{
    position:'absolute',
    top:60,
    left:15,
  },
  loginContainer:{
    width:'100%',
    flexDirection:'column',
    alignItems:'center',
    marginVertical:30,
  },
  loginInput:{
    padding:10,
    width:'80%',
    height:40,
    borderRadius:5,
    borderWidth:1,
    borderColor:'#DEDEDE',
    marginVertical:3
  },
  loginButton:{
    backgroundColor:'#3493D9',
    width:'80%',
    height:40,
    borderRadius:5,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  }
});

export default Login