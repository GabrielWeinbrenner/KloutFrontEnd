import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../screens/Landing";
import Register from "../screens/Register";
import Influencerreg from "../screens/Influencerreg";
import Businessreg from "../screens/Businessreg";

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
                component={Influencerreg}
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