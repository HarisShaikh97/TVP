import { useState } from "react"
import { TouchableOpacity, View, Text, TextInput, StyleSheet } from "react-native"
import { router } from "expo-router"
import AppScreensLayout from "../../components/layouts/app-screens-layout/AppScreensLayout"

export default function Page() {
    
    const [number, setNumber] = useState("")
    const [addressName, setAddressName] = useState("")
    const [address, setAddress] = useState("")
    const [house, setHouse] = useState("")
    const [city, setCity] = useState("")

    return (
        <AppScreensLayout title="Addresses">
            <View style={styles.container}>
                <View style={styles.inputBlock}>
                    <Text style={styles.inputTitle}>Phone no.</Text>
                    <View style={styles.inputBox}>
                        <TextInput placeholder="722114121812" value={number} onChangeText={setNumber} />
                    </View>
                </View>
                <View style={styles.inputBlock}>
                    <Text style={styles.inputTitle}>Address Name</Text>
                    <View style={styles.inputBox}>
                        <TextInput placeholder="Home, Work, etc." value={addressName} onChangeText={setAddressName} />
                    </View>
                </View>
                <View style={styles.inputBlock}>
                    <Text style={styles.inputTitle}>Address</Text>
                    <View style={styles.inputBox}>
                        <TextInput placeholder="New York" value={address} onChangeText={setAddress} />
                    </View>
                </View>
                <View style={styles.inputBlock}>
                    <Text style={styles.inputTitle}>House no.</Text>
                    <View style={styles.inputBox}>
                        <TextInput placeholder="11 Street House no 17c" value={house} onChangeText={setHouse} />
                    </View>
                </View>
                <View style={styles.inputBlock}>
                    <Text style={styles.inputTitle}>City</Text>
                    <View style={styles.inputBox}>
                        <TextInput placeholder="USA" value={city} onChangeText={setCity} />
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => {router.back()}}>
                    <Text style={styles.buttonText}>Submit</Text>
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
        gap: 15,
        marginTop: 35
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
    inputTitle: {
        fontSize: 15
    },
    button: {
        height: 35,
        width: 100,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#E35F21",
        marginTop: 25,
        elevation: 5,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    }
})