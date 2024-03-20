import { View, Text, StyleSheet } from "react-native"
import PropTypes from "prop-types"
import { Ionicons } from "@expo/vector-icons"

export default function AddressCardColored({id, title, description, backgroundColor, textColor}) {
    return (
        <View style={[styles.cardBoxContainer, {backgroundColor: backgroundColor}]}>
            <Ionicons name="location-sharp" size={30} color={textColor} />
            <View style={styles.addressDetailsContainer}>
                <Text style={[styles.titleText, {color: textColor}]}>{title}</Text>
                <Text style={[styles.descriptionText, {color: textColor}]}>{description}</Text>
            </View>
        </View>
    )
}

AddressCardColored.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    cardBoxContainer: {
        height: 100,
        width: 350,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 15
    },
    addressDetailsContainer: {
        flexDirection: "column"
    },
    titleText: {
        fontSize: 18
    },
    descriptionText: {
        fontSize: 12,
        opacity: 0.75
    }
})