import { useState } from "react"
import { ScrollView, View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native"
import { router } from "expo-router"
import AuthenticationScreensLayout from "../../components/layouts/authentication-screens-layout/AuthenticationScreensLayout"

export default function Page() {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")

    return (
        <AuthenticationScreensLayout title="Let's start! it should only take a few moments.">
            <View style={styles.tabsContainer}>
                <TouchableOpacity style={styles.tabStyles} onPress={() => { router.replace("/login") }}>
                    <Text style={[styles.tabsText, styles.grayTextColor]}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabStyles}>
                    <Text style={[styles.tabsText, styles.orangeTextColor]}>Signup</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.scrollWrapper} showsVerticalScrollIndicator={false}>
                <View style={styles.scrollArea}>
                    <View style={styles.inputContainer}>
                        <View style={styles.inputBlock}>
                            <View style={styles.labelContainer}>
                                <Text style={styles.labelText}>First Name</Text>
                                <Text style={styles.requiredMarker}>*</Text>
                            </View>
                            <View style={styles.inputBox}>
                                <TextInput value={firstName} onChangeText={setFirstName} />
                            </View>
                        </View>
                        <View style={styles.inputBlock}>
                            <View style={styles.labelContainer}>
                                <Text style={styles.labelText}>Last Name</Text>
                                <Text style={styles.requiredMarker}>*</Text>
                            </View>
                            <View style={styles.inputBox}>
                                <TextInput value={lastName} onChangeText={setLastName} />
                            </View>
                        </View>
                        <View style={styles.inputBlock}>
                            <View style={styles.labelContainer}>
                                <Text style={styles.labelText}>Enter Your Personal Email</Text>
                                <Text style={styles.requiredMarker}>*</Text>
                            </View>
                            <View style={styles.inputBox}>
                                <TextInput value={email} onChangeText={setEmail} />
                            </View>
                        </View>
                        <View style={styles.inputBlock}>
                            <View style={styles.labelContainer}>
                                <Text style={styles.labelText}>Personal Mobile Number</Text>
                                <Text style={styles.requiredMarker}>*</Text>
                            </View>
                            <View style={styles.inputBox}>
                                <TextInput value={phoneNumber} onChangeText={setPhoneNumber} />
                            </View>
                        </View>
                        <View style={styles.inputBlock}>
                            <View style={styles.labelContainer}>
                                <Text style={styles.labelText}>Password</Text>
                                <Text style={styles.requiredMarker}>*</Text>
                            </View>
                            <View style={styles.inputBox}>
                                <TextInput value={password} onChangeText={setPassword} secureTextEntry />
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.signupButton}>
                        <Text style={styles.signupButtonText}>Complete your signup</Text>
                    </TouchableOpacity>
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
        elevation: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
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
    inputContainer: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        paddingHorizontal: 20,
        paddingTop: 5
    },
    inputBlock: {
        width: "100%",
        flexDirection: "column",
        gap: 5
    },
    inputBox: {
        height: 40,
        width: "100%",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        paddingHorizontal: 10,
        justifyContent: "center"
    },
    labelContainer: {
        flexDirection: "row"
    },
    labelText: {
        fontSize: 15
    },
    requiredMarker: {
        fontSize: 10,
        color: "red"
    },
    scrollArea: {
        flexDirection: "column",
        alignItems: "center"
    },
    scrollWrapper: {
        width: "100%"
    },
    signupButton: {
        height: 50,
        width: "90%",
        borderRadius: 5,
        marginVertical: 20,
        backgroundColor: "#E35F21",
        alignItems: "center",
        justifyContent: "center"
    },
    signupButtonText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white"
    }
})