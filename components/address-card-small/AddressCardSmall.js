import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native"
import PropTypes from "prop-types"

export default function AddressCardSmall({ id, title, description, note }) {
    return (
        <View style={styles.addressContainer}>
            <View style={styles.addressDetailsWrapper}>
                {title?.toUpperCase() === "WORK" ? <Image source={require("../../assets/icons/briefcase.png")} style={styles.addressImage} /> : <Image source={require("../../assets/icons/location.png")} style={styles.addressImage} />}
                <View style={styles.addressDetailsContainer}>
                    <Text style={styles.addressTitle}>{title}</Text>
                    <Text style={styles.addressDetails}>{description}</Text>
                    <Text style={styles.addressDetails}>Note to rider: {note}</Text>
                </View>
            </View>
            <View style={styles.actionButtonsContainer}>
                <TouchableOpacity>
                    <Image source={require("../../assets/icons/edit.png")} style={styles.actionButtonsImage} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require("../../assets/icons/delete.png")} style={styles.actionButtonsImage} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

AddressCardSmall.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    note: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    addressContainer: {
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    addressDetailsWrapper: {
        width: "65%",
        flexDirection: "row",
        gap: 10
    },
    addressDetailsContainer: {
        flexDirection: "column"
    },
    addressImage: {
        height: 20,
        width: 20
    },
    addressTitle: {
        fontSize: 15,
        fontWeight: "bold"
    },
    addressDetails: {
        fontSize: 12
    },
    actionButtonsContainer: {
        flexDirection: "row",
        gap: 15
    },
    actionButtonsImage: {
        height: 20,
        width: 20
    }
})