import React, {useState} from 'react'

import {Virtuoso} from 'react-virtuoso'
import {LineBlock} from './lineblock'

const ROWCOUNT = 1091

const Viewer = ( {data} ) => {
  return (
    <div className="m-3">
    {data.map( line => <LineBlock key={line.verse} line={line.verse} /> )}
    </div>
  )  
}
export {Viewer}
