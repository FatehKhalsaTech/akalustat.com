import {createContext, useContext} from 'react'

const LineContext = createContext( {line: ''} )

export {LineContext}

const useLine = () => {
  const {line} = useContext( LineContext )

  return [ line ]
}

export {useLine}
