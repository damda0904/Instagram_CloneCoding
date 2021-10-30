import React from 'react';
import { Text, View, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { ProfileBody,ProfileButtons } from '../screenComponents/ProfileBody';
import BottomTabView from '../screenComponents/BottomTabView';
const Profile = () => {
  return (
    <SafeAreaView style={{width:'100%',height:'100%',backgroundColor:'white'}}>
      <View style={{width:'100%',padding:10}}>
        <ProfileBody name="chaewon" accountName="chxxwn" profileImage={require('../../storage/images/userImage.jpeg')} post="458" followers="3.3k" following="332"/>
        <ProfileButtons id={0} name="chaewon" accountName="chxxwn" profileImage={require('../../storage/images/userImage.jpeg')}/>
      </View>
      <BottomTabView />
    </SafeAreaView>
  );
}

export default Profile