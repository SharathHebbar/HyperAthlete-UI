import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "../classes/FeedScreenClass";
import { COLORS } from "../../constants/theme";
import long_logo from "../../assets/long_logo.png";

export default function FeedScreen() {
  const navigation = useNavigation();
  const [activeNav, setActiveNav] = useState("Feed");
  const [activeTab, setActiveTab] = useState("Trending");

  // Navigation items
  const navItems = [
    { id: "Feed", icon: "newspaper-outline", label: "Feed" },
    { id: "Trials", icon: "trophy-outline", label: "Trials" },
    { id: "PlayerDev", icon: "analytics-outline", label: "Player Dev Program" },
    { id: "Profile", icon: "person-outline", label: "Profile" },
  ];

  // Trending data
  const trendingItems = [
    { name: "Bode/Glimt", posts: "12k posts", percent: 1.2, trend: "up" },
    { name: "Central Midfield", posts: "12k posts", percent: 5.4, trend: "up" },
    { name: "Central Defender", posts: "12k posts", percent: 1.2, trend: "down" },
    { name: "Manchester City", posts: "12k posts", percent: 2.2, trend: "up" },
    { name: "Aalesund", posts: "12k posts", percent: 1.2, trend: "up" },
  ];

  // Who to follow data
  const followItems = [
    { name: "Wolves", handle: "@wolves" },
    { name: "Liverpool", handle: "@liverpool" },
    { name: "Bournemouth", handle: "@bournemouth" },
    { name: "Liverpool", handle: "@liverpool" },
    { name: "Bournemouth", handle: "@bournemouth" },
  ];

  // Posts data
  const posts = [
    {
      id: 1,
      author: "Denzel Washington",
      location: "Maharashtra, India",
      avatar: "https://i.pravatar.cc/150?img=12",
      text: "Lorem ipsum dolor sit amet consectetur. Ac nullam nisl proin fringilla dul libero.",
      image: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800",
      upvotes: "3.5K",
      shares: "2.6K",
      comments: "3K",
    },
    {
      id: 2,
      author: "Denzel Washington",
      location: "Maharashtra, India",
      avatar: "https://i.pravatar.cc/150?img=12",
      text: "Lorem ipsum dolor sit amet consectetur. Ac nullam nisl proin fringilla dul libero.",
      image: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=800",
      upvotes: "3.5K",
      shares: "2.6K",
      comments: "3K",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Left Sidebar */}
      <View style={styles.leftSidebar}>
        <View style={styles.logoContainer}>
          <Image
            source={long_logo}
            style={{ width: 140, height: 22, resizeMode: "contain" }}
          />
        </View>

        {navItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.navItem,
              activeNav === item.id && styles.navItemActive,
            ]}
            onPress={() => setActiveNav(item.id)}
          >
            <Ionicons
              name={item.icon}
              size={20}
              color={activeNav === item.id ? "#0a0d0d" : COLORS.white}
              style={styles.navIcon}
            />
            <Text
              style={[
                styles.navText,
                activeNav === item.id && styles.navTextActive,
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
