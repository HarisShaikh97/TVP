import { Stack } from "expo-router"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { MyContextProvider } from "../context/contextProvider"

export default function Layout() {
    return (
        <MyContextProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Stack screenOptions={{headerShown: false}} />
            </GestureHandlerRootView>
        </MyContextProvider>
    )
}