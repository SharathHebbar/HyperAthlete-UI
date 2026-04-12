import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "rgba(4, 7, 7, 0.92)",
  },

  heroSection: {
    flex: 1,
    minHeight: 720,
    position: "relative",
    overflow: "hidden",
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

  heroGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  gridGlow: {
    position: "absolute",
    borderColor: "rgba(221, 255, 0, 0.18)",
    backgroundColor: "rgba(221, 255, 0, 0.06)",
    shadowColor: theme.COLORS.primary,
  },

  gridGlowDesktop: {
    top: 110,
    right: -80,
    width: 360,
    height: 360,
    borderRadius: 180,
    shadowOpacity: 0.3,
    shadowRadius: 40,
  },

  gridGlowMobile: {
    top: 80,
    right: -90,
    width: 220,
    height: 220,
    borderRadius: 110,
    shadowOpacity: 0.22,
    shadowRadius: 30,
  },

  heroContent: {
    flex: 1,
    paddingHorizontal: 72,
    paddingTop: 56,
    paddingBottom: 56,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 40,
  },

  heroContentCompact: {
    paddingHorizontal: 28,
    paddingTop: 36,
    paddingBottom: 40,
    flexDirection: "column",
    alignItems: "flex-start",
  },

  heroContentMobile: {
    paddingHorizontal: 20,
    gap: 24,
  },

  copyColumn: {
    flex: 1.15,
    maxWidth: 760,
  },

  copyColumnCompact: {
    maxWidth: "100%",
    width: "100%",
  },

  kickerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 22,
  },

  kickerDot: {
    width: 20,
    height: 20,
    borderRadius: 999,
    backgroundColor: theme.COLORS.primary,
  },

  kickerText: {
    color: theme.COLORS.primary,
    fontFamily: theme.FONTS.tomorrowSemiBold,
    fontSize: 32,
    letterSpacing: 2.2,
  },

  heroLogo: {
    width: 540,
    height: 125,
    marginLeft: -8,
  },

  heroLogoCompact: {
    width: 420,
    height: 100,
    marginLeft: 0,
  },

  heroLogoMobile: {
    width: "100%",
    maxWidth: 320,
    height: 84,
  },

  heroTitle: {
    color: theme.COLORS.white,
    fontFamily: theme.FONTS.tomorrowBold,
    fontSize: 56,
    lineHeight: 62,
    maxWidth: 700,
    textTransform: "uppercase",
    marginTop: 18,
  },

  heroTitleCompact: {
    fontSize: 42,
    lineHeight: 48,
    maxWidth: 560,
  },

  heroTitleMobile: {
    fontSize: 30,
    lineHeight: 36,
  },

  heroDescription: {
    color: "rgba(214, 229, 229, 0.82)",
    fontFamily: theme.FONTS.spaceGroteskRegular,
    fontSize: 18,
    lineHeight: 30,
    maxWidth: 580,
    marginTop: 20,
  },

  heroDescriptionCompact: {
    fontSize: 16,
    lineHeight: 27,
    maxWidth: "100%",
  },

  actionsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    marginTop: 32,
  },

  actionsRowMobile: {
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
  },

  primaryButton: {
    backgroundColor: theme.COLORS.primary,
    minHeight: 58,
    paddingHorizontal: 26,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: theme.COLORS.primary,
    shadowOpacity: 0.28,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
  },

  primaryButtonText: {
    color: "rgba(4, 7, 7, 1)",
    fontFamily: theme.FONTS.tomorrowBold,
    fontSize: 15,
    letterSpacing: 1,
  },

  secondaryButton: {
    minHeight: 58,
    paddingHorizontal: 24,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "rgba(232, 242, 242, 0.22)",
    backgroundColor: "rgba(255, 255, 255, 0.06)",
    justifyContent: "center",
    alignItems: "center",
  },

  secondaryButtonText: {
    color: theme.COLORS.white,
    fontFamily: theme.FONTS.tomorrowSemiBold,
    fontSize: 15,
    letterSpacing: 1,
  },

  buttonMobile: {
    width: "100%",
  },

  featurePanel: {
    width: 360,
    padding: 26,
    borderRadius: 28,
    backgroundColor: "rgba(10, 16, 18, 0.72)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.12)",
    alignSelf: "stretch",
    justifyContent: "center",
  },

  featurePanelCompact: {
    width: "100%",
    maxWidth: 560,
    alignSelf: "stretch",
  },

  featurePanelMobile: {
    padding: 20,
    borderRadius: 22,
  },

  panelEyebrow: {
    color: theme.COLORS.primary,
    fontFamily: theme.FONTS.tomorrowSemiBold,
    fontSize: 12,
    letterSpacing: 1.8,
    textTransform: "uppercase",
  },

  panelTitle: {
    color: theme.COLORS.white,
    fontFamily: theme.FONTS.spaceGroteskBold,
    fontSize: 28,
    lineHeight: 36,
    marginTop: 14,
  },

  pointList: {
    marginTop: 24,
    gap: 14,
  },

  pointRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  pointIconWrap: {
    width: 28,
    height: 28,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.COLORS.primary,
  },

  pointText: {
    color: "rgba(226, 239, 239, 0.92)",
    fontFamily: theme.FONTS.spaceGroteskMedium,
    fontSize: 16,
  },

  quoteCard: {
    marginTop: 28,
    paddingTop: 18,
    borderTopWidth: 1,
    borderTopColor: "rgba(255, 255, 255, 0.12)",
  },

  quoteInlineRow: {
    marginTop: 8,
  },

  quoteMark: {
    color: theme.COLORS.primary,
    fontFamily: theme.FONTS.tomorrowBold,
    fontSize: 28,
    lineHeight: 29,
  },

  quoteText: {
    color: "rgba(214, 229, 229, 0.84)",
    fontFamily: theme.FONTS.spaceGroteskMedium,
    fontSize: 17,
    lineHeight: 29,
    letterSpacing: 0.2,
  },
});

export default styles;
