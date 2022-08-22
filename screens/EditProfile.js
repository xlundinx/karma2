import React from 'react';
import { StatusBar } from 'expo-status-bar';
import UploadImage from './../components/UploadImage';

import {
    InnerContainer,
    StyledFormArea,
    StyledButton,
    ButtonText,
    StyledContainerW,
    SettingsTitle
} from './../components/styles';

const EditProfile = ({navigation}) => {
    return (
        <StyledContainerW>
            <StatusBar style="dark"/>
            <InnerContainer>
                <SettingsTitle header={true}>
                    Edit profile
                </SettingsTitle>
                <UploadImage/>
                <InnerContainer>
                    <SettingsTitle>Name Name</SettingsTitle>
                </InnerContainer>
                <StyledFormArea welcome={true}>
                    <StyledButton onPress={() => {navigation.navigate("Profile")}}>
                        <ButtonText>Profile</ButtonText>
                    </StyledButton>
                </StyledFormArea>
            </InnerContainer>
        </StyledContainerW>
    );
};
/*
const ProfileEditData = ({name, dob, gender, weight, height, label, isName}) => {
    return (
    <>
 
      {!isName && 

      }

      {isName && (
 
      )}    

    </>
    )
  };
*/
export default EditProfile;