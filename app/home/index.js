import { useState, useEffect, useContext } from "react"
import {
	SafeAreaView,
	ScrollView,
	View,
	Text,
	Image,
	TouchableOpacity,
	StatusBar,
	StyleSheet
} from "react-native"
import { router } from "expo-router"
import { Entypo, AntDesign } from "@expo/vector-icons"
import { MyContext } from "../../context/context"
import CartButton from "../../components/cart-button/CartButton"
import RestaurantCard from "../../components/restaurant-card/RestaurantCard"
import CategoryCard from "../../components/category-card/CategoryCard"
import SideNav from "../../components/side-nav/SideNav"
import AddressModal from "../../components/address-modal/AddressModal"

export default function Page() {
	const { state, dispatch } = useContext(MyContext)

	const [selectedTab, setSelectedTab] = useState("delivery")
	const [openSideNav, setOpenSideNav] = useState(false)
	const [openAddressModal, setOpenAddressModal] = useState(false)

	useEffect(() => {
		if (state?.selectedAddress === null) {
			setOpenAddressModal(true)
		}
		if (state?.accessToken === null) {
			router.replace("/")
		}
	}, [state])

	const recommended = [
		{
			id: 1,
			name: "Mc'Donalds",
			type: "Fast Food, American",
			delivery_fee: 60,
			delivery_time: 36,
			discount: 15,
			logo: require("../../assets/logo/mcdonalds.png"),
			cover: require("../../assets/images/restaurant1.png")
		},
		{
			id: 2,
			name: "Mc'Donalds",
			type: "Fast Food, American",
			delivery_fee: 60,
			delivery_time: 36,
			discount: 0,
			logo: require("../../assets/logo/mcdonalds.png"),
			cover: require("../../assets/images/restaurant1.png")
		},
		{
			id: 3,
			name: "Mc'Donalds",
			type: "Fast Food, American",
			delivery_fee: 60,
			delivery_time: 36,
			discount: 15,
			logo: require("../../assets/logo/mcdonalds.png"),
			cover: require("../../assets/images/restaurant1.png")
		},
		{
			id: 4,
			name: "Mc'Donalds",
			type: "Fast Food, American",
			delivery_fee: 60,
			delivery_time: 36,
			discount: 0,
			logo: require("../../assets/logo/mcdonalds.png"),
			cover: require("../../assets/images/restaurant1.png")
		},
		{
			id: 5,
			name: "Mc'Donalds",
			type: "Fast Food, American",
			delivery_fee: 60,
			delivery_time: 36,
			discount: 15,
			logo: require("../../assets/logo/mcdonalds.png"),
			cover: require("../../assets/images/restaurant1.png")
		},
		{
			id: 6,
			name: "Mc'Donalds",
			type: "Fast Food, American",
			delivery_fee: 60,
			delivery_time: 36,
			discount: 15,
			logo: require("../../assets/logo/mcdonalds.png"),
			cover: require("../../assets/images/restaurant1.png")
		}
	]

	const categories = [
		{
			id: 1,
			name: "Caribbean",
			image: require("../../assets/images/category1.png")
		},
		{
			id: 2,
			name: "Donuts",
			image: require("../../assets/images/category1.png")
		},
		{
			id: 3,
			name: "Pizza",
			image: require("../../assets/images/category1.png")
		},
		{
			id: 4,
			name: "Noodles",
			image: require("../../assets/images/category1.png")
		},
		{
			id: 5,
			name: "Indian",
			image: require("../../assets/images/category1.png")
		}
	]

	const handleLogout = () => {
		setOpenSideNav(false)
		dispatch({ type: "SET_ACCESS_TOKEN", payload: null })
	}

	return (
		<SafeAreaView style={styles.container}>
			<SideNav
				openSideNav={openSideNav}
				setOpenSideNav={setOpenSideNav}
				handleLogout={handleLogout}
			/>
			<AddressModal
				openAddressModal={openAddressModal}
				setOpenAddressModal={setOpenAddressModal}
			/>
			<View style={styles.firstHeaderContainer}>
				<View style={styles.greetingsContainer}>
					<View style={styles.greetingsHeadingContainer}>
						<Text style={styles.greetingsHeadingText}>
							Good Evening, Tony
						</Text>
						<Image
							source={require("../../assets/icons/hand-wave.png")}
							style={styles.greetingsImage}
						/>
					</View>
					<Text style={styles.greetingsText}>
						Eat right! Be tight!
					</Text>
				</View>
				<CartButton color="#E35F21" />
			</View>
			<View style={styles.secondHeaderContainer}>
				<TouchableOpacity
					onPress={() => {
						setOpenSideNav(true)
					}}
				>
					<Image
						source={require("../../assets/icons/burger-menu.png")}
						style={styles.secondHeaderIcons}
					/>
				</TouchableOpacity>
				<View style={styles.locationContainer}>
					<View style={styles.locationHeadingContainer}>
						<Entypo name="location-pin" size={18} color="white" />
						<Text style={styles.locationHeadingText}>
							{state?.selectedAddress === null
								? "My Location"
								: state?.selectedAddress?.title}
						</Text>
					</View>
					<View style={styles.locationDetailContainer}>
						<Text
							style={styles.locationDetailText}
							numberOfLines={1}
							ellipsizeMode="tail"
						>
							{state?.selectedAddress === null
								? "243 - Street New York city , North"
								: state?.selectedAddress?.address}
						</Text>
						<AntDesign name="right" size={20} color="white" />
					</View>
				</View>
				<TouchableOpacity
					onPress={() => {
						router.navigate("/search")
					}}
				>
					<Image
						source={require("../../assets/icons/search.png")}
						style={styles.secondHeaderIcons}
						resizeMode="contain"
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.bodyContainer}>
				<View style={styles.tabsContainer}>
					<TouchableOpacity
						style={
							selectedTab === "delivery" &&
							styles.selectedTabStyles
						}
						onPress={() => {
							if (selectedTab !== "delivery") {
								setSelectedTab("delivery")
							}
						}}
					>
						<Text
							style={
								selectedTab === "delivery"
									? styles.selectedTabText
									: styles.tabText
							}
						>
							Delivery
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={
							selectedTab === "pickup" && styles.selectedTabStyles
						}
						onPress={() => {
							if (selectedTab !== "pickup") {
								setSelectedTab("pickup")
							}
						}}
					>
						<Text
							style={
								selectedTab === "pickup"
									? styles.selectedTabText
									: styles.tabText
							}
						>
							Pickup
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={
							selectedTab === "deals" && styles.selectedTabStyles
						}
						onPress={() => {
							if (selectedTab !== "deals") {
								setSelectedTab("deals")
							}
						}}
					>
						<Text
							style={
								selectedTab === "deals"
									? styles.selectedTabText
									: styles.tabText
							}
						>
							Deals & Discount
						</Text>
					</TouchableOpacity>
				</View>
				<ScrollView
					style={styles?.bodyScrollArea}
					showsVerticalScrollIndicator={false}
				>
					{selectedTab === "delivery" && (
						<View style={styles.deliveryScrollContainer}>
							<View style={styles.offerContainer}>
								<View style={styles.offerNotch}>
									<View style={styles.curveContainer}>
										<View
											style={
												styles.leftUpperCurveContainer
											}
										>
											<View
												style={styles.leftUpperCurve}
											/>
										</View>
										<View
											style={
												styles.leftLowerCurveContainer
											}
										>
											<View
												style={styles.leftLowerCurve}
											/>
										</View>
									</View>
									<View style={styles.notchEmptySpace} />
									<View style={styles.curveContainer}>
										<View
											style={
												styles.rightLowerCurveContainer
											}
										>
											<View
												style={styles.rightLowerCurve}
											/>
										</View>
										<View
											style={
												styles.rightUpperCurveContainer
											}
										>
											<View
												style={styles.rightUpperCurve}
											/>
										</View>
									</View>
								</View>
								<View style={styles.offerDetails}>
									<Text style={styles.offerText}>
										Order from these restaurants and save
									</Text>
									<TouchableOpacity
										style={styles.browseButtonContainer}
									>
										<Text style={styles.browseButtonText}>
											Browse offer
										</Text>
										<View
											style={
												styles.browseButtonArrowContainer
											}
										>
											<AntDesign
												name="arrowright"
												size={12}
												color="white"
											/>
										</View>
									</TouchableOpacity>
								</View>
								<Image
									source={require("../../assets/images/offer-image.png")}
									style={styles.offerImage}
								/>
							</View>
							<View style={styles.sectionContainer}>
								<View style={styles.sectionHeadingContainer}>
									<Text style={styles.sectionHeadingTitle}>
										Recommended
									</Text>
									<TouchableOpacity
										onPress={() => {
											router.navigate("/recommended")
										}}
									>
										<Text style={styles.seeAllText}>
											See all
										</Text>
									</TouchableOpacity>
								</View>
								<ScrollView
									horizontal
									style={styles.horizontalScrollArea}
									showsHorizontalScrollIndicator={false}
								>
									<View
										style={styles.horizontalScrollContainer}
									>
										{recommended?.map((item, key) => {
											return (
												<RestaurantCard
													id={item?.id}
													name={item?.name}
													type={item?.type}
													delivery_time={
														item?.delivery_time
													}
													delivery_fee={
														item?.delivery_fee
													}
													discount={item?.discount}
													cover={item?.cover}
													logo={item?.logo}
													key={key}
												/>
											)
										})}
									</View>
								</ScrollView>
							</View>
							<View style={styles.sectionContainer}>
								<View style={styles.sectionHeadingContainer}>
									<Text style={styles.sectionHeadingTitle}>
										Categories
									</Text>
									<TouchableOpacity
										onPress={() => {
											router.navigate("/categories")
										}}
									>
										<Text style={styles.seeAllText}>
											See all
										</Text>
									</TouchableOpacity>
								</View>
								<ScrollView
									horizontal
									style={styles.horizontalScrollArea}
									showsHorizontalScrollIndicator={false}
								>
									<View
										style={styles.horizontalScrollContainer}
									>
										{categories?.map((item, key) => {
											return (
												<CategoryCard
													id={item?.id}
													name={item?.name}
													image={item?.image}
													key={key}
												/>
											)
										})}
									</View>
								</ScrollView>
							</View>
							<View style={styles.sectionContainer}>
								<View style={styles.sectionHeadingContainer}>
									<Text style={styles.sectionHeadingTitle}>
										Popular near you
									</Text>
									<TouchableOpacity
										onPress={() => {
											router.navigate("/popular-near-you")
										}}
									>
										<Text style={styles.seeAllText}>
											See all
										</Text>
									</TouchableOpacity>
								</View>
								<ScrollView
									horizontal
									style={styles.horizontalScrollArea}
									showsHorizontalScrollIndicator={false}
								>
									<View
										style={styles.horizontalScrollContainer}
									>
										{recommended?.map((item, key) => {
											return (
												<RestaurantCard
													id={item?.id}
													name={item?.name}
													type={item?.type}
													delivery_time={
														item?.delivery_time
													}
													delivery_fee={
														item?.delivery_fee
													}
													discount={item?.discount}
													cover={item?.cover}
													logo={item?.logo}
													key={key}
												/>
											)
										})}
									</View>
								</ScrollView>
							</View>
						</View>
					)}
					{selectedTab === "pickup" && (
						<View style={styles.pickupScrollContainer}>
							<View style={styles.sectionContainer}>
								<View style={styles.sectionHeadingContainer}>
									<Text style={styles.sectionHeadingTitle}>
										Near By
									</Text>
									<TouchableOpacity
										onPress={() => {
											router.navigate("/popular-near-you")
										}}
									>
										<Text style={styles.seeAllText}>
											See all
										</Text>
									</TouchableOpacity>
								</View>
								<View style={styles.sectionBody}>
									{recommended?.map((item, key) => {
										return (
											<RestaurantCard
												id={item?.id}
												name={item?.name}
												type={item?.type}
												delivery_time={
													item?.delivery_time
												}
												delivery_fee={
													item?.delivery_fee
												}
												discount={item?.discount}
												cover={item?.cover}
												logo={item?.logo}
												key={key}
											/>
										)
									})}
								</View>
							</View>
							<View style={styles.sectionContainer}>
								<View style={styles.sectionHeadingContainer}>
									<Text style={styles.sectionHeadingTitle}>
										Recommended
									</Text>
									<TouchableOpacity
										onPress={() => {
											router.navigate("/recommended")
										}}
									>
										<Text style={styles.seeAllText}>
											See all
										</Text>
									</TouchableOpacity>
								</View>
								<View style={styles.sectionBody}>
									{recommended?.map((item, key) => {
										return (
											<RestaurantCard
												id={item?.id}
												name={item?.name}
												type={item?.type}
												delivery_time={
													item?.delivery_time
												}
												delivery_fee={
													item?.delivery_fee
												}
												discount={item?.discount}
												cover={item?.cover}
												logo={item?.logo}
												key={key}
											/>
										)
									})}
								</View>
							</View>
						</View>
					)}
					{selectedTab === "deals" && (
						<View style={styles.dealsScrollContainer}>
							<Image
								source={require("../../assets/images/coming-soon.png")}
								style={styles.comingSoonImage}
							/>
						</View>
					)}
				</ScrollView>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#181818",
		paddingTop: StatusBar?.currentHeight || 0
	},
	firstHeaderContainer: {
		width: "90%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	greetingsContainer: {
		flexDirection: "column"
	},
	greetingsHeadingContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5
	},
	greetingsHeadingText: {
		fontSize: 15,
		fontWeight: "bold",
		color: "white"
	},
	greetingsText: {
		fontSize: 12,
		color: "white"
	},
	greetingsImage: {
		height: 25,
		width: 25
	},
	secondHeaderContainer: {
		width: "90%",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 20
	},
	secondHeaderIcons: {
		height: 25,
		width: 28
	},
	locationContainer: {
		flexDirection: "column",
		alignItems: "center",
		gap: 5
	},
	locationHeadingContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5
	},
	locationHeadingText: {
		fontSize: 15,
		fontWeight: "bold",
		color: "white"
	},
	locationDetailContainer: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5
	},
	locationDetailText: {
		fontSize: 15,
		fontWeight: "500",
		color: "white",
		width: "75%"
	},
	bodyContainer: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		width: "95%",
		backgroundColor: "white",
		marginVertical: 15,
		borderRadius: 15
	},
	deliveryScrollContainer: {
		width: "100%",
		flexDirection: "column",
		alignItems: "center"
	},
	pickupScrollContainer: {
		width: "100%",
		flexDirection: "column",
		alignItems: "center"
	},
	dealsScrollContainer: {
		width: "100%",
		alignItems: "center",
		marginTop: 100
	},
	bodyScrollArea: {
		width: "100%",
		flex: 1,
		marginTop: 20,
		marginBottom: 10
	},
	tabsContainer: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
		marginTop: 15
	},
	selectedTabStyles: {
		height: 35,
		paddingHorizontal: 20,
		borderRadius: 20,
		backgroundColor: "#E35F21",
		alignItems: "center",
		justifyContent: "center"
	},
	selectedTabText: {
		fontSize: 15,
		fontWeight: "bold",
		color: "white"
	},
	tabText: {
		fontSize: 15,
		fontWeight: "bold"
	},
	offerContainer: {
		height: 150,
		width: "90%",
		borderRadius: 25,
		backgroundColor: "#E35F21",
		position: "relative",
		flexDirection: "row"
	},
	offerNotch: {
		height: 12,
		width: 100,
		position: "absolute",
		top: 0,
		left: "50%",
		transform: [{ translateX: -50 }],
		backgroundColor: "#E35F21",
		flexDirection: "row"
	},
	leftLowerCurveContainer: {
		height: 12,
		width: 12,
		backgroundColor: "#E35F21"
	},
	leftLowerCurve: {
		height: 12,
		width: 12,
		backgroundColor: "white",
		borderBottomStartRadius: 7
	},
	leftUpperCurveContainer: {
		height: 12,
		width: 12,
		backgroundColor: "white"
	},
	leftUpperCurve: {
		height: 12,
		width: 12,
		backgroundColor: "#E35F21",
		borderTopEndRadius: 7
	},
	rightLowerCurveContainer: {
		height: 12,
		width: 12,
		backgroundColor: "#E35F21",
		alignItems: "flex-end"
	},
	rightLowerCurve: {
		height: 12,
		width: 12,
		backgroundColor: "white",
		borderBottomEndRadius: 7
	},
	rightUpperCurveContainer: {
		height: 12,
		width: 12,
		backgroundColor: "white",
		alignItems: "flex-end"
	},
	rightUpperCurve: {
		height: 12,
		width: 12,
		backgroundColor: "#E35F21",
		borderTopStartRadius: 7
	},
	curveContainer: {
		flexDirection: "row"
	},
	notchEmptySpace: {
		flex: 1,
		backgroundColor: "white"
	},
	offerDetails: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		gap: 15,
		padding: 15
	},
	offerImage: {
		height: 150,
		width: "30%",
		borderTopRightRadius: 25,
		borderBottomRightRadius: 25
	},
	offerText: {
		fontSize: 18,
		fontWeight: "500",
		color: "white"
	},
	browseButtonContainer: {
		height: 30,
		width: 150,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: "white",
		borderRadius: 5,
		paddingHorizontal: 10
	},
	browseButtonText: {
		fontSize: 12,
		fontWeight: "bold"
	},
	browseButtonArrowContainer: {
		height: 18,
		width: 18,
		borderRadius: 10,
		backgroundColor: "#E35F21",
		alignItems: "center",
		justifyContent: "center"
	},
	sectionContainer: {
		width: "90%",
		flexDirection: "column",
		marginTop: 15
	},
	sectionHeadingContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},
	sectionHeadingTitle: {
		fontSize: 15,
		fontWeight: "bold"
	},
	seeAllText: {
		fontSize: 15,
		fontWeight: "bold",
		color: "#E35F21"
	},
	horizontalScrollContainer: {
		flexDirection: "row",
		gap: 15
	},
	horizontalScrollArea: {
		width: "100%",
		marginTop: 15
	},
	sectionBody: {
		width: "100%",
		flexWrap: "wrap",
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: 15
	},
	comingSoonImage: {
		height: 300,
		width: "90%"
	}
})
