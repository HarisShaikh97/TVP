import { Modal, SafeAreaView, View, Text, Image, TouchableWithoutFeedback, TouchableOpacity, StatusBar, StyleSheet } from "react-native"
import { router } from "expo-router"
import PropTypes from "prop-types"

export default function SideNav({ openSideNav, setOpenSideNav, handleLogout }) {
    return (
        <Modal animationType="fade" transparent visible={openSideNav} onRequestClose={() => { setOpenSideNav(false) }} >
            <View style={styles.sideNavWrapper}>
                <SafeAreaView style={styles.sideNavContainer}>
                    <View style={styles.sideNavBody}>
                        <View style={styles.profileHeader}>
                            <Image source={require("../../assets/logo/tvp-logo3.png")} style={styles.logo} />
                            <TouchableOpacity
                                style={styles.navItemContainer}
                                onPress={() => {
                                    setOpenSideNav(false)
                                    router.navigate("/profile")
                                }}
                            >
                                <Image source={require("../../assets/icons/profile.png")} style={styles.navItemIcon} />
                                <Text style={styles.navItemText}>Profile</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.heading}>True Value Product</Text>
                        <View style={styles.navItemListContainer}>
                            <View style={styles.navItemList}>
                                <TouchableOpacity
                                    style={styles.navItemContainer}
                                    onPress={() => {
                                        setOpenSideNav(false)
                                        router.navigate("/favourites")
                                    }}
                                >
                                    <Image source={require("../../assets/icons/favourites.png")} style={styles.navItemIcon} />
                                    <Text style={styles.navItemText}>Favourites</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.navItemContainer}
                                    onPress={() => {
                                        setOpenSideNav(false)
                                        router.navigate("/orders-and-reordering")
                                    }}
                                >
                                    <Image source={require("../../assets/icons/orders.png")} style={styles.navItemIcon} />
                                    <Text style={styles.navItemText}>Orders & Reordering</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.navItemContainer}
                                    onPress={() => {
                                        setOpenSideNav(false)
                                        router.navigate("/addresses")
                                    }}
                                >
                                    <Image source={require("../../assets/icons/addresses.png")} style={styles.navItemIcon} />
                                    <Text style={styles.navItemText}>Addresses</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.navItemContainer}
                                    onPress={() => {
                                        setOpenSideNav(false)
                                        router.navigate("/refer-and-earn")
                                    }}
                                >
                                    <Image source={require("../../assets/icons/refer.png")} style={styles.navItemIcon} />
                                    <Text style={styles.navItemText}>Refer and Earn</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={styles.navItemContainer}
                                    onPress={() => {
                                        setOpenSideNav(false)
                                        router.navigate("/wallet")
                                    }}
                                >
                                    <Image source={require("../../assets/icons/wallet.png")} style={styles.navItemIcon} />
                                    <Text style={styles.navItemText}>Wallet</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.navItemList}>
                                <TouchableOpacity 
                                    style={styles.navItemContainer}
                                    onPress={() => {
                                        setOpenSideNav(false)
                                        router.navigate("/terms-and-conditions")
                                    }}
                                >
                                    <Image source={require("../../assets/icons/terms-and-conditions.png")} style={styles.navItemIcon} />
                                    <Text style={styles.navItemText}>Terms and Conditions</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.navItemContainer} onPress={() => {handleLogout()}}>
                                    <Image source={require("../../assets/icons/logout.png")} style={styles.navItemIcon} />
                                    <Text style={styles.navItemText}>Logout</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
                <TouchableWithoutFeedback onPress={() => { setOpenSideNav(false) }}>
                    <View style={styles.modalEmptySpace} />
                </TouchableWithoutFeedback>
            </View>
        </Modal>
    )
}

SideNav.propTypes = {
    openSideNav: PropTypes.bool.isRequired,
    setOpenSideNav: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    sideNavWrapper: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    modalEmptySpace: {
        width: "35%"
    },
    sideNavContainer: {
        width: "65%",
        borderBottomRightRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: "#181818",
        paddingBottom: StatusBar?.currentHeight || 0
    },
    sideNavBody: {
        flex: 1,
        flexDirection: "column",
        paddingHorizontal: 15
    },
    profileHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    logo: {
        height: 65,
        width: 65
    },
    navItemContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    navItemIcon: {
        height: 20,
        width: 20
    },
    navItemText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white"
    },
    navItemListContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    navItemList: {
        flexDirection: "column",
        gap: 25,
        marginTop: 50
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginTop: 15
    }
})