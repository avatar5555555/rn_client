import * as styledComponents from "styled-components/native"

import { Theme, theme } from "./theme"

export { scale, moderateScale, verticalScale } from "./scale"

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<
  Theme
>

export { css, ThemeProvider, theme }
// eslint-disable-next-line import/no-default-export
export default styled
