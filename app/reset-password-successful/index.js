import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import { router } from "expo-router"
import AuthenticationScreensLayout from "../../components/layouts/authentication-screens-layout/AuthenticationScreensLayout"

export default function Page() {

    return (
        <AuthenticationScreensLayout title="Go Ahead and Reset Your Password">
                <View style={styles.container}>
                    <Image source={require("../../assets/images/check.png")} style={styles.backgroundImage} />
                    <Text style={styles.resetPasswordHeading}>Password Reset</Text>
                    <Text style={styles.resetPasswordText}>Your Password has been Successfully reset Click below to log in magically</Text>
                    <TouchableOpacity style={styles.continueButton} onPress={() => { router.navigate("/login") }}>
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
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
    container: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 25
    },
    continueButton: {
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
    buttonText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white"
    }
})