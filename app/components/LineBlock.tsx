import { mapVishraams } from "../lib/line";
import { LineSections, RemappedVerse} from "../lib/types";
import { Punjabi, Text, PunjabiCaligraphy } from "./Text";

type VishraamsProps = {
  lineID?: number;
  className?: string
  vishraamSections: LineSections
}; 

export const VishraamText: React.FC<VishraamsProps> = ( {vishraamSections, className, lineID} ) => {
  return (
    <div className={className}>
      {vishraamSections.map( ( {data, type}, index ) => 
        <span key={`${lineID}-${index}`} className={`pangtee-${type}`}>{data}</span>
       )}
      </div>
  )
}

export const Pangtee = (props: VishraamsProps) => {
   return(
     <PunjabiCaligraphy>
       <VishraamText {...props}/>
     </PunjabiCaligraphy>

   )
}
export const Translation = () => {}
export const Transliteration = () => {}
export const Teeka = () => {}


export const LineBlock = ( {line}: {line: RemappedVerse}) => {
  const {gurmukhi, translation, visraam, verseID} = line
  const baniDBTranslation = translation.en.bdb as string
  const baniDBTeeka = translation.pu.bdb as string

  const gurmukhiSections = mapVishraams(gurmukhi as string, visraam, "sttm")

  return (
    <div key={`${verseID}-lineblock`}>
      <Pangtee vishraamSections={gurmukhiSections} />
  </div>
  )
}