import React, {ReactNode} from 'react'
import {GurmukhiTextContainer, VishraamText, BaseTextContainer, RomanText} from './text'
import {LineContext} from '../lib/line'


const Pangtee = ( {id, vishraams, source} ) => (
  <GurmukhiTextContainer className="text-2xl">
    <VishraamText vishraams={vishraams} source={source} lineID={id} /> 
    </GurmukhiTextContainer>
)

const Translation = () => (
  <BaseTextContainer className="text-sm">
      <RomanText />
    </BaseTextContainer>
)
const Teeka = () => (
  <GurmukhiTextContainer className="text-sm">
    <RomanText />
    </GurmukhiTextContainer>
)

const LineBlock = ( {line} ) => {
  const {verse, translation, visraam, verseId} = line
  const baniDBTranslation = translation.en.bdb
  const baniDBTeeka = translation.pu.bdb.gurmukhi

  const TextNodes: [ReactNode, [string, boolean]][] = [
    [ <Pangtee id={verseId} vishraams={visraam} source={"sttm"} key={`${verseId}-pangtee`}/>, [ verse.gurmukhi, true ] ],
    [ <Translation key={`${verseId}-translation`}/>, [ baniDBTranslation, !!baniDBTranslation ] ],
    [ <Teeka  key={`${verseId}-teeka`}/>, [ baniDBTeeka, !!baniDBTeeka ] ]
  ]

  return (
    <div key={`${verseId}-lineblock`}>
      {TextNodes.map( ( [ TextNode, [ line, toDisplay ] ], idx ) => {
        const DisplayNode = !!toDisplay && TextNode

        return (
          <LineContext.Provider value={{line: line}} key={`${line}-${idx}`}>
            {DisplayNode}
          </LineContext.Provider>
        )
      } )}
    </div>
  )

}


export {LineBlock}
