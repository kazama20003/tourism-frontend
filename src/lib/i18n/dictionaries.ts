import type { Locale } from "./config"
import { getGlobalDictionary, type GlobalDictionary } from "./dictionaries/global"
import { getHomeDictionary, type HomeDictionary } from "./dictionaries/home"
import { getToursDictionary, type ToursDictionary } from "./dictionaries/tours"

export interface DictionarySchema extends GlobalDictionary {
  hero: HomeDictionary["hero"]
  products: HomeDictionary["products"]
  tours: ToursDictionary
}

export type Dictionary = DictionarySchema

export function getDictionary(locale: Locale): DictionarySchema {
  return {
    ...getGlobalDictionary(locale),
    ...getHomeDictionary(locale),
    tours: getToursDictionary(locale),
  }
}

export { getGlobalDictionary, getHomeDictionary, getToursDictionary }
