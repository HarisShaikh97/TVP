import { View, TouchableOpacity, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"
import PropTypes from "prop-types"

export default function StarRatingInput({ratings, setRatings}) {
    return (
        <View style={styles.ratingStarsContainer}>
            <TouchableOpacity onPress={() => {setRatings(1)}}>
                <Feather name="star" size={30} color={ratings >= 1 ? "#E35F21" : "black"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setRatings(2)}}>
                <Feather name="star" size={30} color={ratings >= 2 ? "#E35F21" : "black"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setRatings(3)}}>
                <Feather name="star" size={30} color={ratings >= 3 ? "#E35F21" : "black"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setRatings(4)}}>
                <Feather name="star" size={30} color={ratings >= 4 ? "#E35F21" : "black"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setRatings(5)}}>
                <Feather name="star" size={30} color={ratings === 5 ? "#E35F21" : "black"} />
            </TouchableOpacity>
        </View>
    )
}

StarRatingInput.propTypes = {
    ratings: PropTypes.number.isRequired,
    setRatings: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    ratingStarsContainer: {
        flexDirection: "row",
        alignItems: "center"
    }
})