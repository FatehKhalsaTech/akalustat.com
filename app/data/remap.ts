import { Bani, RemappedBani, RemappedInfo, RemappedVerse, VerseElement } from "../lib/types"

 export const getBaniInfo = ( bani: Bani ): RemappedInfo => {
  const { baniInfo: { baniID, gurmukhi, source, raag, writer } } = bani

  return {
    baniID,
    baniName: gurmukhi,
    ang: source.pageNo,
    source: {
      id: source.sourceId,
      name: source.gurmukhi
    },
    raag: {
      id: raag.raagId,
      name: raag.gurmukhi,
    },
    writer: {
      id: writer.writerId,
      name: writer.gurmukhi
    }
  }
}

export const remapVerse = ( line: VerseElement ): RemappedVerse => {
  const {paragraph} = line
  const { verseId: verseID, verse, translation, transliteration, visraam } = line.verse

  const punjabiTranslationAscii: {[key in keyof typeof translation.pu]?: string} = {}

  Object.keys( translation.pu ).forEach( ( key ) => {
    const translationKey = key as keyof typeof translation.pu
    punjabiTranslationAscii[ translationKey ] = translation.pu[ translationKey ].gurmukhi
  } )

  return {
    verseID,
    gurmukhi: verse.gurmukhi,
    paragraph,
    translation: {
      ...translation,
      pu: {
        ...punjabiTranslationAscii

      }
    },
    transliteration: {
      ...transliteration,
      english: null,
      hindi: null,
      ipa: null
    },
    visraam,
  }
}

export const remapBaniVerse = ( verseObj: VerseElement ): RemappedVerse => {
  return remapVerse( verseObj )
}

export const remapBani = (data: Bani): RemappedBani => {
  return {
    baniInfo: getBaniInfo(data),
    verses: data.verses.map(remapBaniVerse)
  }
}