import { LineSections, Vishraam, VishraamKey, Visraam } from "./types"

const lineSection = ( data: string, type: string ) =>  ( {type: type, data:data} ) 

const splitLine = ( line: string, indeces:number[], sourceVishraams: Vishraam[] ): LineSections => (
  line.split( ' ' ).map( ( word, index ) => {
    const isIndexed = indeces.includes( index )
    const type = isIndexed ? sourceVishraams[ indeces.indexOf( index ) ].t : 'line'
    return lineSection( `${word} `, type )
  } )
 )
const mapVishraams = ( line: string, apiVishraams: Visraam, source: VishraamKey ): LineSections => {
  const sourceVishraams = apiVishraams?.[ source ] ?? []
  const indeces = sourceVishraams.map( ( {p} ) => Number( p ) )

  return ( indeces.length ) ? splitLine( line, indeces, sourceVishraams ) : [ lineSection( line, 'line' ) ]
}

export { mapVishraams}