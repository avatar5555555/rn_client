import { Theme } from "./theme"

import { css } from "./index"

export const color = css`
  color: ${({
    isBackgroundDark,
    theme,
  }: {
    isBackgroundDark?: boolean
    theme: Theme
  }) => {
    if (isBackgroundDark) {
      return theme.colors.white
    }

    return theme.colors.grayDark
  }};
`
