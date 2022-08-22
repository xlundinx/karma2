import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { StatusBar } from 'expo-status-bar';
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

import {
    InnerContainer,
    SettingsTitle,
    StyledContainerW,
    SettingsLink,
    SettingsLinkContent,
    Colors,
    SettingsIcon,
    SettingsSubContent,
    SettingsIconLeft,
    SView,
} from './../components/styles';

// colors
const {black, white, gray, darkGray} = Colors;



const Settings = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isToggled, setIsToggled] = useState(false);
    const toggleAudio = () => setIsToggled(previousState => !previousState);
    
    return (
        <StyledContainerW>
            <StatusBar style="dark"/>
            <InnerContainer>
                <SettingsTitle header={true}>
                 Settings
                </SettingsTitle>

                <SettingsSub
                    label="Profile"
                    icon="person-outline"
                />
                <SettingsLink onPress={() => navigation.navigate("EditProfile")}>
                    <SettingsLinkContent>Edit Profile</SettingsLinkContent>
                    <SettingsIcon right={true}>
                        <Fontisto name={'angle-right'} size={15} color={darkGray} />
                    </SettingsIcon>
                </SettingsLink>
                <SettingsLink onPress={() => navigation.navigate("")}>
                    <SettingsLinkContent>Change Password</SettingsLinkContent>
                    <SettingsIcon right={true}>
                        <Fontisto name={'angle-right'} size={15} color={darkGray} />
                    </SettingsIcon>
                </SettingsLink>
                <SettingsLink onPress={() => navigation.navigate("")}>
                    <SettingsLinkContent>Account, Apps & Service</SettingsLinkContent>
                    <SettingsIcon right={true}>
                        <Fontisto name={'angle-right'} size={15} color={darkGray} />
                    </SettingsIcon>
                </SettingsLink>

                <SettingsSub 
                    label="Activity Settings"
                    icon="md-analytics"
                />
                <SettingsLink onPress={() => navigation.navigate("")}>
                    <SettingsLinkContent>Auto Pause</SettingsLinkContent>
                    <SettingsIcon switch={true}>
                        <Switch 
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </SettingsIcon>
                </SettingsLink>
                <SettingsLink onPress={() => navigation.navigate("")}>
                    <SettingsLinkContent>Audio</SettingsLinkContent>
                    <SettingsIcon switch={true}>
                        <Switch 
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isToggled ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleAudio}
                            value={isToggled}
                        />
                    </SettingsIcon>
                </SettingsLink>
                <SettingsLink>
                    <SettingsLinkContent>Audio Volume</SettingsLinkContent>

                </SettingsLink>
                <Slider
                        style={{width: 350, height: 40}}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#767577"
                        maximumTrackTintColor="#000000"
                        thumbTintColor="black"
                />
                <SettingsLink onPress={() => navigation.navigate("")}>
                    <SettingsLinkContent>Workout Cues</SettingsLinkContent>
                    <SettingsIcon right={true}>
                        <Fontisto name={'angle-right'} size={15} color={darkGray} />
                    </SettingsIcon>
                </SettingsLink>
                <SettingsLink onPress={() => navigation.navigate("")}>
                    <SettingsLinkContent>Apple Health</SettingsLinkContent>
                    <SettingsIcon right={true}>
                        <Fontisto name={'angle-right'} size={15} color={darkGray} />
                    </SettingsIcon>
                </SettingsLink>
            </InnerContainer>
        </StyledContainerW>
    );
};

const SettingsSub = ({label, icon}) => {
    return (<SView>
        <SettingsIconLeft>
            <Ionicons name={icon} size={20} color={black} />
        </SettingsIconLeft>
        <SettingsSubContent>{label}</SettingsSubContent>
    </SView>)
};

const styles = StyleSheet.create({

  });

export default Settings;