import { useState } from "react"
import { ScrollView, View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { router } from "expo-router"
import AuthenticationScreensLayout from "../../components/layouts/authentication-screens-layout/AuthenticationScreensLayout"

export default function Page() {

    const [email, setEmail] = useState("")

    return (
        <AuthenticationScreensLayout title="Go Ahead and Reset Your Password">
            <ScrollView style={styles.scrollWrapper} showsVerticalScrollIndicator={false}>
                <View style={styles.scrollArea}>
                    <Image source={require("../../assets/images/forget.png")} style={styles.backgroundImage} />
                    <Text style={styles.forgetPasswordHeading}>Forget Password?</Text>
                    <Text style={styles.forgetPasswordText}>No worries we'll send your reset Instructions</Text>
                    <Image source={require("../../assets/icons/email-lg.png")} style={styles.backgroundImage} />
                    <View style={styles.inputBox}>
                        <TextInput value={email} onChangeText={setEmail} />
                    </View>
                    <TouchableOpacity style={styles.resetButton} onPress={() => { router.navigate("/reset-password") }}>
                        <Text style={styles.resetText}>Reset Your Password</Text>
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
    forgetPasswordHeading: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#E35F21"
    },
    forgetPasswordText: {
        fontSize: 15,
        marginTop: 10
    },
    inputBox: {
        height: 50,
        width: "80%",
        backgroundColor: "#ECFFF1",
        borderRadius: 10,
        elevation: 5,
        justifyContent: "center",
        paddingHorizontal: 10,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3
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
        marginTop: 25,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    resetText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white"
    }
})