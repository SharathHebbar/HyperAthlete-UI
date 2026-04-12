import React from "react";
import { ImageBackground, SafeAreaView, View } from "react-native";

export default function ScreenWrapper({ children }) {
    return (
        <ImageBackground
            source={require("../assets/background_image.png")}
            resizeMode="cover"
            style={{ width: '100%', height: '100%' }}
        >
            <View style={{ flex: 1, padding: 1 }}>{children}</View>
        </ImageBackground>
    );
}
