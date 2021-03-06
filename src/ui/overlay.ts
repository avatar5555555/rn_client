import { View } from "react-native"

import styled from "./theme"

import { deviceHeight, deviceWidth } from "src/config"

export const Overlay = styled(View)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 0;
  opacity: 0.5;
  background-color: #2b292b;
  flex: 1;
  width: ${deviceWidth}px;
  height: ${deviceHeight}px;
`
