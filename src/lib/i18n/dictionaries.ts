import type { Locale } from "./config"
import { getGlobalDictionary, type GlobalDictionary } from "./dictionaries/global"
import { getHomeDictionary, type HomeDictionary } from "./dictionaries/home"
import { getToursDictionary, type ToursDictionary } from "./dictionaries/tours"
import { getVisitDictionary, type VisitDictionary } from "./dictionaries/visit"
import { getClubDictionary, type ClubDictionary } from "./dictionaries/club"
import { getEventsDictionary, type EventsDictionary } from "./dictionaries/events"
import { getAboutDictionary, type AboutDictionary } from "./dictionaries/about"

export interface DictionarySchema extends GlobalDictionary {
  hero: HomeDictionary["hero"]
  products: HomeDictionary["products"]
  tours: ToursDictionary
  visit: VisitDictionary
  club: ClubDictionary
  events: EventsDictionary
  about: AboutDictionary
}

export type Dictionary = DictionarySchema

export function getDictionary(locale: Locale): DictionarySchema {
  return {
    ...getGlobalDictionary(locale),
    ...getHomeDictionary(locale),
    tours: getToursDictionary(locale),
    visit: getVisitDictionary(locale),
    club: getClubDictionary(locale),
    events: getEventsDictionary(locale),
    about: getAboutDictionary(locale),
  }
}

export { getGlobalDictionary, getHomeDictionary, getToursDictionary, getVisitDictionary, getClubDictionary, getEventsDictionary, getAboutDictionary }
