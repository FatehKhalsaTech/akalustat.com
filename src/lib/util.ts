type LineSections = {type: string, data: string}[]
export type VishraamSource = "sttm" | "sttm2" | "ig";

export type Vishraam = {
  t: VishraamSource;
  p: number | string;
}
export type ApiVishraams = {
  [key in VishraamSource]: Vishraam[];
}


const lineSection = ( data: string, type: string ) =>  ( {type: type, data:data} ) 

const splitLine = ( line: string, indeces:number[], sourceVishraams: Vishraam[] ): LineSections => (
  line.split( ' ' ).map( ( word, index ) => {
    const isIndexed = indeces.includes( index )
    const type = isIndexed ? sourceVishraams[ indeces.indexOf( index ) ].t : 'line'
    return lineSection( word, type )
  } )
 )
const mapVishraams = ( line: string, apiVishraams: ApiVishraams, source: VishraamSource ): LineSections => {
  const sourceVishraams = apiVishraams[ source ] ?? []
  const indeces = sourceVishraams.map( ( {p} ) => Number( p ) )

  return ( indeces.length ) ? splitLine( line, indeces, sourceVishraams ) : [ lineSection( line, 'line' ) ]
}

export { mapVishraams}
