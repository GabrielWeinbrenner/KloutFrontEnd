import React, { useState } from "react";
import { Image } from "react-native";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import { Block, GalioProvider } from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";

// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";
enableScreens();
import Theme from './constants/Theme';
import Screens from "./navigation/Screens";


export default props => {
  const [isLoadingComplete, setLoading] = useState(false);


  function _loadResourcesAsync() {
    return Promise.all([...cacheImages(assetImages)]);
  }

  function _handleLoadingError(error) {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  function _handleFinishLoading() {
    setLoading(true);
  };

  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={_loadResourcesAsync}
        onError={_handleLoadingError}
        onFinish={_handleFinishLoading}
      />
    );
  } else {
    return (
      <NavigationContainer>
        <GalioProvider theme={Theme}>
          <Block flex>
            <Screens />
          </Block>
        </GalioProvider>
      </NavigationContainer>
    );
  }
}

