import { LargeNumberLike } from "crypto";
import { ReactNode } from "react";

export type Styles = {
  readonly [key: string]: string;
}


export type WithChildren = {
  children: ReactNode;
}


// Types from banidb api// To parse this data:
export type Bani ={
    baniInfo: BaniInfo;
    verses:   VerseElement[];
}

export type BaniInfo ={
    baniID:   number;
    gurmukhi: string;
    unicode:  string;
    english:  string;
    hindi:    string;
    en:       string;
    hi:       string;
    ipa:      string;
    ur:       string;
    source:   Source;
    raag:     Raag;
    writer:   Writer;
}

export type Raag ={
    raagId:       number;
    gurmukhi:     string;
    unicode:      string;
    english:      string;
    raagWithPage: string;
}

export type Source ={
    sourceId: string;
    gurmukhi: string;
    unicode:  string;
    english:  string;
    pageNo:   number;
}

export type Writer ={
    writerId: number;
    gurmukhi: string;
    unicode:  null;
    english:  string;
}

export type VerseElement= {
    header:          number;
    mangalPosition:  null;
    existsSGPC:      number;
    existsMedium:    number;
    existsTaksal:    number;
    existsBuddhaDal: number;
    paragraph:       number;
    verse:           VerseVerse;
}

export type VerseVerse ={
    verseId:         number;
    verse:           Larivaar;
    larivaar:        Larivaar;
    translation:     Translation;
    transliteration: Transliteration;
    pageNo:          number;
    lineNo:          number;
    updated:         Date;
    visraam:         Visraam;
}

export type Larivaar ={
    gurmukhi:  string| undefined;
    unicode:  string| undefined;
}

export type Translation = {
    en: En;
    pu: Pu;
    es: Es;
    hi: Hi;
}

export type En = {
    bdb: string | undefined;
    ms:  string| undefined;
    ssk: string| undefined;
}

export type Es = {
    sn: string| undefined;
}

export type Hi ={
}

export type Pu ={
    ss:  Larivaar;
    ft:  Larivaar;
    bdb: Larivaar;
    ms:  Larivaar;
}

export type Transliteration = {
    english: string;
    hindi:   string;
    en:      string;
    hi:      string;
    ipa:     string;
    ur:      string;
}

type VishraamKey = "sttm" | "sttm2" | "igurbani"
export type Visraam = {
  [key in VishraamKey]: Vishraam;
}

export type Vishraam = {
    p: number | string;
    t: T;
}

export enum T {
    V = "v",
    Y = "y",
}

//remapped Types

export type RemappedBani = {
  baniInfo: RemappedInfo,
  verses: RemappedVerse[]
}

export type RemappedVerse = {
  verseID: number,
  gurmukhi: string| undefined,
  paragraph?: number,
  translation: {
    en: {
      bdb?: string,
      ms?: string,
      ssk?: string
    },
    pu: {
      ss?: string,
      ft?: string,
      bdb?: string,
      ms?: string
    }
  },
  transliteration: {
    en: string,
    hi: string,
    ur: string,
    english: null,
    hindi: null,
    ipa: null
  },
  visraam: Visraam,
}

export type RemappedInfo = {
  shabadID?: number,
  shabadName?: string,
  baniID?: number,
  baniName?: string,
  ang: number,
  raag: {
    id: number,
    name: string
  },
  writer: {
    id: number,
    name: string
  },
  source: {
    id: string,
    name: string
  }
}

export type Paragraph = {
  paragraphNo: number,
  verses: RemappedVerse[]
}
export type BaniParagraphs = {
  paragraphs: Paragraph[]
}

export type Chhand = {
  subheaderNo: number,
  paragraphs: Paragraph[],
}

export type BaniChhands = {
  baniInfo: RemappedInfo,
  chhands: Chhand[]
}
