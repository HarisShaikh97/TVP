import { useContext } from "react"
import { Modal, View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native"
import { router } from "expo-router"
import PropTypes from "prop-types"
import { Entypo } from "@expo/vector-icons"
import { MyContext } from "../../context/context"

export default function AddressModal({ openAddressModal, setOpenAddressModal }) {

    const { state, dispatch } = useContext(MyContext)

    const addresses = [
        {
            id: 1,
            title: "Work",
            address: "Zafar Center Baloch Colony Flyover Karachi"
        },
        {
            id: 2,
            title: "Home",
            address: "Zafar Center Baloch Colony Flyover Karachi"
        },
        {
            id: 3,
            title: "Office",
            address: "Zafar Center Baloch Colony Flyover Karachi"
        },
        {
            id: 4,
            title: "Park",
            address: "Zafar Center Baloch Colony Flyover Karachi"
        },
        {
            id: 5,
            title: "Work",
            address: "Zafar Center Baloch Colony Flyover Karachi"
        },
        {
            id: 6,
            title: "Home",
            address: "Zafar Center Baloch Colony Flyover Karachi"
        },
        {
            id: 7,
            title: "Office",
            address: "Zafar Center Baloch Colony Flyover Karachi"
        },
        {
            id: 8,
            title: "Park",
            address: "Zafar Center Baloch Colony Flyover Karachi"
        },
        {
            id: 9,
            title: "Work",
            address: "Zafar Center Baloch Colony Flyover Karachi"
        },
        {
            id: 10,
            title: "Home",
            address: "Zafar Center Baloch Colony Flyover Karachi"
        },
        {
            id: 11,
            title: "Office",
            address: "Zafar Center Baloch Colony Flyover Karachi"
        },
        {
            id: 12,
            title: "Park",
            address: "Zafar Center Baloch Colony Flyover Karachi"
        }
    ]

    return (
        <Modal animationType="slide" transparent visible={openAddressModal} onRequestClose={() => {setOpenAddressModal(false)}} >
            <View style={styles.addressModalWrapper}>
                <View style={styles.addressModalContainer}>
                    <Text style={styles.title}>Can you confirm if this is your location?</Text>
                    <TouchableOpacity style={styles.currentLocationContainer}>
                        <Entypo name="direction" size={25} color="#E35F21" />
                        <Text style={styles.currentLocationText}>Use my current location</Text>
                    </TouchableOpacity>
                    <ScrollView style={styles.bodyScrollArea} showsVerticalScrollIndicator={false}>
                        <View style={styles.addressListContainer}>
                            {addresses?.map((item, key) => {
                                return (
                                    <View style={styles.addressItemContainer} key={key}>
                                        <TouchableOpacity style={state?.selectedAddress?.id === item?.id ? styles.checkboxSelected : styles.checkbox} onPress={() => { dispatch({ type: "SET_SELECTED_ADDRESS", payload: item }) }} />
                                        <View style={styles.addressDetailsContainer}>
                                            <Text style={styles.addressTitle}>{item?.title}</Text>
                                            <Text>{item?.address}</Text>
                                        </View>
                                    </View>
                                )
                            })}
                        </View>
                    </ScrollView>
                    <TouchableOpacity 
                        style={styles.newLocationContainer} 
                        onPress={() => {
                            setOpenAddressModal(false)
                            router.navigate("/add-address")
                        }}
                    >
                        <Entypo name="plus" size={30} color="#E35F21" />
                        <Text style={styles.newLocationText}>Select a different location</Text>
                    </TouchableOpacity>
                    {state?.selectedAddress === null ? (
                        <View style={styles.confirmButtonDisabled}>
                            <Text style={styles.confirmButtonText}>Confirm location</Text>
                        </View>
                    ) : (
                        <TouchableOpacity style={styles.confirmButton} onPress={() => { setOpenAddressModal(false) }}>
                            <Text style={styles.confirmButtonText}>Confirm location</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </Modal>
    )
}

AddressModal.propTypes = {
    openAddressModal: PropTypes.bool.isRequired,
    setOpenAddressModal: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    addressModalWrapper: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    addressModalContainer: {
        height: "85%",
        flexDirection: "column",
        borderRadius: 25,
        backgroundColor: "white",
        padding: 25
    },
    title: {
        fontSize: 18,
        fontWeight: "bold"
    },
    currentLocationContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        marginTop: 25
    },
    currentLocationText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#E35F21"
    },
    addressListContainer: {
        flexDirection: "column",
        gap: 25
    },
    addressItemContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20
    },
    addressDetailsContainer: {
        flexDirection: "column"
    },
    addressTitle: {
        fontSize: 20,
        fontWeight: "bold"
    },
    checkbox: {
        height: 25,
        width: 25,
        borderRadius: 15,
        borderWidth: 3
    },
    checkboxSelected: {
        height: 25,
        width: 25,
        borderRadius: 15,
        borderWidth: 3,
        backgroundColor: "#E35F21"
    },
    bodyScrollArea: {
        width: "100%",
        flex: 1,
        marginTop: 35,
        marginBottom: 10
    },
    newLocationContainer: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    },
    newLocationText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#E35F21"
    },
    confirmButton: {
        height: 60,
        width: "100%",
        borderRadius: 5,
        backgroundColor: "#E35F21",
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    confirmButtonDisabled: {
        height: 60,
        width: "100%",
        borderRadius: 5,
        backgroundColor: "#E35F21",
        opacity: 0.5,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    confirmButtonText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    }
})