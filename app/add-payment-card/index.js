import { useState } from "react"
import { TouchableOpacity, View, Text, TextInput, StyleSheet } from "react-native"
import { router } from "expo-router"
import { CheckBox } from "@rneui/themed"
import AppScreensLayout from "../../components/layouts/app-screens-layout/AppScreensLayout"

export default function Page() {

    const [cardNumber, setCardNumber] = useState("")
    const [expiryDate, setExpiryDate] = useState("")
    const [CVV, setCVV] = useState("")
    const [cardHolderName, setCardHolderName] = useState("")
    const [saveCard, setSaveCard] = useState(false)

    return (
        <AppScreensLayout title="Add Payment Card">
            <View style={styles.container}>
                <View style={styles.inputBlock}>
                    <Text style={styles.labelText}>Card Number</Text>
                    <View style={styles.inputBox}>
                        <TextInput value={cardNumber} onChangeText={setCardNumber} placeholder="****-****-****-****" />
                    </View>
                </View>
                <View style={styles.inputColumnsContainer}>
                    <View style={styles.inputBlockSmall}>
                        <Text style={styles.labelText}>MM/YY</Text>
                        <View style={styles.inputBox}>
                            <TextInput value={expiryDate} onChangeText={setExpiryDate} />
                        </View>
                    </View>
                    <View style={styles.inputBlockSmall}>
                        <Text style={styles.labelText}>CVV</Text>
                        <View style={styles.inputBox}>
                            <TextInput value={CVV} onChangeText={setCVV} />
                        </View>
                    </View>
                </View>
                <View style={styles.inputBlock}>
                    <Text style={styles.labelText}>Name of the card holder</Text>
                    <View style={styles.inputBox}>
                        <TextInput value={cardHolderName} onChangeText={setCardHolderName} />
                    </View>
                </View>
                <CheckBox checked={saveCard} onPress={() => { setSaveCard(!saveCard) }} size={18} containerStyle={styles.checkboxContainer} textStyle={styles.checkboxText} title="Save this card for a faster checkout next time" iconType="ant-design" checkedIcon="checkcircle" uncheckedIcon="checkcircleo" checkedColor="#E35F21" />
                <TouchableOpacity style={styles.doneButton} onPress={() => {router.back()}}>
                    <Text style={styles.doneButtonText}>Done</Text>
                </TouchableOpacity>
            </View>
        </AppScreensLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "90%",
        flexDirection: "column",
        alignItems: "center",
        gap: 15,
        marginVertical: 25
    },
    inputColumnsContainer: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    inputBlock: {
        width: "100%",
        flexDirection: "column",
        gap: 7.5
    },
    inputBlockSmall: {
        width: "45%",
        flexDirection: "column",
        gap: 7.5
    },
    inputBox: {
        height: 40,
        width: "100%",
        borderWidth: 1,
        borderColor: "#E35F21",
        borderRadius: 7.5,
        paddingHorizontal: 10,
        justifyContent: "center"
    },
    labelText: {
        fontSize: 15
    },
    checkboxContainer: {
        width: "100%",
        margin: 0,
        marginVertical: 15, 
        padding: 0,
        paddingLeft: 15
    },
    checkboxText: {
        fontSize: 12, 
        fontWeight: "500", 
        color: "grey"
    },
    doneButton: {
        height: 35,
        width: 100,
        borderRadius: 10,
        backgroundColor: "#E35F21",
        alignItems: "center",
        justifyContent: "center"
    },
    doneButtonText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white"
    }
})