import { useState } from "react";
import { BlurView } from "expo-blur";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from "../classes/SignUpScreenClass";
import long_logo from "../../assets/long_logo.png";
import right_mark from "../../assets/right_mark.png";
import DateTimePicker, { useDefaultStyles } from 'react-native-ui-datepicker';
import dayjs from "dayjs";

import {
    Text,
    ScrollView,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";

export default function SignupScreen() {
    const [currentStep, setCurrentStep] = useState(1);
    const navigation = useNavigation();
    const route = useRoute();
    const [form, setForm] = useState({
        email: route.params?.email || "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const [profileForm, setProfileForm] = useState({
        userType: "Player",
        bio: "",
        fullName: "",
        username: "",
        dateOfBirth: "",
        location: "",
        gender: "",
        playingPosition: "",
        skillLevel: "",
        dominantFoot: "Left",
        height: "",
        weight: "",
        bmi: "",
        profileImage: null,
        previousExperience: []
    });

    const [showVerification, setShowVerification] = useState(false);
    const [codes, setCodes] = useState({
        phoneCode: "",
        emailCode: "",
    });

    const [showGenderDropdown, setShowGenderDropdown] = useState(false);
    const [showPositionDropdown, setShowPositionDropdown] = useState(false);
    const [showSkillLevelDropdown, setShowSkillLevelDropdown] = useState(false);
    const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);
    const [locationSuggestions, setLocationSuggestions] = useState([]);
    const [showExperiencePositionDropdown, setShowExperiencePositionDropdown] = useState(null);
    const [isFresher, setIsFresher] = useState(false);
    const [experienceEntries, setExperienceEntries] = useState([{
        clubName: '',
        duration: '',
        leagueName: '',
        playingPosition: '',
        isCurrentClub: false
    }]);
    const [acceptTerms, setAcceptTerms] = useState(false);

    const defaultStyles = useDefaultStyles();
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showDurationPicker, setShowDurationPicker] = useState(null);
    const [selectedDate, setSelectedDate] = useState(
        profileForm.dateOfBirth ? dayjs(profileForm.dateOfBirth) : null
    );

    const handleChange = (name, value) => {
        if (name === "phone") {
            if (!/^\d*$/.test(value)) return;
        }
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleCodeChange = (name, value) => {
        if (!/^\d*$/.test(value)) return;
        setCodes((prev) => ({ ...prev, [name]: value }));
    };

    const validateEmail = (email) => {
        if (!email) return "Email is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Enter a valid email address.";
        return "";
    };

    const validatePassword = (password) => {
        const isLongEnough = password.length >= 8;
        const hasAlphanumeric = /[a-zA-Z]/.test(password) && /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (!isLongEnough) return "Password must be at least 8 characters long.";
        if (!hasAlphanumeric) return "Password must include letters and numbers.";
        if (!hasSpecialChar) return "Password must contain a special character.";

        return "";
    };

    const handleSubmit = () => {
        const emailError = validateEmail(form.email);
        const passwordError = validatePassword(form.password);
        const confirmPasswordError =
            form.password !== form.confirmPassword ? "Passwords do not match." : "";
        const phoneError =
            form.phone && form.phone.length < 10 ? "Enter a valid phone number." : "";

        setErrors({
            email: emailError,
            phone: phoneError,
            password: passwordError,
            confirmPassword: confirmPasswordError,
        });

        if (!passwordError && !confirmPasswordError && !phoneError && !emailError) {
            setShowVerification(true);
        }
    };

    const handleVerificationComplete = () => {
        setCurrentStep(2);
        setShowVerification(false);
    };

    const handleProfileSubmit = () => {
        navigation.navigate("Feed");
    };

    const dummyCities = [
        { "place_id": "1", "description": "Mumbai, Maharashtra, India" },
        { "place_id": "2", "description": "Delhi, India" },
        { "place_id": "3", "description": "Bengaluru, Karnataka, India" },
        { "place_id": "4", "description": "Chennai, Tamil Nadu, India" },
        { "place_id": "5", "description": "Kolkata, West Bengal, India" },
        { "place_id": "6", "description": "Hyderabad, Telangana, India" },
        { "place_id": "7", "description": "Pune, Maharashtra, India" },
        { "place_id": "8", "description": "Ahmedabad, Gujarat, India" },
        { "place_id": "9", "description": "Jaipur, Rajasthan, India" },
        { "place_id": "10", "description": "Surat, Gujarat, India" },
        { "place_id": "11", "description": "Lucknow, Uttar Pradesh, India" },
        { "place_id": "12", "description": "Kanpur, Uttar Pradesh, India" },
        { "place_id": "13", "description": "Nagpur, Maharashtra, India" },
        { "place_id": "14", "description": "Indore, Madhya Pradesh, India" },
        { "place_id": "15", "description": "Thane, Maharashtra, India" },
        { "place_id": "16", "description": "Bhopal, Madhya Pradesh, India" },
        { "place_id": "17", "description": "Visakhapatnam, Andhra Pradesh, India" },
        { "place_id": "18", "description": "Pimpri-Chinchwad, Maharashtra, India" },
        { "place_id": "19", "description": "Patna, Bihar, India" },
        { "place_id": "20", "description": "Vadodara, Gujarat, India" }
    ];

    const handleProfileChange = (name, value) => {
        setProfileForm((prev) => {
            const updated = { ...prev, [name]: value };

            // Auto-calculate BMI when height or weight changes
            if (name === "height" || name === "weight") {
                const height = name === "height" ? value : prev.height;
                const weight = name === "weight" ? value : prev.weight;

                if (height && weight && parseFloat(height) > 0 && parseFloat(weight) > 0) {
                    const heightInMeters = parseFloat(height) / 100;
                    const bmi = (parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(2);
                    updated.bmi = bmi;
                }
            }

            return updated;
        });

        if (name === "location") {
            if (value.length > 1) {
                const filtered = dummyCities.filter(city =>
                    city.description.toLowerCase().includes(value.toLowerCase())
                );
                setLocationSuggestions(filtered.slice(0, 5));
                setShowLocationSuggestions(filtered.length > 0);
            } else {
                setShowLocationSuggestions(false);
            }
        }
    };

    const handleImageUpload = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission needed', 'Please allow access to your photo library');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.8,
        });

        if (!result.canceled) {
            handleProfileChange('profileImage', result.assets[0].uri);
        }
    };

    const closeAllDropdowns = (e) => {
        if (Platform.OS === 'web') {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
                return;
            }
        }
        setShowDatePicker(false);
        setShowDurationPicker(null);
        setShowLocationSuggestions(false);
        setShowGenderDropdown(false);
        setShowPositionDropdown(false);
        setShowSkillLevelDropdown(false);
        setShowExperiencePositionDropdown(null);
        Keyboard.dismiss();
    };

    return (
        <BlurView intensity={20} style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
                <TouchableWithoutFeedback onPress={closeAllDropdowns}>
                    <View style={styles.inner}>
                        <View style={styles.logoWrap}>
                            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                                <Image source={long_logo} style={styles.logo} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.stepper}>
                            <View style={styles.step}>
                                <View style={currentStep === 1 ? styles.stepNumActive : styles.stepNumCompleted}>
                                    {currentStep === 1 ? (
                                        <Text style={styles.stepNumActiveText}>1</Text>
                                    ) : (
                                        <Image
                                            source={right_mark}
                                            style={styles.stepCheckImage}
                                            resizeMode="contain"
                                        />
                                    )}
                                </View>
                                <Text style={currentStep === 1 ? styles.stepLabelActive : styles.stepLabelCompleted}>Account details</Text>
                            </View>
                            <View style={styles.step}>
                                <View style={currentStep === 2 ? styles.stepNumActive : styles.stepNum}>
                                    <Text style={currentStep === 2 ? styles.stepNumActiveText : styles.stepNumText}>2</Text>
                                </View>
                                <Text style={currentStep === 2 ? styles.stepLabelActive : styles.stepLabel}>Setup profile</Text>
                            </View>
                        </View>

                        {currentStep === 1 && (
                            <>
                                <Text style={styles.title}>LET'S ENTER YOUR ACCOUNT DETAILS</Text>
                                <View style={styles.contentRow}>
                                    <View style={styles.form}>
                                        <View style={styles.formRow}>
                                            <View style={styles.formColumn}>
                                                <Text style={styles.label}>Email address</Text>
                                                <TextInput
                                                    value={form.email}
                                                    onChangeText={(v) => handleChange("email", v)}
                                                    placeholder="Enter email address"
                                                    keyboardType="email-address"
                                                    autoCapitalize="none"
                                                    style={showVerification ? styles.inputDisabled : styles.input}
                                                    placeholderTextColor="rgba(96,96,96,1)"
                                                    editable={!showVerification}
                                                />
                                                {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
                                            </View>
                                            <View style={styles.formColumn}>
                                                <Text style={styles.label}>Phone number (optional)</Text>
                                                <View style={[styles.phoneWrap, showVerification && styles.phoneWrapDisabled]}>
                                                    <Text style={styles.ccText}>+91 |</Text>
                                                    <TextInput
                                                        value={form.phone}
                                                        onChangeText={(v) => handleChange("phone", v)}
                                                        placeholder="Enter your phone number"
                                                        keyboardType="numeric"
                                                        style={styles.phoneInput}
                                                        placeholderTextColor="rgba(96,96,96,1)"
                                                        underlineColorAndroid="transparent"
                                                        editable={!showVerification}
                                                    />
                                                </View>
                                                {errors.phone ? <Text style={styles.errorText}>{errors.phone}</Text> : null}
                                            </View>
                                        </View>

                                        <View style={styles.formRow}>
                                            <View style={styles.formColumn}>
                                                <Text style={styles.label}>Password</Text>
                                                <TextInput
                                                    secureTextEntry={!showVerification}
                                                    value={showVerification ? "•".repeat(form.password.length) : form.password}
                                                    onChangeText={(v) => handleChange("password", v)}
                                                    placeholder="Enter password"
                                                    style={showVerification ? styles.inputDisabled : styles.input}
                                                    placeholderTextColor="rgba(96,96,96,1)"
                                                    editable={!showVerification}
                                                />
                                                {errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : null}
                                            </View>
                                            <View style={styles.formColumn}>
                                                <Text style={styles.label}>Re-enter password</Text>
                                                <TextInput
                                                    secureTextEntry={!showVerification}
                                                    value={showVerification ? "•".repeat(form.confirmPassword.length) : form.confirmPassword}
                                                    onChangeText={(v) => handleChange("confirmPassword", v)}
                                                    placeholder="Re-enter password"
                                                    style={showVerification ? styles.inputDisabled : styles.input}
                                                    placeholderTextColor="rgba(96,96,96,1)"
                                                    editable={!showVerification}
                                                />
                                                {errors.confirmPassword ? (
                                                    <Text style={styles.errorText}>{errors.confirmPassword}</Text>
                                                ) : null}
                                            </View>
                                        </View>
                                    </View>

                                    <View style={styles.rightCard}>
                                        <Text style={styles.rightTitle}>Instructions on password creation</Text>
                                        <View style={styles.instructions}>
                                            <Text style={styles.instructionIntro}>The password needs to contain:</Text>
                                            <View style={styles.bulletList}>
                                                <Text style={styles.bulletItem}>• Alphanumeric values</Text>
                                                <Text style={styles.bulletItem}>• Be at least 8 characters long</Text>
                                                <Text style={styles.bulletItem}>• Contain a special character</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                {!showVerification ? (
                                    <View style={styles.nextSection}>
                                        <Text style={styles.nextText}>
                                            Next: <Text style={styles.nextHighlight}>Verification process</Text>
                                        </Text>
                                        <TouchableOpacity onPress={handleSubmit} style={styles.proceedButton}>
                                            <Text style={styles.proceedButtonText}>PROCEED TO VERIFICATION</Text>
                                        </TouchableOpacity>
                                    </View>
                                ) : (
                                    <View style={styles.verifySection}>
                                        <View style={styles.editLinks}>
                                            <TouchableOpacity onPress={() => setShowVerification(false)}>
                                                <Text style={styles.editLink}>Edit account details</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <Text style={styles.unlockLink}>Unlock details</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <Text style={styles.verifyTitle}>VERIFY ACCOUNT</Text>
                                        <View style={styles.verifyRow}>
                                            <View style={styles.verifyColumn}>
                                                <Text style={styles.verifyLabel}>Phone number verification</Text>
                                                <TextInput
                                                    value={codes.phoneCode}
                                                    onChangeText={(v) => handleCodeChange("phoneCode", v)}
                                                    placeholder="Enter code"
                                                    keyboardType="numeric"
                                                    style={styles.codeInput}
                                                    placeholderTextColor="rgba(96,96,96,1)"
                                                />
                                                <Text style={styles.codeMessage}>
                                                    A code has been shared to your entered phone number
                                                </Text>
                                            </View>
                                            <View style={styles.verifyColumn}>
                                                <Text style={styles.verifyLabel}>Email address verification</Text>
                                                <TextInput
                                                    value={codes.emailCode}
                                                    onChangeText={(v) => handleCodeChange("emailCode", v)}
                                                    placeholder="Enter code"
                                                    keyboardType="numeric"
                                                    style={styles.codeInput}
                                                    placeholderTextColor="rgba(96,96,96,1)"
                                                />
                                                <Text style={styles.codeMessage}>
                                                    A code has been shared to your entered email address
                                                </Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity style={[styles.proceedButton, { marginTop: 0 }]} onPress={handleVerificationComplete}>
                                            <Text style={styles.proceedButtonText}>PROCEED TO ACCOUNT SETUP</Text>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </>
                        )}

                        {currentStep === 2 && (
                            <View style={styles.profileSetupContainer}>
                                <Text style={styles.setupTitle}>WHAT BEST DESCRIBES ME</Text>
                                <View style={styles.userTypeSection}>
                                    {["Player", "Organization/Club", "Scout/Coach", "Fan"].map((type) => (
                                        <TouchableOpacity
                                            key={type}
                                            style={[styles.userTypeOption, profileForm.userType === type && styles.userTypeOptionActive]}
                                            onPress={() => handleProfileChange("userType", type)}
                                        >
                                            <View style={styles.userTypeRadio}>
                                                {profileForm.userType === type && <View style={styles.userTypeRadioInner} />}
                                            </View>
                                            <Text
                                                style={[styles.userTypeText, profileForm.userType === type && styles.userTypeTextActive]}>
                                                {type}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                                <Text style={styles.profileSectionTitle}>TIME TO SETUP YOUR PROFILE!</Text>
                                <View style={[styles.profileForm, (showDatePicker || showLocationSuggestions || showGenderDropdown) && { zIndex: 100 }]}>
                                    <View style={styles.profileRow}>
                                        <TouchableOpacity style={styles.profileImageSection} onPress={handleImageUpload}>
                                            <View style={styles.profileImageUpload}>
                                                {profileForm.profileImage ? (
                                                    <Image source={{ uri: profileForm.profileImage }} style={styles.profileImagePreview} />
                                                ) : (
                                                    <Text style={styles.profileImagePlus}>+</Text>
                                                )}
                                            </View>
                                            <Text style={styles.uploadText}>Upload a picture</Text>
                                        </TouchableOpacity>
                                        <View style={styles.bioSection}>
                                            <Text style={styles.bioLabel}>A short bio</Text>
                                            <TextInput
                                                value={profileForm.bio}
                                                onChangeText={(v) => handleProfileChange("bio", v)}
                                                placeholder="A little bit about yourself..."
                                                multiline
                                                style={styles.bioInput}
                                                placeholderTextColor="rgba(96,96,96,1)"
                                            />
                                        </View>
                                    </View>
                                    <View style={[styles.setupFormRow, showDatePicker && { zIndex: 100 }]}>
                                        <View style={styles.formColumn}>
                                            <Text style={styles.label}>Full name*</Text>
                                            <TextInput
                                                value={profileForm.fullName}
                                                onChangeText={(v) => handleProfileChange("fullName", v)}
                                                placeholder="Your full name"
                                                style={styles.input}
                                                placeholderTextColor="rgba(96,96,96,1)"
                                            />
                                        </View>
                                        <View style={styles.formColumn}>
                                            <Text style={styles.label}>Username*</Text>
                                            <TextInput
                                                value={profileForm.username}
                                                onChangeText={(v) => handleProfileChange("username", v)}
                                                placeholder="A unique username"
                                                style={styles.input}
                                                placeholderTextColor="rgba(96,96,96,1)"
                                            />
                                        </View>
                                        <View style={[styles.formColumn, showDatePicker && { zIndex: 100 }]}>
                                            <Text style={styles.label}>Date of birth</Text>
                                            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                                                <View style={styles.inputWithIcon}>
                                                    <TextInput
                                                        value={selectedDate ? dayjs(selectedDate).format("DD-MM-YYYY") : ""}
                                                        placeholder="Date of birth"
                                                        editable={false}
                                                        style={[styles.input, styles.inputWithIconPadding]}
                                                        placeholderTextColor="rgba(96,96,96,1)"
                                                    />
                                                    <FontAwesome6
                                                        name="calendar-days"
                                                        size={18}
                                                        color="rgba(221, 255, 0, 1)"
                                                        style={styles.inputIcon}
                                                    />
                                                </View>
                                            </TouchableOpacity>
                                            {showDatePicker && (
                                                <View style={styles.datePickerStyles}>
                                                    <DateTimePicker
                                                        mode="single"
                                                        styles={{
                                                            ...defaultStyles,
                                                            today: { borderColor: 'rgba(221, 255, 0, 1)', borderWidth: 1 },
                                                            selected: { backgroundColor: 'rgba(221, 255, 0, 1)' },
                                                            selected_label: { color: 'black' },
                                                        }}
                                                        date={selectedDate ? dayjs(selectedDate) : dayjs()}
                                                        onChange={({ date }) => {
                                                            setSelectedDate(date);
                                                            const formatted = dayjs(date).format("DD-MM-YYYY");
                                                            handleProfileChange("dateOfBirth", formatted);
                                                            setShowDatePicker(false);
                                                        }}
                                                        maxDate={dayjs()}
                                                    />
                                                </View>
                                            )}
                                        </View>
                                    </View>
                                    <View style={[styles.setupFormRow, (showLocationSuggestions || showGenderDropdown) && { zIndex: 100 }]}>
                                        <View style={[styles.formColumn, showLocationSuggestions && { zIndex: 100 }]}>
                                            <Text style={styles.label}>Location</Text>
                                            <View style={styles.inputWithIcon}>
                                                <TextInput
                                                    value={profileForm.location}
                                                    onChangeText={(v) => handleProfileChange("location", v)}
                                                    placeholder="Your location"
                                                    style={[styles.input, styles.inputWithIconPadding]}
                                                    placeholderTextColor="rgba(96,96,96,1)"
                                                />
                                                <FontAwesome6 name="location-dot" size={18} color="rgba(221, 255, 0, 1)" style={styles.inputIcon} />
                                            </View>
                                            {showLocationSuggestions && locationSuggestions.length > 0 && (
                                                <View
                                                    style={[
                                                        styles.dropdownOptions,
                                                        {
                                                            overflow: "hidden",
                                                        },
                                                    ]}
                                                >
                                                    <ScrollView
                                                        nestedScrollEnabled={true}
                                                        showsVerticalScrollIndicator={true}
                                                    >
                                                        {locationSuggestions.map((suggestion) => (
                                                            <TouchableOpacity
                                                                key={suggestion.place_id}
                                                                style={styles.dropdownOption}
                                                                onPress={() => {
                                                                    handleProfileChange("location", suggestion.description);
                                                                    setShowLocationSuggestions(false);
                                                                }}
                                                            >
                                                                <Text style={styles.dropdownOptionText}>
                                                                    {suggestion.description}
                                                                </Text>
                                                            </TouchableOpacity>
                                                        ))}
                                                    </ScrollView>
                                                </View>
                                            )}

                                        </View>
                                        <View style={[styles.formColumn, showGenderDropdown && { zIndex: 100 }]}>
                                            <Text style={styles.label}>Gender</Text>
                                            <TouchableOpacity style={styles.dropdownContainer} onPress={() => setShowGenderDropdown(!showGenderDropdown)}>
                                                <Text style={[styles.dropdownText, !profileForm.gender && styles.placeholderText]}>
                                                    {profileForm.gender || "Your gender"}
                                                </Text>
                                                <FontAwesome6 name="chevron-down" size={14} color="rgba(221, 255, 0, 1)" style={styles.dropdownArrow} />
                                            </TouchableOpacity>
                                            {showGenderDropdown && (
                                                <View style={styles.dropdownOptions}>
                                                    {["Male", "Female", "Other", "Prefer not to say"].map((option) => (
                                                        <TouchableOpacity
                                                            key={option}
                                                            style={styles.dropdownOption}
                                                            onPress={() => {
                                                                handleProfileChange("gender", option);
                                                                setShowGenderDropdown(false);
                                                            }}
                                                        >
                                                            <Text style={styles.dropdownOptionText}>{option}</Text>
                                                        </TouchableOpacity>
                                                    ))}
                                                </View>
                                            )}
                                        </View>
                                    </View>
                                </View>
                                <Text style={[styles.profileSectionTitle, { marginTop: 56 }]}>TELL US MORE ABOUT YOURSELF!</Text>
                                <View style={[styles.moreInfoForm, (showPositionDropdown || showSkillLevelDropdown) && { zIndex: 100 }]}>
                                    <View style={[styles.setupFormRow, (showPositionDropdown || showSkillLevelDropdown) && { zIndex: 100 }]}>
                                        <View style={[styles.formColumn, showPositionDropdown && { zIndex: 100 }]}>
                                            <Text style={styles.label}>Playing position</Text>
                                            <TouchableOpacity style={styles.dropdownContainer} onPress={() => setShowPositionDropdown(!showPositionDropdown)}>
                                                <Text style={[styles.dropdownText, !profileForm.playingPosition && styles.placeholderText]}>
                                                    {profileForm.playingPosition || "Select position"}
                                                </Text>
                                                <FontAwesome6 name="chevron-down" size={14} color="rgba(221, 255, 0, 1)" style={styles.dropdownArrow} />
                                            </TouchableOpacity>
                                            {showPositionDropdown && (
                                                <View style={styles.dropdownOptions}>
                                                    {["Goalkeeper", "Defender", "Midfielder", "Forward"].map((position) => (
                                                        <TouchableOpacity
                                                            key={position}
                                                            style={styles.dropdownOption}
                                                            onPress={() => {
                                                                handleProfileChange("playingPosition", position);
                                                                setShowPositionDropdown(false);
                                                            }}
                                                        >
                                                            <Text style={styles.dropdownOptionText}>{position}</Text>
                                                        </TouchableOpacity>
                                                    ))}
                                                </View>
                                            )}
                                        </View>
                                        <View style={[styles.formColumn, showSkillLevelDropdown && { zIndex: 100 }]}>
                                            <Text style={styles.label}>Your skill level</Text>
                                            <TouchableOpacity style={styles.dropdownContainer} onPress={() => setShowSkillLevelDropdown(!showSkillLevelDropdown)}>
                                                <Text style={[styles.dropdownText, !profileForm.skillLevel && styles.placeholderText]}>
                                                    {profileForm.skillLevel || "Select skill level"}
                                                </Text>
                                                <FontAwesome6 name="chevron-down" size={14} color="rgba(221, 255, 0, 1)" />
                                            </TouchableOpacity>
                                            {showSkillLevelDropdown && (
                                                <View style={styles.dropdownOptions}>
                                                    <ScrollView
                                                        nestedScrollEnabled={true}
                                                        showsVerticalScrollIndicator={true}
                                                    >
                                                        {["Beginner", "Amateur", "Intermediate", "Advanced", "Semi-Professional", "Professional"].map((level) => (
                                                            <TouchableOpacity
                                                                key={level}
                                                                style={styles.dropdownOption}
                                                                onPress={() => {
                                                                    handleProfileChange("skillLevel", level);
                                                                    setShowSkillLevelDropdown(false);
                                                                }}
                                                            >
                                                                <Text style={styles.dropdownOptionText}>{level}</Text>
                                                            </TouchableOpacity>
                                                        ))}
                                                    </ScrollView>
                                                </View>
                                            )}
                                        </View>
                                        <View style={styles.formColumn}>
                                            <Text style={styles.label}>Dominant foot</Text>
                                            <View style={styles.dominantFootSection}>
                                                {["Left", "Right", "Both"].map((foot) => (
                                                    <TouchableOpacity
                                                        key={foot}
                                                        style={styles.dominantFootOption}
                                                        onPress={() => handleProfileChange("dominantFoot", foot)}
                                                    >
                                                        <View style={styles.dominantFootRadio}>
                                                            {profileForm.dominantFoot === foot && <View style={styles.dominantFootRadioInner} />}
                                                        </View>
                                                        <Text style={styles.dominantFootText}>{foot}</Text>
                                                    </TouchableOpacity>
                                                ))}
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.setupFormRow}>
                                        <View style={styles.formColumn}>
                                            <Text style={styles.label}>Your height</Text>
                                            <TextInput
                                                value={profileForm.height}
                                                onChangeText={(v) => handleProfileChange("height", v)}
                                                placeholder="Height in cms"
                                                keyboardType="numeric"
                                                style={styles.input}
                                                placeholderTextColor="rgba(96,96,96,1)"
                                            />
                                        </View>
                                        <View style={styles.formColumn}>
                                            <Text style={styles.label}>Your weight</Text>
                                            <TextInput
                                                value={profileForm.weight}
                                                onChangeText={(v) => handleProfileChange("weight", v)}
                                                placeholder="Weight in kgs"
                                                keyboardType="numeric"
                                                style={styles.input}
                                                placeholderTextColor="rgba(96,96,96,1)"
                                            />
                                        </View>
                                        <View style={styles.formColumn}>
                                            <Text style={styles.label}>BMI</Text>
                                            <TextInput
                                                value={profileForm.bmi}
                                                placeholder="BMI value"
                                                editable={false}
                                                style={[styles.input, styles.inputDisabled]}
                                                placeholderTextColor="rgba(96,96,96,1)"
                                            />
                                        </View>
                                    </View>
                                </View>
                                <Text style={[styles.profileSectionTitle, { marginTop: 58 }]}>TELL US MORE ABOUT YOUR PREVIOUS EXPERIENCE!</Text>
                                <View style={[styles.experienceSection, (showDurationPicker !== null || showExperiencePositionDropdown !== null) && { zIndex: 100 }]}>
                                    <TouchableOpacity
                                        style={styles.fresherOption}
                                        onPress={() => setIsFresher(!isFresher)}
                                    >
                                        <View style={styles.fresherCheckbox}>
                                            {isFresher && <View style={styles.fresherCheckboxInner} />}
                                        </View>
                                        <Text style={styles.fresherText}>I am a fresher</Text>
                                    </TouchableOpacity>
                                    {!isFresher && experienceEntries.map((entry, index) => (
                                        <View key={index} style={[styles.experienceEntry, (showDurationPicker === index || showExperiencePositionDropdown === index) && { zIndex: 100 }]}>
                                            <View style={[styles.setupFormRow, (showDurationPicker === index || showExperiencePositionDropdown === index) && { zIndex: 100 }]}>
                                                <View style={styles.formColumn}>
                                                    <Text style={styles.label}>Club played for</Text>
                                                    <TextInput
                                                        value={entry.clubName}
                                                        onChangeText={(v) => {
                                                            const updated = [...experienceEntries];
                                                            updated[index].clubName = v;
                                                            setExperienceEntries(updated);
                                                        }}
                                                        placeholder="Club name"
                                                        style={styles.input}
                                                        placeholderTextColor="rgba(96,96,96,1)"
                                                    />
                                                </View>
                                                <View style={[styles.formColumn, showDurationPicker === index && { zIndex: 100 }]}>
                                                    <Text style={styles.label}>Duration</Text>
                                                    <TouchableOpacity onPress={() => setShowDurationPicker(index)} activeOpacity={0.7}>
                                                        <View style={styles.inputWithIcon}>
                                                            <TextInput
                                                                value={entry.duration ? `${dayjs(entry.duration.startDate).format("MMM DD, YYYY")} - ${dayjs(entry.duration.endDate).format("MMM DD, YYYY")}` : ""}
                                                                placeholder="Date range"
                                                                editable={false}
                                                                style={[styles.input, styles.inputWithIconPadding]}
                                                                placeholderTextColor="rgba(96,96,96,1)"
                                                            />
                                                            <FontAwesome6
                                                                name="calendar-days"
                                                                size={18}
                                                                color="rgba(221, 255, 0, 1)"
                                                                style={styles.inputIcon}
                                                            />
                                                        </View>
                                                    </TouchableOpacity>
                                                    {showDurationPicker === index && (
                                                        <View style={styles.datePickerStyles}>
                                                            <DateTimePicker
                                                                mode="range"
                                                                startDate={entry.duration?.startDate ? dayjs(entry.duration.startDate) : undefined}
                                                                endDate={entry.duration?.endDate ? dayjs(entry.duration.endDate) : undefined}
                                                                styles={{
                                                                    ...defaultStyles,
                                                                    today: { borderColor: 'rgba(221, 255, 0, 1)', borderWidth: 1 },
                                                                    selected: { backgroundColor: 'rgba(221, 255, 0, 1)' },
                                                                    selected_label: { color: 'black' },
                                                                }}
                                                                onChange={({ startDate, endDate }) => {
                                                                    console.log("Selected date range: ", { startDate, endDate });
                                                                    const updated = [...experienceEntries];
                                                                    updated[index].duration = { startDate, endDate };
                                                                    setExperienceEntries(updated);

                                                                    if (startDate && endDate) {
                                                                        setShowDurationPicker(null);
                                                                    }
                                                                }}
                                                                maxDate={dayjs()}
                                                            />
                                                        </View>
                                                    )}
                                                </View>
                                                <View style={styles.formColumn}>
                                                    <Text style={styles.label}>Playing position</Text>
                                                    <TouchableOpacity
                                                        style={styles.dropdownContainer}
                                                        onPress={() => setShowExperiencePositionDropdown(showExperiencePositionDropdown === index ? null : index)}
                                                    >
                                                        <Text style={[styles.dropdownText, !entry.playingPosition && styles.placeholderText]}>
                                                            {entry.playingPosition || "Select position"}
                                                        </Text>
                                                        <FontAwesome6 name="chevron-down" size={14} color="rgba(221, 255, 0, 1)" style={styles.dropdownArrow} />
                                                    </TouchableOpacity>
                                                    {showExperiencePositionDropdown === index && (
                                                        <View style={styles.dropdownOptions}>
                                                            {["Goalkeeper", "Defender", "Midfielder", "Forward"].map((position) => (
                                                                <TouchableOpacity
                                                                    key={position}
                                                                    style={styles.dropdownOption}
                                                                    onPress={() => {
                                                                        const updated = [...experienceEntries];
                                                                        updated[index].playingPosition = position;
                                                                        setExperienceEntries(updated);
                                                                        setShowExperiencePositionDropdown(null);
                                                                    }}
                                                                >
                                                                    <Text style={styles.dropdownOptionText}>{position}</Text>
                                                                </TouchableOpacity>
                                                            ))}
                                                        </View>
                                                    )}
                                                </View>
                                            </View>
                                            <View style={[styles.setupFormRow, { zIndex: 0 }]}>
                                                <View style={styles.formColumn}>
                                                    <Text style={styles.label}>League name</Text>
                                                    <TextInput
                                                        value={entry.leagueName}
                                                        onChangeText={(v) => {
                                                            const updated = [...experienceEntries];
                                                            updated[index].leagueName = v;
                                                            setExperienceEntries(updated);
                                                        }}
                                                        placeholder="Enter league name"
                                                        style={styles.input}
                                                        placeholderTextColor="rgba(96,96,96,1)"
                                                    />
                                                </View>
                                                <View style={styles.formColumn}>
                                                    <TouchableOpacity
                                                        style={styles.currentClubOption}
                                                        onPress={() => {
                                                            const updated = [...experienceEntries];
                                                            updated[index].isCurrentClub = !updated[index].isCurrentClub;
                                                            setExperienceEntries(updated);
                                                        }}
                                                    >
                                                        <View style={styles.currentClubCheckbox}>
                                                            {entry.isCurrentClub && <View style={styles.currentClubCheckboxInner} />}
                                                        </View>
                                                        <Text style={styles.currentClubText}>This is my current club</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    ))}
                                    {!isFresher && (
                                        <TouchableOpacity
                                            style={styles.addMoreButton}
                                            onPress={() => {
                                                setExperienceEntries([...experienceEntries, {
                                                    clubName: '',
                                                    duration: '',
                                                    leagueName: '',
                                                    playingPosition: '',
                                                    isCurrentClub: false
                                                }]);
                                            }}
                                        >
                                            <Text style={styles.addMoreText}>+ Add more</Text>
                                        </TouchableOpacity>
                                    )}
                                </View>
                                <View style={styles.horizontalLine} />
                                <View style={styles.termsSection}>
                                    <View style={styles.termsHeader}>
                                        <FontAwesome6 name="file-lines" size={20} color="rgba(221, 255, 0, 1)" />
                                        <Text style={styles.termsTitle}>Terms and conditions</Text>
                                    </View>
                                    <TouchableOpacity
                                        style={styles.termsOption}
                                        onPress={() => setAcceptTerms(!acceptTerms)}
                                    >
                                        <View style={styles.termsCheckbox}>
                                            {acceptTerms && <View style={styles.termsCheckboxInner} />}
                                        </View>
                                        <Text style={styles.termsText}>Agree to terms and conditions</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={styles.submitButton} onPress={handleProfileSubmit}>
                                    <Text style={styles.submitButtonText}>SUBMIT</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </BlurView >
    );
}
