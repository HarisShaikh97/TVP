import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { router } from "expo-router"
import AppScreensLayout from "../../components/layouts/app-screens-layout/AppScreensLayout"
import ProfilePicture from "../../components/profile-picture/ProfilePicture"

export default function Page() {
    return (
        <AppScreensLayout title="Profile Information">
            <ProfilePicture source={require("../../assets/images/profile.png")} name="Angga Risky" email="ABC@hotmail.com" />
            <View style={styles.container}>
                <View style={styles.listItemWrapper}>
                    <View style={styles.listItemContainer}>
                        <Image source={require("../../assets/icons/profile2.png")} style={styles.icon} />
                        <View style={styles.listItemDetailsContainer}>
                            <Text style={styles.listItemTitle}>Profile Information</Text>
                            <Text style={styles.listItemDetails}>Your account information</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => { router.navigate("/profile-information") }}>
                        <AntDesign name="right" size={20} color="#E35F21" />
                    </TouchableOpacity>
                </View>
                <View style={styles.listItemWrapper}>
                    <View style={styles.listItemContainer}>
                        <Image source={require("../../assets/icons/lock2.png")} style={styles.icon} />
                        <View style={styles.listItemDetailsContainer}>
                            <Text style={styles.listItemTitle}>Change Password</Text>
                            <Text style={styles.listItemDetails}>Change your password</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => { router.navigate("/change-password") }}>
                        <AntDesign name="right" size={20} color="#E35F21" />
                    </TouchableOpacity>
                </View>
                <View style={styles.listItemWrapper}>
                    <View style={styles.listItemContainer}>
                        <Image source={require("../../assets/icons/location2.png")} style={styles.icon} />
                        <View style={styles.listItemDetailsContainer}>
                            <Text style={styles.listItemTitle}>Locations</Text>
                            <Text style={styles.listItemDetails}>Add or remove your delivery locations</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => {router.navigate("/locations")}}>
                        <AntDesign name="right" size={20} color="#E35F21" />
                    </TouchableOpacity>
                </View>
                <View style={styles.listItemWrapper}>
                    <View style={styles.listItemContainer}>
                        <Image source={require("../../assets/icons/credit-card.png")} style={styles.icon} />
                        <View style={styles.listItemDetailsContainer}>
                            <Text style={styles.listItemTitle}>Debit Card</Text>
                            <Text style={styles.listItemDetails}>Add or remove your cards</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => {router.navigate("/cards")}}>
                        <AntDesign name="right" size={20} color="#E35F21" />
                    </TouchableOpacity>
                </View>
            </View>
        </AppScreensLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        gap: 35,
        marginTop: 80
    },
    listItemWrapper: {
        width: "85%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    listItemContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15
    },
    listItemDetailsContainer: {
        flexDirection: "column",
        gap: 5
    },
    listItemTitle: {
        fontSize: 15,
        fontWeight: "700"
    },
    listItemDetails: {
        fontSize: 12,
    },
    icon: {
        height: 25,
        width: 25
    }
})