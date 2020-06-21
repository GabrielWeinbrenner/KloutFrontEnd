import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../screens/Landing";
import Register from "../screens/Register";
import Influencerreg from "../screens/Influencerreg";
import Businessreg from "../screens/Businessreg";
import SocialMediaPicker from "../screens/SocialMediaPicker";
import Interests from "../screens/Interests";
import Customization from '../screens/Customization';
import Profile from '../screens/Profile';
const Stack = createStackNavigator();

import Header from '../components/Header';

export default function OnboardingStack(props) {
    return (
        <Stack.Navigator mode="card" headerMode="none">
            <Stack.Screen
                name="Landing"
                component={Landing}
                option={{
                    headerTransparent: true
                }}
            />
            <Stack.Screen name="Register" component={RegisterStack} />
        </Stack.Navigator>
    );
}

function RegisterStack(props){
    return (
        <Stack.Navigator mode="card" headerMode="none">
            <Stack.Screen
                name="RegistrationPick"
                component={Register}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="Register" navigation={navigation} scene={scene} />
                    ),
                    cardStyle: { backgroundColor: "#F8F9FE" }
                }}
            />
            <Stack.Screen
                name="BusinessRegistration"
                component={Businessreg}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header
                            title="Business Registration"
                            back
                            white
                            transparent
                            navigation={navigation}
                            scene={scene}
                        />
                    ),
                    headerTransparent: true
                }}
            />
            <Stack.Screen
                name="InfluencerRegistration"
                component={InfluencerStack}
            />
        </Stack.Navigator>
    )
}
function InfluencerStack(){
    return (
        <Stack.Navigator mode="card" headerMode="none">
            <Stack.Screen
                name="InfluencerStack"
                component={Influencerreg}
            />
            <Stack.Screen
                name="SocialMedia"
                component={SocialMediaPicker}
            />
            <Stack.Screen
                name="Interests"
                component={Interests}
            />
            <Stack.Screen
                name="Customization"
                component={Customization}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileStack}
            />
        </Stack.Navigator>
    )
}
function ProfileStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen
                name="Profile"
                component={Profile}
            />
        </Stack.Navigator>
    )
}