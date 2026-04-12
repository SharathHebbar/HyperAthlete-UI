import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import long_logo from "../assets/long_logo.png";
import login_image from "../assets/login_image.svg";
import theme from "../constants/theme";

const navItems = [
    { label: "ABOUT", route: "About" },
    { label: "PDP", route: "PDP" },
    { label: "FAQS", route: "FAQs" },
];

export default function TopNavbar() {
    const navigation = useNavigation();

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Image source={long_logo} style={styles.logo} resizeMode="contain" />
            </TouchableOpacity>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexGrow: 1,
                }}
            >
                <View style={styles.nav}>
                    {navItems.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => navigation.navigate(item.route)}
                        >
                            <Text style={styles.navText}>{item.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

            <View style={styles.rightButtons}>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.signupText}>SIGN UP</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => navigation.navigate("Login")}
                >
                    <Image
                        source={login_image}
                        style={styles.loginImage}
                        resizeMode="cover"
                    />
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        position: "relative",
        borderRadius: 16,
        height: 72,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 24,
        paddingRight: 8,
        backgroundColor: "rgba(4, 7, 7, 0.7)",
        backdropFilter: "blur(20px)",
        zIndex: 100,
    },
    logo: {
        width: 200,
        height: 50,
    },
    nav: {
        flexDirection: "row",
        gap: 48,
        justifyContent: "center",
    },
    navText: {
        color: "rgba(200,216,216,1)",
        fontFamily: theme.FONTS.tomorrowSemiBold,
        fontSize: theme.FONT_SIZES.body,
    },
    rightButtons: {
        flexDirection: "row",
        alignItems: "center",
        gap: 48,
    },
    signupText: {
        color: "rgba(221,255,0,1)",
        fontFamily: theme.FONTS.tomorrowSemiBold,
        fontSize: theme.FONT_SIZES.body,
    },
    loginButton: {
        width: 176,
        height: 56,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
    },
    loginImage: {
        position: "absolute",
        width: "100%",
        height: "100%",
    },
    loginText: {
        color: theme.COLORS.primary,
        fontFamily: theme.FONTS.tomorrowBold,
        fontSize: theme.FONT_SIZES.body,
    },
});
