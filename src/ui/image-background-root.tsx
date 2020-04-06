import React from "react"
import {
  ImageBackground,
  StyleProp,
  ImageStyle,
  ImageSourcePropType,
} from "react-native"

import styled, { scale } from "src/ui/theme"
import { deviceWidth, deviceHeight } from "src/config"

const backgroundImage: StyleProp<ImageStyle> = {
  position: "absolute",
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.45)",
  width: deviceWidth,
  height: deviceHeight,
}

const Root = styled(ImageBackground)`
  flex-basis: 100%;
  padding-right: ${scale(16)}px;
  padding-left: ${scale(16)}px;
  position: relative;
`

interface ImageBackgroundRootProps {
  source: ImageSourcePropType
  children: React.ReactNode
}

export const ImageBackgroundRoot = ({
  source,
  children,
}: ImageBackgroundRootProps) => {
  return (
    <Root source={source} imageStyle={backgroundImage} resizeMethod="resize">
      {children}
    </Root>
  )
}
