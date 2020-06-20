import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../screens/Landing";
import Register from "../screens/Register";
import Influencerreg from "../screens/Influencerreg";
import Businessreg from "../screens/Businessreg";
import SocialMediaPicker from "../screens/SocialMediaPicker";
import Interests from "../screens/Interests";


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
                options={{
                    header: ({ navigation, scene }) => (
                        <Header
                            title="Influencer Registration"
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
        </Stack.Navigator>
    )
}
function InfluencerStack(){
    return (
        <Stack.Navigator mode="card" headerMode="none">
            <Stack.Screen
                name="InfluencerStack"
                component={Influencerreg}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="Influencer Stack" navigation={navigation} scene={scene} />
                    ),
                    cardStyle: { backgroundColor: "#F8F9FE" }
                }}
            />
            <Stack.Screen
                name="SocialMedia"
                component={SocialMediaStack}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header
                            title="Social Media"
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
        </Stack.Navigator>
    )
}
function SocialMediaStack(){
    return (
        <Stack.Navigator mode="card" headerMode="none">
            <Stack.Screen
                name="SocialMedia"
                component={SocialMediaPicker}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="Social Media" navigation={navigation} scene={scene} />
                    ),
                    cardStyle: { backgroundColor: "#F8F9FE" }
                }}
            />
            <Stack.Screen
                name="Interests"
                component={InterestsStack}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="Social Media" navigation={navigation} scene={scene} />
                    ),
                    cardStyle: { backgroundColor: "#F8F9FE" }
                }}
            />
        </Stack.Navigator>
    )
}

function InterestsStack() {
    return (
        <Stack.Navigator mode="card" headerMode="none">
            <Stack.Screen
                name="Interests"
                component={Interests}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header title="Interests" navigation={navigation} scene={scene} />
                    ),
                    cardStyle: { backgroundColor: "#F8F9FE" }
                }}
            />
        </Stack.Navigator>
    )
}