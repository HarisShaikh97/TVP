import { useState, useCallback } from "react"
import { View, Image, StyleSheet } from "react-native"
import { useFocusEffect } from "expo-router"
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, Easing } from "react-native-reanimated"
import OrderProcessScreensLayout from "../../components/layouts/order-process-screens-layout/OrderProcessScreensLayout"
import OrderConfirmationPopup from "../../components/order-confirmation-popup/OrderConfirmationPopup"

export default function Page() {

    const [showPopup, setShowPopup] = useState(false)

    const rotate = useSharedValue(2 * Math.PI)

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotate.value}rad` }]
        }
    })

    useFocusEffect(
        useCallback(() => {
            setTimeout(() => {
                setShowPopup(true)
            }, 2000)
            
            const animation = withRepeat(withTiming(0, { duration: 1000, easing: Easing.linear }), -1)
            
            rotate.value = animation
            
            return () => {
                rotate.value = 2 * Math.PI
            }
        }, [])
    )

    return (
        <OrderProcessScreensLayout title="Waiting">
            <View style={styles.container}>
                <OrderConfirmationPopup showPopup={showPopup} setShowPopup={setShowPopup} />
                <Animated.View style={animatedStyle}>
                    <Image source={require("../../assets/icons/spinner.png")} style={styles.loaderImage} />
                </Animated.View>
            </View>
        </OrderProcessScreensLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    loaderImage: {
        height: 150,
        width: 150
    }
})