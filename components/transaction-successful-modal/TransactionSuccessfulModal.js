import { Modal, TouchableOpacity, View, Text, Image, StyleSheet } from "react-native"
import PropTypes from "prop-types"

export default function TransactionSuccessfulModal({showTransactionSuccessfulModal, setShowTransactionSuccessfulModal, setShowTopUpView}) {
    return (
        <Modal animationType="fade" visible={showTransactionSuccessfulModal} transparent>
            <View style={styles.wrapper}>
                <View style={styles.container}>
                    <Image source={require("../../assets/icons/accept.png")} style={styles.image} />
                    <Text style={styles.text}>Transaction Successful</Text>
                    <TouchableOpacity 
                        style={styles.doneButton} 
                        onPress={() => {
                            setShowTopUpView(false)
                            setShowTransactionSuccessfulModal(false)
                        }}
                    >
                        <Text style={styles.doneButtonText}>Done</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

TransactionSuccessfulModal.propTypes = {
    showTransactionSuccessfulModal: PropTypes.bool.isRequired,
    setShowTransactionSuccessfulModal: PropTypes.func.isRequired,
    setShowTopUpView: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    container: {
        height: 175,
        width: "85%",
        borderRadius: 10,
        backgroundColor: "white",
        borderWidth: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        elevation: 5,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.25,
        shadowRadius: 3
    },
    image: {
        height: 65,
        width: 65
    },
    text: {
        fontSize: 20,
        fontWeight: "bold"
    },
    doneButton: {
        height: 25,
        width: 75,
        borderRadius: 5,
        backgroundColor: "#E35F21",
        alignItems: "center",
        justifyContent: "center"
    },
    doneButtonText: {
        fontSize: 12,
        fontWeight: "bold",
        color: "white"
    }
})