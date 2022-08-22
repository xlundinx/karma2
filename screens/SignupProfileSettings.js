import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, Platform, TouchableOpacity } from 'react-native';
import UploadImage from './../components/UploadImage';
import DropDownPicker from 'react-native-dropdown-picker';
import Constants from 'expo-constants';

// checkbox
import CheckBox from 'expo-checkbox';
// formik
import { Formik } from 'formik';
// icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
// DateTimePicker
import DateTimePicker from '@react-native-community/datetimepicker';
// keyboard avoiding view
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';

import {
    StyledContainer,
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Colors,
    StyledTextInput,
    StyledInputLabel,
    RightText
    
} from './../components/styles';

// colors
const {black, white, darkGray} = Colors;

const SignupProfileSettings = ({navigation}) => {
    const [show, setShow] = useState(false);
    const [date, setDate] = useState(new Date(2000, 0, 1));

    // Actual date of birth to be sent
    const [dob, setDob] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    }

    const showDatePicker = () => {
        setShow(true);
    }
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Male', value: 'male'},
      {label: 'Female', value: 'female'},
      {label: 'Non Binary', value: 'nonbinary'}
    ]);
    return (
    <View style={styles.container}>
        <StatusBar style="dark"/>
        <UploadImage/>
        <Text style={{marginVertical:20,fontSize:16}}>PROFILE SETTINGS</Text>
        {show && (
            <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={onChange}
            />
        )}
        <Formik
            initialValues={{
                firstName: '', lastName: '',
                dateOfBirth: '', gender: '', height: ''
            }}
            onSubmit={(values) => {
                 console.log(values);
                navigation.navigate("SignupProfileStart");
            }}
        >
        {({handleChange, handleBlur, handleSubmit, values}) => 
            <View>
            <SignupSettings 
                label="FULL NAME"
                placeholder="name"
                placeholderTextColor={black}
            />
            
            <MyTextInput
                label="DATE OF BIRTH"
                placeholder="Date Of Birth"
                placeholderTextColor={darkGray}
                onChangeText={handleChange('dateOfBirth')}
                onBlur={handleBlur('dateOfBirth')}
                value={dob ? dob.toDateString() : ''}
                isDate={true}
                editable={false}
                showDatePicker={showDatePicker}
            />

            <Text>GENDER</Text>
            <DropDownPicker
                placeholder='Select Gender'
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />

            <SignupSettings 
                label="WEIGHT"
                placeholder="-"
                placeholderTextColor={black}
                keyboardType='number-pad'
                rightMeasure='KG'
            />
            <SignupSettings 
                label="HEIGHT"
                placeholder="-"
                placeholderTextColor={black}
                keyboardType='number-pad'
                rightMeasure='CM'
            />
            </View>

        }
        </Formik>
        <StyledFormArea welcome={true}>
            <StyledButton onPress={() => {navigation.navigate("Welcome")}}>
                <ButtonText>Save settings</ButtonText>
            </StyledButton>
        </StyledFormArea>
    </View>
    );
}

const SignupSettings = ({label, rightMeasure, ...props}) => {
    return (

        <View>
            <Text>{label}</Text>
            <RightText>{rightMeasure}</RightText>
            <StyledTextInput {...props} />
        </View>

    )
};

const MyTextInput = ({label, isDate, showDatePicker, ...props}) => {
    return (<View>
        <Text>{label}</Text>
        {!isDate && <StyledTextInput {...props} />}
        {isDate && (
            <TouchableOpacity onPress={showDatePicker}>
                <StyledTextInput {...props} />
            </TouchableOpacity>
        )}
    </View>)
};



const styles = StyleSheet.create({
 container: {
   padding:20,
   paddingTop: 120,
   backgroundColor: 'transparent',
   alignItems: 'center',
   justifyContent: 'center',
 },

});

export default SignupProfileSettings;