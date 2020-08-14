import React, {useState} from 'react'

import {VariableSizeList as List} from "react-window"
import InfiniteLoader from "react-window-infinite-loader"
import {Virtuoso} from 'react-virtuoso'
import {LineBlock} from './lineblock'

const ROWCOUNT = 1091

const Viewer = ( {data} ) => {
  return (
    <Virtuoso  style={{width: '100%'}} totalCount={ROWCOUNT} item={index => <LineBlock line={data[ index ].verse} />} />
  )  
}
export {Viewer}
