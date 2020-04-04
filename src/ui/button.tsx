import React from "react"
import { TouchableOpacity, Text, ActivityIndicator } from "react-native"

import styled, { scale } from "./theme"

interface ButtonProps {
  label: string
  onPress: () => void
  disabled?: boolean
  loading?: boolean
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

const Spinner = styled(ActivityIndicator)`
  color: ${({ theme }) => theme.colors.white};
`

export const Button = ({ label, onPress, disabled, loading }: ButtonProps) => {
  return (
    <Root onPress={onPress} disabled={disabled}>
      {loading && <Spinner />}
      {!loading && <Label>{label}</Label>}
    </Root>
  )
}
