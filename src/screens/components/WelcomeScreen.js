import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  useWindowDimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome6 } from "@expo/vector-icons";

import TopNavbar from "../../components/TopNavbar";
import styles from "../classes/WelcomeScreenClass";

import heroBackground from "../../assets/football_player_1_Copy.png";
import longLogo from "../../assets/long_logo.png";

const highlightPoints = [
  "Train with purpose",
  "Build your athlete identity",
  "Turn discipline into momentum",
];

export default function WelcomeScreen({ navigation }) {
  const { width } = useWindowDimensions();
  const isCompact = width < 900;
  const isMobile = width < 640;
  const heroOpacity = useRef(new Animated.Value(0)).current;
  const badgeTranslate = useRef(new Animated.Value(18)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(heroOpacity, {
        toValue: 1,
        duration: 650,
        useNativeDriver: true,
      }),
      Animated.spring(badgeTranslate, {
        toValue: 0,
        tension: 55,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();
  }, [badgeTranslate, heroOpacity]);

  return (
    <View style={styles.container}>
      {/* <TopNavbar /> */}

      <View style={styles.heroSection}>
        <Animated.Image
          source={heroBackground}
          resizeMode=""
          style={[styles.heroBackground, { opacity: heroOpacity }]}
        />

        <LinearGradient
          colors={[
            "rgba(2, 5, 6, 0.35)",
            "rgba(4, 7, 7, 0.8)",
            "rgba(4, 7, 7, 0.98)",
          ]}
          locations={[0.12, 0.56, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.heroGradient}
        />

        <View
          style={[
            styles.gridGlow,
            isMobile ? styles.gridGlowMobile : styles.gridGlowDesktop,
          ]}
        />

        <View
          style={[
            styles.heroContent,
            isCompact && styles.heroContentCompact,
            isMobile && styles.heroContentMobile,
          ]}
        >
          <Animated.View
            style={[
              styles.copyColumn,
              isCompact && styles.copyColumnCompact,
              { opacity: heroOpacity },
            ]}
          >
            <View style={styles.kickerRow}>
              {/* <View style={styles.kickerDot} /> */}
              <Text style={styles.kickerText}>WELCOME TO HYPERATHLETE</Text>
            </View>

            <Image
              source={longLogo}
              resizeMode="contain"
              style={[
                styles.heroLogo,
                isCompact && styles.heroLogoCompact,
                isMobile && styles.heroLogoMobile,
              ]}
            />

            <Text
              style={[
                styles.heroTitle,
                isCompact && styles.heroTitleCompact,
                isMobile && styles.heroTitleMobile,
              ]}
            >
              Where athletes{"\n"}train louder than limits.
            </Text>

            <Text
              style={[
                styles.heroDescription,
                isCompact && styles.heroDescriptionCompact,
              ]}
            >
              Build your routine, sharpen your mindset, and show up with the
              confidence of someone who knows exactly what they are chasing.
            </Text>

            {/* <View
              style={[
                styles.actionsRow,
                isMobile && styles.actionsRowMobile,
              ]}
            >
              <TouchableOpacity
                style={[
                  styles.primaryButton,
                  isMobile && styles.buttonMobile,
                ]}
                onPress={() => navigation.navigate("Signup")}
              >
                <Text style={styles.primaryButtonText}>START YOUR JOURNEY</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.secondaryButton,
                  isMobile && styles.buttonMobile,
                ]}
                onPress={() => navigation.navigate("Home")}
              >
                <Text style={styles.secondaryButtonText}>ENTER HOME</Text>
              </TouchableOpacity>
            </View> */}
          </Animated.View>

          <Animated.View
            style={[
              styles.featurePanel,
              isCompact && styles.featurePanelCompact,
              isMobile && styles.featurePanelMobile,
              {
                opacity: heroOpacity,
                transform: [{ translateY: badgeTranslate }],
              },
            ]}
          >
            <Text style={styles.panelEyebrow}>Built for daily momentum</Text>
            <Text style={styles.panelTitle}>
              Big goals deserve a home screen that feels like game day.
            </Text>

            <View style={styles.pointList}>
              {highlightPoints.map((point) => (
                <View key={point} style={styles.pointRow}>
                  <View style={styles.pointIconWrap}>
                    <FontAwesome6
                      name="bolt-lightning"
                      size={12}
                      color="rgba(4, 7, 7, 1)"
                    />
                  </View>
                  <Text style={styles.pointText}>{point}</Text>
                </View>
              ))}
            </View>

            <View style={styles.quoteCard}>
              <View style={styles.quoteInlineRow}>
                <Text style={styles.quoteText}>
                  <Text style={styles.quoteMark}>“</Text>
                  Every session is a vote for the athlete you are becoming.
                  <Text style={styles.quoteMark}>”</Text>
                </Text>
              </View>
            </View>
          </Animated.View>
        </View>
      </View>
    </View>
  );
}
