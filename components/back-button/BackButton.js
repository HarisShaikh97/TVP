import { TouchableOpacity, StyleSheet } from "react-native"
import { router } from "expo-router"
import { FontAwesome5 } from "@expo/vector-icons"

export default function BackButton() {
    return (
        <TouchableOpacity style={styles.backButton} onPress={() => {
            if(router.canGoBack()) {
                router.back()
            }
            else {
                router.replace("/")
            }
        }}>
            <FontAwesome5 name="arrow-left" size={15} color="#E35F21" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    backButton: {
        height: 30,
        width: 30,
        backgroundColor: "white",
        marginTop: 5,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    }
})