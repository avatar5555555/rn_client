import { Theme } from "./theme"

import { css } from "./index"

export const border = css`
  border: 1px solid
    ${({ hasError, theme }: { hasError?: boolean; theme: Theme }) => {
      if (hasError) {
        return theme.colors.primary
      }

      return theme.colors.grayLight
    }};
`
