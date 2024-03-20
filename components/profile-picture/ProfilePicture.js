import { View, Text, Image, StyleSheet } from "react-native"
import PropTypes from "prop-types"

export default function ProfilePicture({ source, name, email }) {
    return (
        <View style={styles.container}>
            <View style={styles.dashedCircle}>
                <Image source={source} style={styles.profileImage} />
            </View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.email}>{email}</Text>
        </View>
    )
}

ProfilePicture.propTypes = {
    source: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        flexDirection: "column",
        alignItems: "center",
        gap: 10
    },
    dashedCircle: {
        height: 125,
        width: 125,
        borderRadius: 65,
        borderWidth: 1,
        borderStyle: "dashed",
        alignItems: "center",
        justifyContent: "center"
    },
    profileImage: {
        height: 110,
        width: 110,
        borderRadius: 60
    },
    name: {
        fontSize: 18,
        fontWeight: "500"
    },
    email: {
        fontSize: 15,
        fontWeight: "bold",
        color: "gray"
    }
})