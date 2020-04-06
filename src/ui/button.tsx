import React from "react"
import { TouchableOpacity, Text, ActivityIndicator } from "react-native"

import styled, { scale } from "./theme"
import { Colors } from "./theme/types"

interface ButtonProps {
  label: string
  onPress: () => void
  disabled?: boolean
  loading?: boolean
  color?: Colors
  backgroundColor?: Colors
}

export const Root = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.9,
}))<{ backgroundColor: Colors }>`
  background-color: ${({ theme, backgroundColor }) =>
    theme.colors[backgroundColor]};
  border-radius: 50px;
  height: ${scale(48)}px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Label = styled(Text)<{ color: Colors }>`
  color: ${({ theme, color }) => theme.colors[color]};
  font-family: ${({ theme }) => theme.MontserratSemiBold};
  font-size: ${scale(14)}px;
`

const Spinner = styled(ActivityIndicator)`
  color: ${({ theme }) => theme.colors.white};
`

export const Button = ({
  label,
  onPress,
  disabled,
  loading,
  color = "white",
  backgroundColor = "primary",
}: ButtonProps) => {
  return (
    <Root
      onPress={onPress}
      disabled={disabled}
      backgroundColor={backgroundColor}
    >
      {loading && <Spinner />}
      {!loading && <Label color={color}>{label}</Label>}
    </Root>
  )
}
