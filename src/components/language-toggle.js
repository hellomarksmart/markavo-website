import * as React from "react"
import { navigate } from "gatsby"

import { linkResolver } from "../utils/linkResolver"

export const LanguageToggle = ({ activeDocMeta }) => {
  const currentLang = activeDocMeta.lang
  const currentLangOption = (
    <option value={currentLang}>{currentLang.slice(0, 2).toUpperCase()}</option>
  )

  const alternateLangOptions = activeDocMeta.alternateLanguages.map(
    (altLang, index) => (
      <option value={linkResolver(altLang)} key={`alt-lang-${index}`}>
        {altLang.lang.slice(0, 2).toUpperCase()}
      </option>
    )
  )

  const handleLangChange = event => {
    navigate(event.target.value)
  }

  console.log(activeDocMeta.alternateLanguages)

  return (
    <div className="language-switcher">
      <select
        className="w-full  text-sm font-medium text-emerald-400 px-4 py-2 border border-emerald-400 rounded-md shadow-sm"
        value={currentLang}
        onChange={handleLangChange}
      >
        {currentLangOption}
        {alternateLangOptions}
      </select>
    </div>
  )
}
