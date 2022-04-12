import React, { useState } from "react";
import Home from "./screens/Home";
import { Image, View, ScrollView } from "react-native";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import AppLoading from "expo-app-loading";

const getFonts = () => Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

const getImage = async () => {
  const images = [
    require("./assets/flower.jpg"),
    require("./assets/flower2.jpg"),
    require("./assets/flower3.jpg"),
  ];
  const cacheImages = images.map((image) => {
    return Asset.fromModule(image).downloadAsync();
  });
  return Promise.all(cacheImages);
};

export default function App() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <View>
        <ScrollView>
          <Home />
          <Image source={require("./assets/flower.jpg")} />
          <Image source={require("./assets/flower2.jpg")} />
          <Image source={require("./assets/flower3.jpg")} />
        </ScrollView>
      </View>
    );
  }
  return (
    <AppLoading
      startAsync={(getImage, getFonts)}
      onFinish={() => setLoaded(true)}
      onError={console.warn}
    />
  );
}
