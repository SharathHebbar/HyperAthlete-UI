import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import { FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import long_logo from "../../assets/long_logo.png";
import logo from "../../assets/logo.png";
import football_player_1 from "../../assets/football_player_1.png";
import styles from "../classes/LoginScreenClass";

export default function LoginScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  // Hardcoded database for testing
  const users = [
    { email: "user@example.com", password: "password123" },
    { email: "test@hyperathlete.com", password: "test123" },
    { email: "demo@test.com", password: "demo123" }
  ];

  const handleEmailSubmit = () => {
    if (!email.trim()) return;

    if (users.find(user => user.email === email.toLowerCase())) {
      setShowPassword(true);
      setShowNotification(false);
      setEmailError(false);
    } else {
      setShowNotification(true);
      setEmailError(true);
    }
  };

  const handleLogin = () => {
    const user = users.find(u => u.email === email.toLowerCase() && u.password === password);
    if (user) {
      navigation.navigate("Feed");
    } else {
      alert("Invalid password");
    }
  };

  const slides = [
    {
      image: football_player_1,
      title: "One platform for all things football",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eget suscipit nulla dolor nunc mauris lacus non id viverra.",
    },
    {
      image: {
        uri: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      title: "Track your performance",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eget suscipit nulla dolor nunc mauris lacus non id viverra.",
    },
    {
      image: {
        uri: "https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg?auto=compress&cs=tinysrgb&w=1200",
      },
      title: "Connect with coaches",
      description:
        "Lorem ipsum dolor sit amet consectetur. Eget suscipit nulla dolor nunc mauris lacus non id viverra.",
    },
  ];

  // Auto-slide with fade transition
  useEffect(() => {
    const interval = setInterval(() => {
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

      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length, fadeAnim]);

  return (
    <View style={styles.background}>
      <View style={styles.leftContainer}>
        <View style={styles.leftContainerData}>
          <Animated.View style={[
            { opacity: fadeAnim },
            styles.imageAnimation
          ]}>
            <ImageBackground
              key={currentSlide}
              source={slides[currentSlide].image}
              style={styles.backgroundImage}
            >
              <LinearGradient
                colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
                style={styles.imageGradient}
              />
              <View style={styles.slideContent}>
                <Image
                  source={logo}
                  style={styles.logoStyle}
                />
                <Text style={styles.slideTitle}>{slides[currentSlide].title}</Text>
                <Text style={styles.slideDescription}>{slides[currentSlide].description}</Text>
                <View style={styles.slideDots}>
                  {slides.map((_, idx) => (
                    <TouchableOpacity
                      key={idx}
                      onPress={() => setCurrentSlide(idx)}
                      style={{
                        height: 8,
                        borderRadius: 4,
                        width: currentSlide === idx ? 24 : 8,
                        backgroundColor:
                          currentSlide === idx
                            ? "rgba(255,255,255,1)"
                            : "rgba(255,255,255,0.3)",
                        marginHorizontal: 4,
                      }}
                    />
                  ))}
                </View>
              </View>
            </ImageBackground>
          </Animated.View>
        </View>
      </View>
      <View style={styles.rightContainer}>
        {showNotification && (
          <View style={styles.notificationBanner}>
            <FontAwesome6 name="circle-exclamation" size={16} color="rgba(239, 112, 112, 1)" style={{ marginRight: 14 }} />
            <View style={styles.notificationContent}>
              <Text style={styles.notificationTitle}>Email address is not registered!</Text>
              <Text style={styles.notificationSubtitle}>Sign up to continue on the platform</Text>
            </View>
            <View style={styles.notificationActions}>
              <TouchableOpacity
                style={styles.signUpButton}
                onPress={() => navigation.navigate("Signup", { email })}
              >
                <Text style={styles.signUpButtonText}>Sign up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                  setShowNotification(false);
                  setEmailError(false);
                }}
              >
                <FontAwesome6 name="xmark" size={16} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        <BlurView intensity={20} tint="dark" style={styles.rightContainerData}>
          <ScrollView
            contentContainerStyle={{
              alignItems: "start",
              paddingTop: 169,
              paddingHorizontal: 72,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Image
                source={long_logo}
                style={styles.longLogoStyle}
              />
            </TouchableOpacity>
            <Text style={styles.heading}>HEY, WELCOME BACK!</Text>
            <Text style={styles.subText}>
              New here?{" "}
              <Text
                style={styles.linkText}
                onPress={() => navigation.navigate("Signup")}
              >
                Sign up
              </Text>{" "}
              for free.
            </Text>
            <View style={{ marginTop: 56 }}>
              <Text style={styles.label}>Email Address</Text>
              <View style={{ position: 'relative' }}>
                <TextInput
                  value={email}
                  onChangeText={(text) => {
                    setEmail(text);
                    if (emailError) {
                      setEmailError(false);
                      setShowNotification(false);
                    }
                  }}
                  placeholder="Enter email address"
                  placeholderTextColor="rgba(121, 121, 121, 1)"
                  style={[styles.input]}
                  onSubmitEditing={handleEmailSubmit}
                  returnKeyType="next"
                />
                {emailError && (
                  <FontAwesome6
                    name="circle-exclamation"
                    size={16}
                    color="#ff6b6b"
                    style={{ position: 'absolute', right: 12, top: 14 }}
                  />
                )}
              </View>
              {emailError && (
                <Text style={styles.errorText}>Entered email address is not registered</Text>
              )}

              {showPassword && (
                <>
                  <Text style={[styles.label, { marginTop: 24 }]}>Password</Text>
                  <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter your password"
                    placeholderTextColor="rgba(121, 121, 121, 1)"
                    secureTextEntry
                    style={styles.input}
                    returnKeyType="done"
                  />
                </>
              )}
            </View>
            <TouchableOpacity
              style={styles.signInButton}
              onPress={showPassword ? handleLogin : handleEmailSubmit}
            >
              <Text style={styles.signInText}>{showPassword ? "SIGN IN" : "CONTINUE"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.forgotPasswordButton}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text style={styles.forgotLinkText}>Forgot password?</Text>
            </TouchableOpacity>

            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.orText}>OR</Text>
              <View style={styles.divider} />
            </View>
            <View style={styles.socialButtonsContainer}>
              {[
                { iconType: "google", text: "Continue with Google" },
                { iconType: "x-twitter", text: "Continue with Twitter" },
                { iconType: "facebook", text: "Continue with Facebook" },
              ].map((item, i) => (
                <TouchableOpacity key={i} style={styles.socialButton}>
                  <FontAwesome6
                    name={item.iconType}
                    size={18}
                    color="white"
                    style={{ marginRight: 10 }}
                  />
                  <Text style={styles.socialButtonText}>
                    {item.text}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </BlurView>
      </View>
    </View>
  );
}

