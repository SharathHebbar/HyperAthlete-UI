import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome6 } from "@expo/vector-icons";

import TopNavbar from "../../components/TopNavbar";
import styles from "../classes/HomeScreenClass";

import hero_background from "../../assets/football_player_1.png";
import player_card_image from "../../assets/hero_background_2.png";
import testimonial_avatar from "../../assets/testimonial_avatar.png";

// Each slide has a background (full hero) and a card (top-right thumbnail)
const carouselSlides = [
  {
    background: hero_background,
    card: hero_background,
  },
  {
    background: player_card_image,
    card: player_card_image,
  },
];

export default function HomeScreen({ navigation }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  // Auto-slide carousel with fade transition
  useEffect(() => {
    const interval = setInterval(() => {
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
      ]).start();

      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, [fadeAnim]);

  const handleDotPress = (idx) => {
    if (idx === currentSlide) return;
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
    setTimeout(() => setCurrentSlide(idx), 300);
  };

  return (
    <View style={styles.container}>
      <TopNavbar />
      <ScrollView
        style={{ flex: 1, borderRadius: 16 }}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.heroSection}>
          <Animated.View style={[styles.heroBackground, { opacity: fadeAnim }]}>
            <ImageBackground
              key={currentSlide}
              source={carouselSlides[currentSlide].background}
              style={{ width: "100%", height: "100%" }}
              resizeMode="cover"
            >
              <View style={{ flex: 1, backgroundColor: "rgba(4, 7, 7, 0.55)" }} />
            </ImageBackground>
          </Animated.View>
          <LinearGradient
            colors={["transparent", "rgba(4, 7, 7, 0.5)", "rgba(4, 7, 7, 1)"]}
            locations={[0.7, 0.8, 1.0]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            style={styles.heroGradient}

          />

          <View style={styles.heroContent}>
            <View style={{ position: "relative" }}>
              <View style={styles.headingContainer}>
                <Text style={styles.headingLine}>UNLOCK YOUR TRUE</Text>
                <Text style={styles.headingAccent}>POTENTIAL</Text>
                <Text style={styles.heroDescription}>
                  Lorem ipsum dolor sit amet consectetur. Purus feugiat turpis
                  accumsan sagittis nam eget faucibus. Sit dolor et nunc massa
                  sagittis pharetra at. Nulla nisi ut cras natoque in vestibulum
                  mi. Diam adipiscing porttitor mattis vitae ac et. Aliquet
                  massa vitae nam.
                </Text>
              </View>


              {/* <View style={styles.playerCardContainer}>
                <Animated.View style={[styles.playerCard, { opacity: fadeAnim }]}>
                  <Image
                    source={carouselSlides[currentSlide].card}
                    style={styles.playerCardImage}
                    resizeMode="cover"
                  />
                </Animated.View>
                <View style={styles.carouselDots}>
                  {carouselSlides.map((_, idx) => (
                    <TouchableOpacity
                      key={idx}
                      onPress={() => handleDotPress(idx)}
                      style={[
                        styles.carouselDot,
                        currentSlide === idx && styles.carouselDotActive,
                      ]}
                    />
                  ))}
                </View>
              </View> */}

              {/* <View style={styles.testimonialRight}>
                <View style={styles.testimonialRightRow}>
                  <Image
                    source={testimonial_avatar}
                    style={styles.testimonialRightAvatar}
                    resizeMode="cover"
                  />
                  <Text style={styles.testimonialRightText}>
                    Lorem ipsum dolor{" "}
                    <Text style={styles.testimonialRightTextBold}>
                      sit amet consectetur. Purus feugiat turpis accumsan
                      sagittis nam eget faucibus.
                    </Text>{" "}
                    Sit dolor et nunc massa sagittis pharetra at.
                  </Text>
                </View>
              </View> */}
            </View>

            {/* <View style={styles.bottomRow}>
              <View style={styles.testimonialLeft}>
                <Image
                  source={testimonial_avatar}
                  style={styles.testimonialLeftAvatar}
                  resizeMode="cover"
                />
                <Text style={styles.testimonialLeftText}>
                  Lorem ipsum dolor sit amet consectetur. Purus feugiat turpis
                  accumsan sagittis nam eget faucibus. Sit dolor et nunc massa
                  sagittis pharetra at.
                </Text>
              </View>

              <View style={styles.countingBadge}>
                <View style={styles.countingIconCircle}>
                  <FontAwesome6 name="users" size={14} color="rgba(4,7,7,1)" />
                </View>
                <View>
                  <Text style={styles.countingNumber}>
                    12,000 and counting
                  </Text>
                  <Text style={styles.countingSubtext}>
                    people are already on Hyperathlete!
                  </Text>
                </View>
              </View>
            </View> */}
          </View>
        </View>
        {/* 
        <View style={styles.ctaSection}>
          <Text style={styles.ctaHeading}>
            SIGN UP AND START EXPLORING
          </Text>
          <TouchableOpacity
            style={styles.ctaButton}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.ctaButtonText}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
    </View>
  );
}