import theme from "../../constants/theme";
import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
    // Main Container
    container: {
        flex: 1,
        flexDirection: "row",
    },

    // Left Sidebar
    leftSidebar: {
        width: 200,
        backgroundColor: "#0f1414",
        paddingTop: 24,
        paddingHorizontal: 16,
        borderRightWidth: 1,
        borderRightColor: "rgba(255, 255, 255, 0.1)",
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 40,
        paddingHorizontal: 8,
    },
    navItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 8,
        marginBottom: 4,
    },
    navItemActive: {
        backgroundColor: theme.COLORS.bg,
    },
    navIcon: {
        marginRight: 12,
    },
    navText: {
        color: theme.COLORS.white,
        fontSize: theme.FONT_SIZES.body,
        fontFamily: theme.FONTS.spaceGroteskRegular,
    },
    navTextActive: {
        color: theme.COLORS.primary,
        fontFamily: theme.FONTS.spaceGroteskSemiBold,
    },

    // Main Content Area
    mainContent: {
        flex: 1,
        flexDirection: "row",
    },

    // Center - Feed Section
    centerContent: {
        flex: 1,
        paddingTop: 20,
    },
    feedHeader: {
        paddingHorizontal: 24,
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: theme.COLORS.primary,
    },
    feedHeaderTop: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    feedTitle: {
        color: theme.COLORS.white,
        fontSize: theme.FONT_SIZES.h5,
        fontFamily: theme.FONTS.tomorrowSemiBold,
    },
    headerIcons: {
        flexDirection: "row",
        gap: 12,
    },
    headerIconBtn: {
        width: 40,
        height: 40,
        borderRadius: 8,
        backgroundColor: theme.COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
    },
    feedTabs: {
        flexDirection: "row",
        gap: 16,
        marginBottom: 20,
    },
    tabButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 6,
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "transparent",
    },
    tabButtonActive: {
        backgroundColor: "rgba(221, 255, 0, 0.1)",
        borderColor: theme.COLORS.primary,
    },
    tabText: {
        color: theme.COLORS.white,
        fontSize: theme.FONT_SIZES.body,
        fontFamily: theme.FONTS.spaceGroteskRegular,
    },
    tabTextActive: {
        color: theme.COLORS.primary,
        fontFamily: theme.FONTS.spaceGroteskSemiBold,
    },
    createPostBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: theme.COLORS.primary,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: "flex-end",
    },
    createPostText: {
        color: theme.COLORS.primary,
        fontSize: theme.FONT_SIZES.body,
        fontFamily: theme.FONTS.spaceGroteskSemiBold,
        marginRight: 8,
    },

    // Posts Section
    postsSection: {
        paddingHorizontal: 24,
        paddingTop: 20,
    },
    postsTitle: {
        color: theme.COLORS.white,
        fontSize: theme.FONT_SIZES.bodyLarge,
        fontFamily: theme.FONTS.spaceGroteskSemiBold,
        marginBottom: 16,
    },

    // Post Card
    postCard: {
        backgroundColor: "#141919",
        borderRadius: 12,
        marginBottom: 16,
        overflow: "hidden",
    },
    postHeader: {
        flexDirection: "row",
        alignItems: "center",
        padding: 12,
    },
    postAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    postAuthorInfo: {
        flex: 1,
    },
    postAuthorName: {
        color: theme.COLORS.white,
        fontSize: theme.FONT_SIZES.body,
        fontFamily: theme.FONTS.spaceGroteskSemiBold,
    },
    postAuthorLocation: {
        color: theme.COLORS.greenGray,
        fontSize: theme.FONT_SIZES.caption,
        fontFamily: theme.FONTS.spaceGroteskRegular,
    },
    postMoreBtn: {
        padding: 8,
    },
    postContent: {
        paddingHorizontal: 12,
        paddingBottom: 8,
    },
    postText: {
        color: theme.COLORS.white,
        fontSize: theme.FONT_SIZES.body,
        fontFamily: theme.FONTS.spaceGroteskRegular,
        marginBottom: 12,
    },
    postImage: {
        width: "100%",
        height: 320,
        resizeMode: "cover",
        borderRadius: 8,
    },
    postActions: {
        flexDirection: "row",
        padding: 12,
        gap: 16,
    },
    actionBtn: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 20,
    },
    actionText: {
        color: theme.COLORS.white,
        fontSize: theme.FONT_SIZES.caption,
        fontFamily: theme.FONTS.spaceGroteskMedium,
        marginLeft: 6,
    },

    // Comments
    commentSection: {
        paddingHorizontal: 12,
        paddingBottom: 12,
        borderTopWidth: 1,
        borderTopColor: "rgba(255, 255, 255, 0.05)",
        paddingTop: 12,
    },
    commentItem: {
        flexDirection: "row",
        marginBottom: 12,
    },
    commentAvatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        marginRight: 8,
    },
    commentContent: {
        flex: 1,
    },
    commentAuthor: {
        color: theme.COLORS.white,
        fontSize: theme.FONT_SIZES.caption,
        fontFamily: theme.FONTS.spaceGroteskSemiBold,
        marginBottom: 2,
    },
    commentText: {
        color: theme.COLORS.greenGray,
        fontSize: theme.FONT_SIZES.caption,
        fontFamily: theme.FONTS.spaceGroteskRegular,
        lineHeight: 16,
    },
    viewMoreComments: {
        color: theme.COLORS.greenGray,
        fontSize: theme.FONT_SIZES.caption,
        fontFamily: theme.FONTS.spaceGroteskMedium,
        textAlign: "left",
        paddingVertical: 8,
    },
    replyInput: {
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 10,
        color: theme.COLORS.greenGray,
        fontSize: theme.FONT_SIZES.caption,
        fontFamily: theme.FONTS.spaceGroteskRegular,
        marginTop: 8,
    },

    // Right Sidebar
    rightSidebar: {
        width: 280,
        backgroundColor: "#0f1414",
        padding: 24,
        borderLeftWidth: 1,
        borderLeftColor: "rgba(255, 255, 255, 0.1)",
    },

    // Trending Section
    trendingHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    trendingTitle: {
        color: theme.COLORS.white,
        fontSize: theme.FONT_SIZES.bodyLarge,
        fontFamily: theme.FONTS.spaceGroteskSemiBold,
        marginLeft: 8,
    },
    trendingItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(255, 255, 255, 0.05)",
    },
    trendingInfo: {
        flex: 1,
    },
    trendingName: {
        color: theme.COLORS.white,
        fontSize: theme.FONT_SIZES.body,
        fontFamily: theme.FONTS.spaceGroteskMedium,
        marginBottom: 4,
    },
    trendingPosts: {
        color: theme.COLORS.greenGray,
        fontSize: theme.FONT_SIZES.caption,
        fontFamily: theme.FONTS.spaceGroteskRegular,
    },
    trendingPercentContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    trendingPercent: {
        fontSize: theme.FONT_SIZES.caption,
        fontFamily: theme.FONTS.spaceGroteskSemiBold,
        marginLeft: 4,
    },
    trendingUp: {
        color: theme.COLORS.green,
    },
    trendingDown: {
        color: theme.COLORS.red,
    },

    // Who to Follow Section
    followTitle: {
        color: theme.COLORS.white,
        fontSize: theme.FONT_SIZES.bodyLarge,
        fontFamily: theme.FONTS.spaceGroteskSemiBold,
        marginTop: 28,
        marginBottom: 16,
    },
    followItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
    },
    followAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    followInfo: {
        flex: 1,
    },
    followName: {
        color: theme.COLORS.white,
        fontSize: theme.FONT_SIZES.body,
        fontFamily: theme.FONTS.spaceGroteskMedium,
        marginBottom: 2,
    },
    followHandle: {
        color: theme.COLORS.greenGray,
        fontSize: theme.FONT_SIZES.caption,
        fontFamily: theme.FONTS.spaceGroteskRegular,
    },
    followBtn: {
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.3)",
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 16,
    },
    followBtnText: {
        color: theme.COLORS.white,
        fontSize: theme.FONT_SIZES.caption,
        fontFamily: theme.FONTS.spaceGroteskMedium,
    },
});

export default styles;
