import { Platform, Dimensions, PixelRatio } from "react-native"
// eslint-disable-next-line import/no-named-as-default
import { API } from "react-native-dotenv"

// Platform
export const isIOS = Platform.OS === "ios"
export const isAndroid = Platform.OS === "android"

// Dimensions
const window = Dimensions.get("window")

export const { height: deviceHeight, width: deviceWidth } = window
export const pixelRatio = PixelRatio.get()

// Configurable
export const API_URL = API

// Password requirements
export const minPasswordLength = 5
export const maxPasswordLength = 15
