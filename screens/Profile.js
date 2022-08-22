import React from 'react';
import { StatusBar } from 'expo-status-bar';
// icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
import { View, StyleSheet, Text, Platform, TouchableOpacity } from 'react-native';

import {
    InnerContainer,
    Avatar,
    StyledContainerW,
    SocialWrapper,
    SocialContainer,
    SocialContent,
    SocialContentTitle,
    Colors,
    UserDataContainer,
    UserNameContent,
    UserDataContent,
    PageTitleB,
    SocialMenuContainer,
} from './../components/styles';

// colors
const {black, white, darkGray} = Colors;

const Profile = ({navigation}) => {
    return (
        <StyledContainerW topup={true}>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageTitleB>
                  <PageTitleB bold={true}>karma</PageTitleB>runner
                </PageTitleB>
                <UserData 
                  name="First Second"
                  age="xx"
                  height="xxx"
                  gender="MALE"
                />
               
                <SocialWrapper>
                  <SocialStats
                    number="263" 
                    label="WORKOUTS"
                  />
                  <SocialStats
                    number="26" 
                    label="FOLLOWERS"
                  />
                  <SocialStats
                    number="137" 
                    label="FOLLOWING"
                  />
                  <SocialStats
                    isFavorite={true}
                    label="FAVORITE"
                  />
                </SocialWrapper>

                
            </InnerContainer>
        </StyledContainerW>
    );
};

const SocialStats = ({isFavorite, number, label}) => {
  return (
  <SocialContainer>
    {!isFavorite && 
    <SocialContent>
      {number}
    </SocialContent>}
    {isFavorite && (
      <SocialContent icon={true}>
        <Ionicons name={'md-eye'} size={25} color={darkGray} />
      </SocialContent>  
    )}    
    <SocialContentTitle>
      {label}
    </SocialContentTitle>
  </SocialContainer>
  )
};

/*
const ProfileMenu = ({isKarma, icon, label, navigation}) => {
  return (
  <View>
    {!isKarma && 
      <SocialMenuContainer onPress={() => navigation.navigate('Settings')}>
      <SocialContent icon={true}>
        <Ionicons name={icon} size={25} color={darkGray} />
      </SocialContent>    
    <SocialContentTitle>
      {label}
    </SocialContentTitle>
    </SocialMenuContainer>
    } 
    {isKarma && 
      <SocialMenuContainer onPress={() => navigation.navigate('Settings')}>
      <SocialContent icon={true}>
        <Ionicons name={icon} size={25} color={darkGray} />
      </SocialContent>    
    <SocialContentTitle>
      {label}
    </SocialContentTitle>
    </SocialMenuContainer>
    } 
  </View>  
  )
};
*/

const UserData = ({name, age, height, gender}) => {
  return (
    <UserDataContainer>
      <Avatar resizeMode="cover" source={require('./../assets/img/Fry2.jpg')}/>
      <UserNameContent>{name}</UserNameContent>
      <UserDataContent>{age} - {height}CM - {gender}</UserDataContent>
    </UserDataContainer>
  )
};


export default Profile;