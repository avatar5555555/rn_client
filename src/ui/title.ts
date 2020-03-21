import { Text } from "react-native"

import styled, { scale } from "./theme"
import { color } from "./theme/color"

export const Title = styled(Text)`
  font-family: ${({ theme }) => theme.MontserratBold};
  font-size: ${scale(24)}px;
  ${color}
  text-transform: uppercase;
`
