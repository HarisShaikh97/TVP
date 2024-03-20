import { TouchableOpacity, ImageBackground, Text, StyleSheet } from "react-native"
import { router } from "expo-router"
import PropTypes from "prop-types"

export default function CategoryCard({ id, name, image }) {
    return (
        <TouchableOpacity style={styles.categoryContainer} onPress={() => {router.navigate(`/category/${name}`)}}>
            <ImageBackground source={image} style={styles.categoryBackgroundImage}>
                <Text style={styles.categoryTitle}>{name}</Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

CategoryCard.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.node.isRequired
}

const styles = StyleSheet.create({
    categoryContainer: {
        height: 65,
        width: 100,
        borderRadius: 5,
        backgroundColor: "#7C9DEA",
        overflow: "hidden",
        marginBottom: 25
    },
    categoryBackgroundImage: {
        flex: 1,
        width: "100%",
        justifyContent: "flex-end"
    },
    categoryTitle: {
        fontSize: 12.5,
        fontWeight: "bold",
        color: "white",
        margin: 5
    }
})