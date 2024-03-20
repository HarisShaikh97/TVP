import { SafeAreaView, View, Image, StatusBar, StyleSheet } from "react-native"
import PropTypes from "prop-types"
import RestaurantScreensHeader from "../restaurant-screens-header/RestaurantScreensHeader"

export default function RestaurantScreensLayout({children, imageSource}) {
    return (
        <View style={styles.wrapper}>
            <Image source={imageSource} style={styles.backgroundImage} />
            <View style={styles.overlay}>
                <View style={styles.container}>
                    <SafeAreaView style={styles.header}>
                        <RestaurantScreensHeader />
                    </SafeAreaView>
                    <View style={styles.body}>{children}</View>
                </View>
            </View>
        </View>
    )
}

RestaurantScreensLayout.propTypes = {
    children: PropTypes.node.isRequired,
    imageSource: PropTypes.node.isRequired
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    backgroundImage: {
        width: "100%",
        height: "35%"
    },
    overlay: StyleSheet.absoluteFillObject,
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: StatusBar?.currentHeight || 0
    },
    header: {
        width: "100%",
        alignItems: "center"
    },
    body: {
        height: "75%",
        width: "100%",
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flexDirection: "column",
        alignItems: "center"
    }
})