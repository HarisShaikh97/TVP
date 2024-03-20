import { View, StyleSheet } from "react-native"
import PropTypes from "prop-types"
import { FontAwesome } from "@expo/vector-icons"

export default function StarRating({rating}) {
    return(
        <View style={styles.ratingStarsContainer}>
            <FontAwesome name={rating < 0.5 ? "star-o" : (rating < 1 ? "star-half-empty" : "star")} size={12} color="#E35F21" />
            <FontAwesome name={rating < 1.5 ? "star-o" : (rating < 2 ? "star-half-empty" : "star")} size={12} color="#E35F21" />
            <FontAwesome name={rating < 2.5 ? "star-o" : (rating < 3 ? "star-half-empty" : "star")} size={12} color="#E35F21" />
            <FontAwesome name={rating < 3.5 ? "star-o" : (rating < 4 ? "star-half-empty" : "star")} size={12} color="#E35F21" />
            <FontAwesome name={rating < 4.5 ? "star-o" : (rating < 5 ? "star-half-empty" : "star")} size={12} color="#E35F21" />
        </View>
    )
}

StarRating.propTypes = {
    rating: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
    ratingStarsContainer: {
        flexDirection: "row",
        alignItems: "center"
    }
})