import React,{useState} from 'react';
import { StyleSheet, Text, View,SafeAreaView,TextInput,TouchableOpacity} from 'react-native';
import {useNavigation} from "@react-navigation/native";

const Signup = () => {
  const navigation = useNavigation();

  const [email,setEmail] = useState('');
  const [id,setId] = useState('');
  const [name,setName] = useState('');
  const [passwd,setPasswd] = useState('');
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:25}}>
        Instagram
      </Text>
      <Text  style={{fontSize:18,marginTop:10,color:'#555555'}}>친구들의 사진과 동영상을 보려면 가입하세요.</Text>

      <View style={styles.signupContainer}>
        <TextInput style={styles.signupInput} placeholder="휴대폰 번호 또는 이메일 주소" value={email} onChangeText={setEmail}/>
        <TextInput style={styles.signupInput} placeholder="성명" value={id} onChangeText={setId}/>
        <TextInput style={styles.signupInput} placeholder="사용자 이름" value={name} onChangeText={setName}/>
        <TextInput style={styles.signupInput} placeholder="비밀번호를 입력하세요" value={passwd} onChangeText={setPasswd}/>
        <TouchableOpacity style={styles.signupButton} onPress={()=>navigation.push('Profile')}>
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