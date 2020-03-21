import React, { createContext, useState, useMemo } from "react"
import { IntlProvider } from "react-intl"
import noop from "lodash/noop"

import en from "i18n/en.json"
import { getMessages } from "src/utils/get-messages"

if (!Intl.PluralRules) {
  require("@formatjs/intl-pluralrules/polyfill")
  require("@formatjs/intl-pluralrules/dist/locale-data/en")
  require("@formatjs/intl-pluralrules/dist/locale-data/ru")
}

if (!(Intl as any).RelativeTimeFormat) {
  require("@formatjs/intl-relativetimeformat/polyfill")
  require("@formatjs/intl-relativetimeformat/dist/locale-data/en")
  require("@formatjs/intl-relativetimeformat/dist/locale-data/ru")
}

export enum Locale {
  En = "en",
  Ru = "ru",
}

const IntlCtx = createContext(noop)

const m = {
  [Locale.En]: getMessages(en),
  [Locale.Ru]: {},
}

export const IntlService = (props: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<Locale>(Locale.En)

  const messages = useMemo(() => m[locale], [locale])

  return (
    <IntlProvider locale={locale} messages={messages}>
      <IntlCtx.Provider {...props} value={setLocale} />
    </IntlProvider>
  )
}
