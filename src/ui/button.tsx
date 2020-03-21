import React from "react"
import { TouchableOpacity, Text } from "react-native"

import styled, { scale } from "./theme"

interface ButtonProps {
  label: string
  onPress: () => void
}

export const Root = styled(TouchableOpacity).attrs(() => ({
  activeOpacity: 0.9,
}))`
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
  height: ${scale(48)}px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Label = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.MontserratSemiBold};
  font-size: ${scale(14)}px;
`

export const Button = ({ label, onPress }: ButtonProps) => {
  return (
    <Root onPress={onPress}>
      <Label>{label}</Label>
    </Root>
  )
}
