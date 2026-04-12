import theme from "../../constants/theme";
import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const isLargeScreen = screenWidth >= 1024;


const styles = StyleSheet.create({
    background: {
        width: "100%",
        height: "100%",
        flexDirection: isLargeScreen ? "row" : "column",
        gap: 2
    },
    leftContainer: {
        width: "60%"
    },
    leftContainerData: {
        height: "100%",
        width: "100%"
    },
    imageAnimation: {
        height: "100%",
        width: "100%"
    },
    backgroundImage: {
        height: "100%",
        width: "100%",
        borderRadius: 16,
        overflow: "hidden"
    },
    imageGradient: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "50%"
    },
    slideContent: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 50,
        justifyContent: "end",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    logoStyle: {
        width: 45,
        height: 21,
        resizeMode: "contain",
        marginBottom: 16
    },
    slideTitle: {
        color: theme.COLORS.white,
        fontSize: theme.FONT_SIZES.h4,
        marginBottom: 16,
        textAlign: "center",
        fontFamily: theme.FONTS.tomorrowSemiBold
    },
    slideDescription: {
        color: theme.COLORS.white,
        fontSize: theme.FONT_SIZES.bodySmall,
        textAlign: "center",
        fontFamily: theme.FONTS.spaceGroteskRegular
    },
    slideDots: {
        flexDirection: "row",
        marginTop: 16,
    },
    rightContainer: {
        width: "40%",
        backgroundColor: "rgba(4, 7, 7, 0.7)",
        borderRadius: 16,
        height: "100vh",
    },
    rightContainerData: {
        height: "100%",
        width: "100%",
        borderRadius: 16,
    },
    longLogoStyle: {
        height: 22,
        width: 185,
        resizeMode: "contain",
        alignSelf: "flex-start",
    },
    heading: {
        marginTop: 84,
        fontSize: theme.FONT_SIZES.h4,
        color: theme.COLORS.white,
        fontFamily: theme.FONTS.tomorrowSemiBold,
    },
    subText: {
        fontSize: theme.FONT_SIZES.caption,
        fontFamily: theme.FONTS.spaceGroteskRegular,
        color: theme.COLORS.white,
        marginTop: 17,
        textAlign: "center",
    },
    linkText: {
        color: theme.COLORS.primary,
        fontSize: theme.FONT_SIZES.body,
        fontFamily: theme.FONTS.spaceGroteskBold,
    },
    label: {
        fontSize: theme.FONT_SIZES.bodySmall,
        fontFamily: theme.FONTS.spaceGroteskRegular,
        color: theme.COLORS.white,
        marginBottom: 8,
    },
    input: {
        width: 357,
        height: 44,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "gray",
        paddingHorizontal: 12,
        color: theme.COLORS.white,
        fontFamily: theme.FONTS.spaceGroteskRegular,
        fontSize: theme.FONT_SIZES.body,
    },
    inputError: {
        borderColor: theme.COLORS.red,
    },
    signInButton: {
        width: 357,
        height: 44,
        backgroundColor: theme.COLORS.primary,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 24,
    },
    signInText: {
        fontFamily: theme.FONTS.tomorrowBold,
        fontSize: theme.FONT_SIZES.body,
        color: "rgba(16, 22, 21, 1)",
    },
    forgotPasswordButton: {
        marginTop: 40,
        width: 357,
        alignItems: "center",
    },
    forgotLinkText: {
        color: theme.COLORS.primary,
        fontSize: theme.FONT_SIZES.body,
        fontFamily: theme.FONTS.spaceGroteskRegular,
    },
    dividerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 48,
        width: 357,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: "rgba(167, 167, 167, 1)",
    },
    orText: {
        marginHorizontal: 16,
        color: "rgba(255, 255, 255, 0.7)",
        fontSize: theme.FONT_SIZES.bodySmall,
        fontFamily: theme.FONTS.spaceGroteskRegular,
    },
    socialButtonsContainer: {
        gap: 16,
        marginTop: 40,
        marginBottom: 40,
        fontSize: theme.FONT_SIZES.bodySmall,
        fontFamily: theme.FONTS.spaceGroteskRegular,
    },
    socialButton: {
        width: 357,
        height: 48,
        borderWidth: 1,
        borderColor: "rgba(225, 225, 225, 1)",
        borderRadius: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    socialButtonText: {
        color: theme.COLORS.white,
        fontSize: theme.FONT_SIZES.bodySmall,
        fontFamily: theme.FONTS.spaceGroteskRegular,
    },
    notificationBanner: {
        position: "absolute",
        top: 70,
        left: "50%",
        transform: [{ translateX: -243 }],
        width: 486,
        backgroundColor: "rgba(4, 7, 7, 0.7)",
        borderRadius: 16,
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 16,
        backdropFilter: "blur(20px)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 1000,
    },
    notificationContent: {
        flex: 1,
        marginRight: 12,
    },
    notificationTitle: {
        color: theme.COLORS.white,
        fontSize: theme.FONT_SIZES.body,
        fontFamily: theme.FONTS.spaceGroteskBold,
        marginBottom: 4,
    },
    notificationSubtitle: {
        color: theme.COLORS.white,
        fontSize: theme.FONT_SIZES.bodySmall,
        fontFamily: theme.FONTS.spaceGroteskRegular,
    },
    notificationActions: {
        flexDirection: "row",
        alignItems: "center",
        gap: 24,
    },
    signUpButton: {
        backgroundColor: theme.COLORS.primary,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 4,
    },
    signUpButtonText: {
        color: "rgba(16, 22, 21, 1)",
        fontSize: theme.FONT_SIZES.body,
        fontFamily: theme.FONTS.tomorrowBold,
    },
    closeButton: {
        color: theme.COLORS.white,
        padding: 4,
    },
    errorText: {
        paddingHorizontal: 16,
        color: theme.COLORS.red,
        fontSize: theme.FONT_SIZES.caption,
        fontFamily: theme.FONTS.spaceGroteskRegular,
        marginTop: 4,
    },
});

export default styles;