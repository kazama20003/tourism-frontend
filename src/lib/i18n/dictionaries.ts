import type { Locale } from "./config"
import { getGlobalDictionary, type GlobalDictionary } from "./dictionaries/global"
import { getHomeDictionary, type HomeDictionary } from "./dictionaries/home"

export interface DictionarySchema extends GlobalDictionary {
  hero: HomeDictionary["hero"]
  products: HomeDictionary["products"]
}

export type Dictionary = DictionarySchema

export function getDictionary(locale: Locale): DictionarySchema {
  return {
    ...getGlobalDictionary(locale),
    ...getHomeDictionary(locale),
  }
}

export { getGlobalDictionary, getHomeDictionary }
