import { deviceWidth, deviceHeight } from "src/config"

const [shortDimension, longDimension] =
  deviceWidth < deviceHeight
    ? [deviceWidth, deviceHeight]
    : [deviceHeight, deviceWidth]

// Default guideline sizes are based on standard iPhone 5S screen mobile device
const guidelineBaseWidth = 320
const guidelineBaseHeight = 568

export const scale = (size: number): number =>
  (shortDimension / guidelineBaseWidth) * size

export const verticalScale = (size: number): number =>
  (longDimension / guidelineBaseHeight) * size

export const moderateScale = (size: number, factor = 0.5): number =>
  size + (scale(size) - size) * factor
