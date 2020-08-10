import React from 'react'
import {useLine} from '../../lib/line'
import {ApiVishraams, VishraamSource, mapVishraams} from '../../lib/util'
import {BaseTextContainer, GurmukhiTextContainer} from './TextContainer'


const RomanText = () => {
  const [ line ] = useLine()

  return (
    <div>{line}</div>
  )
}


interface VishraamsProps {
  vishraams?: ApiVishraams;
  source: VishraamSource;
  lineID?: number;
  className?: string;
}
const VishraamText: React.FC<VishraamsProps> = ( {vishraams, source, lineID, className} ) => {
  const [ line ] = useLine()
  return (
    <div className={className}>
      {mapVishraams( line, vishraams, source ).map( ( {data, type}, index ) => {
        <span key={`${lineID}-${index}`} className={`pangtee-${type}`}>{data}</span>
      } )}
      </div>
  )
}

export {RomanText, VishraamText, BaseTextContainer, GurmukhiTextContainer}
