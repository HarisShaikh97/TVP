import { View, TouchableOpacity, Text, StyleSheet } from "react-native"
import { router } from "expo-router"
import AppScreensLayout from "../../components/layouts/app-screens-layout/AppScreensLayout"
import ProfilePicture from "../../components/profile-picture/ProfilePicture"

export default function Page() {
    return (
        <AppScreensLayout title="Profile Information">
            <ProfilePicture source={require("../../assets/images/profile.png")} name="Angga Risky" email="ABC@hotmail.com" />
            <View style={styles.container}>
                <Text style={styles.title}>PROFILE SETTING</Text>
                <View style={styles.profileInformationContainer}>
                    <Text style={[styles.info, styles.heading]}>FULL NAME</Text>
                    <Text style={styles.info}>Angga Risky</Text>
                    <Text style={[styles.info, styles.heading]}>EMAIL ADDRESS</Text>
                    <Text style={styles.info}>ABC@hotamail.com</Text>
                    <Text style={[styles.info, styles.heading]}>PHONE NUMBER</Text>
                    <Text style={styles.info}>7234-1323-22</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => { router.back() }}>
                    <Text style={styles.buttonText}>Done</Text>
                </TouchableOpacity>
            </View>
        </AppScreensLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 25
    },
    title: {
        fontSize: 15,
        fontWeight: "bold"
    },
    profileInformationContainer: {
        width: "80%",
        flexDirection: "column",
        gap: 10,
        marginVertical: 35
    },
    heading: {
        color: "gray"
    },
    info: {
        fontSize: 15,
        fontWeight: "bold"
    },
    button: {
        height: 40,
        width: 125,
        borderRadius: 10,
        backgroundColor: "#E35F21",
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white"
    }
})