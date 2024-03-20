import { Modal, TouchableOpacity, View, Text, StyleSheet } from "react-native"
import { router } from "expo-router"
import PropTypes from "prop-types"

export default function OrderConfirmationPopup({ showPopup, setShowPopup}) {
    return (
        <Modal animationType="fade" transparent visible={showPopup} onRequestClose={() => {setShowPopup(false)}}>
            <View style={styles.container}>
                <View style={styles.popupContainer}>
                    <Text style={styles.popupText}>The Order Has Been Placed Successfully.</Text>
                    <TouchableOpacity 
                        style={styles.continueButton} 
                        onPress={() => {
                            setShowPopup(false)
                            router.navigate("/order-successful")
                        }}
                    >
                        <Text style={styles.continueButtonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

OrderConfirmationPopup.propTypes = {
    showPopup: PropTypes.bool.isRequired,
    setShowPopup: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        alignItems: "center",
        justifyContent: "center"
    },
    popupContainer: {
        height: 75,
        width: 300,
        borderRadius: 5,
        backgroundColor: "white",
        borderWidth: 1.5,
        borderColor: "red",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    popupText: {
        fontSize: 12.5,
        fontWeight: "800",
        color: "#13783B"
    },
    continueButton: {
        height: 22,
        width: 125,
        backgroundColor: "black",
        borderRadius: 2.5,
        alignItems: "center",
        justifyContent: "center"
    },
    continueButtonText: {
        fontSize: 10,
        color: "white",
        fontWeight: "bold"
    }
})