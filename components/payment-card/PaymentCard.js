import { View, Text, StyleSheet } from "react-native"
import PropTypes from "prop-types"

export default function PaymentCard({id, cardNumber, cardHolderName, cardExpiryDate, backgroundColor, textColor}) {
    return (
        <View style={[styles.cardBoxContainer, {backgroundColor: backgroundColor}]}>
            <View style={styles.cardDetailsContainer}>
                <View style={styles.cardDetailsColumn}>
                    <Text style={[styles.cardDetailsTitle, {color: textColor}]}>Card Number</Text>
                    <Text style={[styles.cardDetailsText, {color: textColor}]}>{cardNumber}</Text>
                </View>
                <View style={styles.cardDetailsColumn}>
                    <Text style={[styles.cardDetailsTitle, {color: textColor}]}>Card Holder{"'"}s name</Text>
                    <Text style={[styles.cardDetailsText, {color: textColor}]}>{cardHolderName}</Text>
                </View>
            </View>
            <View style={styles.cardExpiryDateContainer}>
                <Text style={[styles.cardExpiryDateTitle, {color: textColor}]}>Card Expiry Date</Text>
                <Text style={[styles.cardExpiryDateText, {color: textColor}]}>{cardExpiryDate}</Text>
            </View>
        </View>
    )
}

PaymentCard.propTypes = {
    id: PropTypes.number.isRequired,
    cardNumber: PropTypes.string.isRequired,
    cardHolderName: PropTypes.string.isRequired,
    cardExpiryDate: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    cardBoxContainer: {
        height: 100,
        width: 350,
        borderRadius: 10,
        flexDirection: "column",
        justifyContent: "space-evenly"
    },
    cardDetailsContainer: {
        width: "100%",
        flexDirection: "row"
    },
    cardDetailsColumn: {
        width: "50%",
        flexDirection: "column",
        gap: 5,
        paddingLeft: 15
    },
    cardDetailsText: {
        fontWeight: "bold",
        fontSize: 12.5
    },
    cardDetailsTitle: {
        fontSize: 12.5
    },
    cardExpiryDateContainer: {
        width: "100%",
        flexDirection: "column",
        alignItems: "flex-end",
        paddingHorizontal: 15
    },
    cardExpiryDateText: {
        fontWeight: "bold",
        fontSize: 10
    },
    cardExpiryDateTitle: {
        fontSize: 10
    }
})