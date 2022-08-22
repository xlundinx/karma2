import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
// keyboard avoiding view
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';

import {
    StyledContainer,
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText
} from './../components/styles';

const SignupProfileStart = ({navigation}) => {
  return (
      <KeyboardAvoidingWrapper>
    <StyledContainer style={styles.container}>
        <StatusBar style="dark"/>
        <InnerContainer>
            <PageTitle>
                <PageTitle bold={true}>
                You are almost ready
                to start your first 
                workout.
                </PageTitle>
            </PageTitle>
            <SubTitle center={true}>
            LETS GET YOU STARTED.{'\n'}{'\n'}

            Karmarunner will keep track of your efforts
            everytime you use our app. And because we want
            you to have the best posible experience, we would
            like to get some more information about you.{'\n'}{'\n'}

            The data will be used for various calculations to
            optimize your experience while exercising.{'\n'}{'\n'}

            It will not be shared with anybody and is only
            visible to you.
            </SubTitle>

            <StyledFormArea welcome={true}>
                <StyledButton onPress={() => {navigation.navigate("SignupProfileSettings")}}>
                    <ButtonText>Sure! Let’s go</ButtonText>
                </StyledButton>
            </StyledFormArea>

        </InnerContainer>
    </StyledContainer>
    </KeyboardAvoidingWrapper>

  );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 120,
    },
   });

export default SignupProfileStart;