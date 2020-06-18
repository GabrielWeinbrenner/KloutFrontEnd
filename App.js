import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import AddProduct from "./src/screens/AddProduct";
import BusinessExplanation from "./src/screens/BusinessExplanation";
import BusinessHire from "./src/screens/BusinessHire";
import BusinessHire1 from "./src/screens/BusinessHire1";
import BusinessHireAlt from "./src/screens/BusinessHireAlt";
import BusinessHome from "./src/screens/BusinessHome";
import BusinessHome1 from "./src/screens/BusinessHome1";
import BusinessProducts from "./src/screens/BusinessProducts";
import BusinessSignIn from "./src/screens/BusinessSignIn";
import BusinessSignIn1 from "./src/screens/BusinessSignIn1";
import BusinesssReg from "./src/screens/BusinesssReg";
import GotTheCashapp from "./src/screens/GotTheCashapp";
import InfleuncerHome from "./src/screens/InfleuncerHome";
import InfluencerExplanation from "./src/screens/InfluencerExplanation";
import InfluencerInterestsReg from "./src/screens/InfluencerInterestsReg";
import InfluencerPlatforms from "./src/screens/InfluencerPlatforms";
import InfluencerReg from "./src/screens/InfluencerReg";
import InfluencerReg1 from "./src/screens/InfluencerReg1";
import InfluencerSignIn from "./src/screens/InfluencerSignIn";
import Landing from "./src/screens/Landing";
import Stats from "./src/screens/Stats";
import Untitled from "./src/screens/Untitled";

const DrawerNavigation = createDrawerNavigator({
  AddProduct: AddProduct,
  BusinessExplanation: BusinessExplanation,
  BusinessHire: BusinessHire,
  BusinessHire1: BusinessHire1,
  BusinessHireAlt: BusinessHireAlt,
  BusinessHome: BusinessHome,
  BusinessHome1: BusinessHome1,
  BusinessProducts: BusinessProducts,
  BusinessSignIn: BusinessSignIn,
  BusinessSignIn1: BusinessSignIn1,
  BusinesssReg: BusinesssReg,
  GotTheCashapp: GotTheCashapp,
  InfleuncerHome: InfleuncerHome,
  InfluencerExplanation: InfluencerExplanation,
  InfluencerInterestsReg: InfluencerInterestsReg,
  InfluencerPlatforms: InfluencerPlatforms,
  InfluencerReg: InfluencerReg,
  InfluencerReg1: InfluencerReg1,
  InfluencerSignIn: InfluencerSignIn,
  Landing: Landing,
  Stats: Stats,
  Untitled: Untitled
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    AddProduct: AddProduct,
    BusinessExplanation: BusinessExplanation,
    BusinessHire: BusinessHire,
    BusinessHire1: BusinessHire1,
    BusinessHireAlt: BusinessHireAlt,
    BusinessHome: BusinessHome,
    BusinessHome1: BusinessHome1,
    BusinessProducts: BusinessProducts,
    BusinessSignIn: BusinessSignIn,
    BusinessSignIn1: BusinessSignIn1,
    BusinesssReg: BusinesssReg,
    GotTheCashapp: GotTheCashapp,
    InfleuncerHome: InfleuncerHome,
    InfluencerExplanation: InfluencerExplanation,
    InfluencerInterestsReg: InfluencerInterestsReg,
    InfluencerPlatforms: InfluencerPlatforms,
    InfluencerReg: InfluencerReg,
    InfluencerReg1: InfluencerReg1,
    InfluencerSignIn: InfluencerSignIn,
    Landing: Landing,
    Stats: Stats,
    Untitled: Untitled
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
