import React from "react"
import { useField } from "formik"
import { TextInput, View, Text } from "react-native"

import { border } from "./theme/border"
import { color } from "./theme/color"

import styled, { scale } from "src/ui/theme"

type FieldProps = {
  name: string
  label: string
  children?: React.ReactNode
  isBackgroundDark?: boolean
}

const Input = styled(TextInput)`
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.MontserratRegular};
  color: ${({ theme }) => theme.colors.inputColor};
  height: ${scale(48)}px;
  font-size: ${scale(14)}px;
  padding: 0 ${scale(16)}px;
  border-radius: ${({ theme }) => theme.borderRadius}px;
  margin-top: ${scale(4)}px;
  ${border};
`

const Root = styled(View)`
  width: 100%;
  overflow: hidden;
`

const Label = styled(Text)`
  font-family: ${({ theme }) => theme.MontserratMedium};
  font-size: ${scale(14)}px;
  ${color};
`

const LabelRoot = styled(View)`
  display: flex;
  justify-content: space-between;
`

export const TextField = ({
  name,
  label,
  children,
  isBackgroundDark,
}: FieldProps) => {
  const [{ value, onBlur }, meta, { setValue }] = useField(name)

  const hasError = meta.touched && Boolean(meta.error)

  return (
    <Root>
      <LabelRoot>
        <Label isBackgroundDark={isBackgroundDark}>{label}</Label>
        {children}
      </LabelRoot>

      <Input
        hasError={hasError}
        onBlur={onBlur}
        onChangeText={setValue}
        value={value}
      />
    </Root>
  )
}
