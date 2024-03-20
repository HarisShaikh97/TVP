import { useState, useContext } from "react"
import { ScrollView, View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { router } from "expo-router"
import { CheckBox } from "@rneui/themed"
import { MyContext } from "../../context/context"
import AuthenticationScreensLayout from "../../components/layouts/authentication-screens-layout/AuthenticationScreensLayout"

export default function Page() {

    const { dispatch } = useContext(MyContext)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)

    const handleLogin = () => {  
        dispatch({ type: "SET_ACCESS_TOKEN", payload: "" })    
        router.replace("/home")
    }

    return (
        <AuthenticationScreensLayout title="Go Ahead and login your account">
            <View style={styles.tabsContainer}>
                <TouchableOpacity style={styles.tabStyles}>
                    <Text style={[styles.tabsText, styles.orangeTextColor]}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabStyles} onPress={() => { router.replace("/signup") }}>
                    <Text style={[styles.tabsText, styles.grayTextColor]}>Signup</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollWrapper} showsVerticalScrollIndicator={false}>
                <View style={styles.scrollArea}>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputBox}>
                            <Image source={require("../../assets/icons/email.png")} style={styles.emailIcon} />
                            <TextInput style={styles.inputField} value={email} onChangeText={setEmail} placeholder="Email Address" />
                        </View>
                        <View style={styles.inputBox}>
                            <Image source={require("../../assets/icons/lock.png")} style={styles.passwordIcon} />
                            <TextInput style={styles.inputField} value={password} onChangeText={setPassword} placeholder="Password" secureTextEntry />
                        </View>
                    </View>
                    <View style={styles.rowComponent}>
                        <CheckBox checked={rememberMe} onPress={() => { setRememberMe(!rememberMe) }} title="Remember Me" iconType="material-community" checkedIcon="checkbox-marked" uncheckedIcon="checkbox-blank-outline" checkedColor="#E35F21" />
                        <TouchableOpacity onPress={() => { router.navigate("/forget-password") }}>
                            <Text style={styles.forgetPassword}>Forget Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.loginText}>Login</Text>
                    </TouchableOpacity>
                    <View style={styles.continueWithContainer}>
                        <View style={styles.orangeLine} />
                        <Text style={styles.continueWithText}>or continue with</Text>
                        <View style={styles.orangeLine} />
                    </View>
                    <View style={styles.socialLinksContainer}>
                        <TouchableOpacity style={styles.socialLink}>
                            <Image source={require("../../assets/logo/facebook-logo.png")} style={styles.socialImage} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialLink}>
                            <Image source={require("../../assets/logo/google-logo.png")} style={styles.socialImage} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialLink}>
                            <Image source={require("../../assets/logo/apple-logo.png")} style={styles.socialImage} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </AuthenticationScreensLayout>
    )
}

const styles = StyleSheet.create({
    tabsContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingVertical: 15
    },
    tabStyles: {
        height: 50,
        width: 175,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        elevation: 5,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    tabsText: {
        fontSize: 18,
        fontWeight: "bold"
    },
    grayTextColor: {
        color: "gray"
    },
    orangeTextColor: {
        color: "#E35F21"
    },
    scrollArea: {
        flexDirection: "column",
        alignItems: "center"
    },
    scrollWrapper: {
        width: "95%"
    },
    inputContainer: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        gap: 15,
        paddingHorizontal: 10,
        marginTop: 15
    },
    inputBox: {
        width: "100%",
        height: 65,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    emailIcon: {
        height: 30,
        width: 30
    },
    passwordIcon: {
        height: 27,
        width: 26
    },
    inputField: {
        width: "88%"
    },
    rowComponent: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 10
    },
    forgetPassword: {
        fontSize: 15,
        fontWeight: "bold",
        color: "red"
    },
    loginButton: {
        height: 50,
        width: 150,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E35F21"
    },
    loginText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    },
    continueWithContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 10,
        marginTop: 15
    },
    continueWithText: {
        fontSize: 15,
        fontWeight: "bold"
    },
    orangeLine: {
        height: 1,
        width: "30%",
        backgroundColor: "#E35F21"
    },
    socialLinksContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
        paddingVertical: 25
    },
    socialLink: {
        height: 75,
        width: 100,
        borderWidth: 1,
        borderColor: "#E35F21",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    socialImage: {
        height: 40,
        width: 40
    }
})