import theme from "../../constants/theme";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        borderRadius: 16,
        overflow: "hidden",
    },

    heroSection: {
        flex: 1,
        position: "relative",
    },
    heroBackground: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
    },
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        height: 50, // Must have a height or flex value to be visible
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heroGradient: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

    heroContent: {
        flex: 1,
        paddingLeft: 72,
        paddingTop: 72,
        paddingBottom: 40,
        justifyContent: "space-between",
    },

    headingContainer: {
        maxWidth: 480,
    },
    headingLine: {
        color: theme.COLORS.white,
        fontFamily: theme.FONTS.tomorrowRegular,
        fontSize: theme.FONT_SIZES.h1,
        textTransform: "uppercase",
        fontStyle: "italic",
    },
    headingAccent: {
        color: theme.COLORS.white,
        fontFamily: theme.FONTS.tomorrowBold,
        fontSize: theme.FONT_SIZES.h1,
        fontStyle: "italic",
        textTransform: "uppercase",
    },
    heroDescription: {
        color: "rgba(200, 216, 216, 0.85)",
        fontFamily: theme.FONTS.spaceGroteskRegular,
        fontSize: theme.FONT_SIZES.body,
        maxWidth: 420,
        marginTop: 8,
    },

    playerCardContainer: {
        position: "absolute",
        top: 32,
        right: 0,
    },
    playerCard: {
        width: 160,
        height: 120,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: theme.COLORS.primary,
        overflow: "hidden",
    },
    playerCardImage: {
        width: "100%",
        height: "100%",
    },

    carouselDots: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        gap: 6,
    },
    carouselDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "rgba(255, 255, 255, 0.3)",
    },
    carouselDotActive: {
        width: 20,
        backgroundColor: theme.COLORS.primary,
    },

    testimonialRight: {
        position: "absolute",
        right: 0,
        top: 180,
        backgroundColor: "rgba(40, 45, 45, 0.85)",
        borderRadius: 12,
        padding: 16,
        maxWidth: 320,
        backdropFilter: "blur(10px)",
    },
    testimonialRightRow: {
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 12,
    },
    testimonialRightAvatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
    },
    testimonialRightText: {
        color: "rgba(220, 230, 230, 0.9)",
        fontFamily: theme.FONTS.spaceGroteskRegular,
        fontSize: 12,
        lineHeight: 18,
        flex: 1,
    },
    testimonialRightTextBold: {
        fontFamily: theme.FONTS.spaceGroteskBold,
    },

    testimonialLeft: {
        flexDirection: "row",
        alignItems: "flex-start",
        backgroundColor: "rgba(40, 45, 45, 0.85)",
        borderRadius: 12,
        padding: 16,
        maxWidth: 420,
        gap: 12,
        backdropFilter: "blur(10px)",
    },
    testimonialLeftAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    testimonialLeftText: {
        color: "rgba(220, 230, 230, 0.9)",
        fontFamily: theme.FONTS.spaceGroteskRegular,
        fontSize: 12,
        lineHeight: 18,
        flex: 1,
    },
    testimonialLeftTextBold: {
        fontFamily: theme.FONTS.spaceGroteskBold,
    },

    bottomRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },

    countingBadge: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(40, 45, 45, 0.9)",
        borderRadius: 32,
        paddingVertical: 10,
        paddingHorizontal: 18,
        gap: 12,
        backdropFilter: "blur(10px)",
    },
    countingIconCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: theme.COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    countingIconText: {
        color: theme.COLORS.primary,
        fontFamily: theme.FONTS.tomorrowBold,
        fontSize: 16,
    },
    countingNumber: {
        color: theme.COLORS.white,
        fontFamily: theme.FONTS.tomorrowBold,
        fontSize: 16,
    },
    countingSubtext: {
        color: "rgba(200, 216, 216, 0.7)",
        fontFamily: theme.FONTS.spaceGroteskRegular,
        fontSize: 12,
    },

    ctaSection: {
        alignItems: "center",
        paddingVertical: 32,
        backgroundColor: "rgba(4, 7, 7, 0.8)",
    },
    ctaHeading: {
        color: theme.COLORS.white,
        fontFamily: theme.FONTS.tomorrowBold,
        fontSize: theme.FONT_SIZES.body,
        textTransform: "uppercase",
        letterSpacing: 2,
        marginBottom: 20,
    },
    ctaButton: {
        backgroundColor: theme.COLORS.primary,
        paddingVertical: 14,
        paddingHorizontal: 36,
        borderRadius: 4,
    },
    ctaButtonText: {
        color: "rgba(4, 7, 7, 1)",
        fontFamily: theme.FONTS.tomorrowBold,
        fontSize: theme.FONT_SIZES.body,
        textTransform: "uppercase",
        letterSpacing: 1,
    },

    decorativeDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: theme.COLORS.primary,
        position: "absolute",
    },
});

export default styles;