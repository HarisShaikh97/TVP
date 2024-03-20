import { useState } from "react"
import { ScrollView, View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { router } from "expo-router"
import AuthenticationScreensLayout from "../../components/layouts/authentication-screens-layout/AuthenticationScreensLayout"

export default function Page() {

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    return (
        <AuthenticationScreensLayout title="Go Ahead and Reset Your Password">
            <ScrollView style={styles.scrollWrapper} showsVerticalScrollIndicator={false}>
                <View style={styles.scrollArea}>
                    <Image source={require("../../assets/images/key.png")} style={styles.backgroundImage} />
                    <Text style={styles.resetPasswordHeading}>Set a New Password</Text>
                    <Text style={styles.resetPasswordText}>Your New Password must be Different to previously new password</Text>
                    <View style={styles.inputBlock}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <View style={styles.inputBox}>
                            <TextInput value={password} onChangeText={setPassword} secureTextEntry />
                        </View>
                        <Text style={styles.inputDescription}>Must be atleast 8 characters.</Text>
                    </View>
                    <View style={styles.inputBlock}>
                        <Text style={styles.inputTitle}>Confirm Password</Text>
                        <View style={styles.inputBox}>
                            <TextInput value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.resetButton} onPress={() => { router.navigate("/reset-password-successful") }}>
                        <Text style={styles.resetButtonText}>Reset Your Password</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </AuthenticationScreensLayout>
    )
}

const styles = StyleSheet.create({
    backgroundImage: {
        height: 100,
        width: 100,
        marginVertical: 25
    },
    resetPasswordHeading: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#E35F21"
    },
    resetPasswordText: {
        fontSize: 12,
        marginTop: 10,
        width: 275,
        textAlign: "center"
    },
    inputBlock: {
        flexDirection: "column",
        gap: 5,
        width: "80%",
        marginTop: 15
    },
    inputBox: {
        height: 50,
        width: "100%",
        backgroundColor: "#ECFFF1",
        borderRadius: 10,
        elevation: 5,
        justifyContent: "center",
        paddingHorizontal: 10,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    inputTitle: {
        fontSize: 15,
        fontWeight: "bold"
    },
    inputDescription: {
        alignSelf: "flex-end",
        fontSize: 10,
        fontWeight: "bold",
        color: "#E35F21",
        marginTop: 5
    },
    scrollWrapper: {
        width: "100%"
    },
    scrollArea: {
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 25
    },
    resetButton: {
        height: 50,
        width: "80%",
        backgroundColor: "black",
        borderRadius: 10,
        elevation: 5,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 35,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    resetButtonText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white"
    }
})