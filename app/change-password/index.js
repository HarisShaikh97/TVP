import { useState } from "react"
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from "react-native"
import { router } from "expo-router"
import AppScreensLayout from "../../components/layouts/app-screens-layout/AppScreensLayout"
import ProfilePicture from "../../components/profile-picture/ProfilePicture"

export default function Page() {

    const [password, setPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")

    return (
        <AppScreensLayout title="Profile Information">
            <ProfilePicture source={require("../../assets/images/profile.png")} name="Angga Risky" email="ABC@hotmail.com" />
            <View style={styles.container}>
                <Text style={styles.heading}>PASSWORD SETTING</Text>
                <View style={styles.inputBlock}>
                    <View style={styles.inputTitleContainer}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <Text style={styles.requiredMarker}>*</Text>
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput placeholder="***********" value={password} onChangeText={setPassword} secureTextEntry />
                    </View>
                </View>
                <View style={styles.inputBlock}>
                    <View style={styles.inputTitleContainer}>
                        <Text style={styles.inputTitle}>New Password</Text>
                        <Text style={styles.requiredMarker}>*</Text>
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput placeholder="***********" value={newPassword} onChangeText={setNewPassword} secureTextEntry />
                    </View>
                </View>
                <View style={styles.inputBlock}>
                    <View style={styles.inputTitleContainer}>
                        <Text style={styles.inputTitle}>Re-Enter Password</Text>
                        <Text style={styles.requiredMarker}>*</Text>
                    </View>
                    <View style={styles.inputBox}>
                        <TextInput placeholder="***********" value={confirmNewPassword} onChangeText={setConfirmNewPassword} secureTextEntry />
                    </View>
                </View>
                <TouchableOpacity style={styles.changeButton} onPress={() => {router.back()}}>
                    <Text style={styles.changeButtonText}>CHANGE SETTING</Text>
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
        gap: 25,
        marginTop: 50
    },
    heading: {
        fontSize: 18,
        fontWeight: "500"
    },
    inputBlock: {
        flexDirection: "column",
        gap: 10,
        width: "90%"
    },
    inputBox: {
        height: 50,
        width: "100%",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    inputTitleContainer: {
        flexDirection: "row"
    },
    inputTitle: {
        fontSize: 15
    },
    requiredMarker: {
        color: "red"
    },
    changeButton: {
        height: 50,
        width: 175,
        backgroundColor: "#E35F21",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    changeButtonText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    }
})