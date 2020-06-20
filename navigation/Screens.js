import React from "react";
import HomeScreen from "../screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
// import CustomDrawerContent from "./Menu";

const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

export default function Onboard(props) {
    return (
        <Stack.Navigator mode="card" headerMode="none">
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                option={{
                    headerTransparent: true
                }}
            />
            {/* <Stack.Screen name="App" component={AppStack} /> */}
        </Stack.Navigator>
    );
}

function AppStack(props) {
    return (
        <Drawer.Navigator
            style={{ flex: 1 }}
            drawerContent={props => <CustomDrawerContent {...props} />}
            drawerStyle={{
                backgroundColor: "white",
                width: width * 0.8
            }}
            drawerContentOptions={{
                activeTintcolor: "white",
                inactiveTintColor: "#000",
                activeBackgroundColor: "transparent",
                itemStyle: {
                    width: width * 0.75,
                    backgroundColor: "transparent",
                    paddingVertical: 16,
                    paddingHorizonal: 12,
                    justifyContent: "center",
                    alignContent: "center",
                    alignItems: "center",
                    overflow: "hidden"
                },
                labelStyle: {
                    fontSize: 18,
                    marginLeft: 12,
                    fontWeight: "normal"
                }
            }}
            initialRouteName="Home"
        >
            <Drawer.Screen name="Home" component={HomeStack} />
            <Drawer.Screen name="Profile" component={ProfileStack} />
            <Drawer.Screen name="Account" component={Register} />
            <Drawer.Screen name="Elements" component={ElementsStack} />
            <Drawer.Screen name="Articles" component={ArticlesStack} />
        </Drawer.Navigator>
    );
}

