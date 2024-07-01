import { useEffect, useContext } from "react"
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"
import { router } from "expo-router"
import { MyContext } from "../context/context"

export default function Page() {
	const { dispatch } = useContext(MyContext)

	useEffect(() => {
		dispatch({ type: "SET_SELECTED_ADDRESS", payload: null })
	}, [])

	return (
		<View style={styles.container}>
			<Image
				source={require("../assets/images/welcome-image.png")}
				style={styles.bgImage}
			/>
			<Image
				source={require("../assets/logo/tvp-logo.png")}
				style={styles.logo}
			/>
			<Text style={styles.bgText}>
				The Experience of Buying Food Quickly
			</Text>
			<View style={styles.buttonsContainer}>
				<TouchableOpacity
					style={[styles.buttonStyles, styles.signupButtonColor]}
					onPress={() => {
						router.replace("/signup")
					}}
				>
					<Text style={[styles.buttonText, styles.whiteTextColor]}>
						Signup
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.buttonStyles, styles.loginButtonColor]}
					onPress={() => {
						router.replace("/login")
					}}
				>
					<Text style={[styles.buttonText, styles.orangeTextColor]}>
						Login
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={[styles.buttonStyles, styles.continueButtonColor]}
				>
					<Text style={[styles.buttonText, styles.whiteTextColor]}>
						Continue without signup
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center"
	},
	bgImage: {
		height: "35%",
		width: "100%"
	},
	logo: {
		height: 125,
		width: 300,
		marginVertical: 15
	},
	bgText: {
		width: "85%",
		fontSize: 30,
		fontWeight: "bold",
		textAlign: "center"
	},
	buttonsContainer: {
		flex: 1,
		flexDirection: "column",
		gap: 25,
		alignItems: "center",
		justifyContent: "center",
		paddingTop: 10
	},
	buttonStyles: {
		height: 50,
		width: 300,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		elevation: 5,
		shadowOffset: { width: 0, height: 5 },
		shadowOpacity: 0.5,
		shadowRadius: 3
	},
	buttonText: {
		fontSize: 15,
		fontWeight: "bold"
	},
	whiteTextColor: {
		color: "white"
	},
	orangeTextColor: {
		color: "#E35F21"
	},
	signupButtonColor: {
		backgroundColor: "#E35F21"
	},
	loginButtonColor: {
		backgroundColor: "white"
	},
	continueButtonColor: {
		backgroundColor: "black"
	}
})
