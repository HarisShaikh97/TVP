import {
	SafeAreaView,
	View,
	Text,
	TouchableOpacity,
	Image,
	StatusBar,
	StyleSheet
} from "react-native"
import { router } from "expo-router"
import BackButton from "../../components/back-button/BackButton"

export default function Page() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerContainer}>
				<BackButton />
				<Text style={styles.headerTitle}>
					Your Order is Placed Successfully
				</Text>
			</View>
			<Image
				source={require("../../assets/images/order-tracking.png")}
				style={styles.bgImage}
			/>
			<View style={styles.bodyContainer}>
				<View style={styles.orderDetailsBox}>
					<TouchableOpacity
						onPress={() => {
							router.navigate("/view-otp")
						}}
					>
						<Text style={styles.viewOTPText}>View OTP</Text>
					</TouchableOpacity>
					<Text style={styles.orderDetailsText}>
						Driver is picking up order
					</Text>
					<View style={styles.profilePictureContainer}>
						<Image
							source={require("../../assets/images/profile.png")}
							style={styles.profilePicture}
						/>
					</View>
					<Text style={styles.orderDetailsText}>OSHANA</Text>
					<Text style={styles.orderIdText}>id NO: 3132143456</Text>
				</View>
				<View style={styles.orderDetailsBox}>
					<Text style={styles.orderDetailsHeadingText}>
						Your Address
					</Text>
					<Text style={styles.addressText}>
						Houesign Estate, lan 9, 25/3
					</Text>
					<Text style={styles.orderDetailsHeadingText}>
						Estimate Time
					</Text>
					<View style={styles.arrivingTimeContainer}>
						<Text
							style={[
								styles.arrivingTimeTextStyle,
								styles.arrivingTimeTextWhite
							]}
						>
							Arriving in
						</Text>
						<Text
							style={[
								styles.arrivingTimeTextStyle,
								styles.arrivingTimeTextOrange
							]}
						>
							25-30 mins
						</Text>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		gap: 25,
		alignItems: "center",
		backgroundColor: "#181818",
		paddingTop: StatusBar?.currentHeight || 0
	},
	headerContainer: {
		width: "90%",
		gap: 15
	},
	headerTitle: {
		textAlign: "center",
		fontSize: 20,
		fontWeight: "bold",
		color: "white"
	},
	bgImage: {
		height: "60%",
		width: "90%",
		borderRadius: 15,
		overflow: "hidden"
	},
	bodyContainer: {
		flex: 1,
		width: "100%",
		flexDirection: "row",
		gap: 15,
		alignItems: "center",
		justifyContent: "center",
		marginBottom: StatusBar?.currentHeight / 2 || 0
	},
	orderDetailsBox: {
		height: "100%",
		width: "40%",
		borderRadius: 30,
		borderWidth: 2.5,
		borderColor: "white",
		backgroundColor: "#313036",
		paddingVertical: 10,
		paddingHorizontal: 15,
		flexDirection: "column",
		justifyContent: "space-evenly"
	},
	viewOTPText: {
		fontSize: 12.5,
		fontWeight: "800",
		color: "#E35F21"
	},
	orderDetailsText: {
		fontSize: 10,
		fontWeight: "bold",
		color: "white"
	},
	profilePictureContainer: {
		height: 42,
		width: 42,
		borderRadius: 25,
		borderStyle: "dashed",
		borderColor: "#8D92A3",
		borderWidth: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	profilePicture: {
		height: 35,
		width: 35,
		borderRadius: 20
	},
	orderIdText: {
		fontSize: 12.5,
		color: "white"
	},
	orderDetailsHeadingText: {
		fontSize: 12.5,
		fontWeight: "800",
		color: "white"
	},
	addressText: {
		fontSize: 15,
		color: "white"
	},
	arrivingTimeContainer: {
		flexDirection: "col",
		gap: 5
	},
	arrivingTimeTextStyle: {
		fontSize: 10,
		fontWeight: "bold"
	},
	arrivingTimeTextWhite: {
		color: "white"
	},
	arrivingTimeTextOrange: {
		color: "#E35F21"
	}
})
