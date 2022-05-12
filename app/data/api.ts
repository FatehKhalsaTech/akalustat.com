// from https://github.com/vercel/examples/tree/main/solutions/reuse-responses

import { promises as fs } from 'fs'
import path from 'path'
import { BaniChhands } from '../lib/types'
import { remapBani } from './remap'
import { sortChhands } from './split'

export const api = {
  get: async () => {
    fetch('https://api.banidb.com/v2/banis/29')
      .then(res => res.json())
      .then(remapBani)
      .then(sortChhands)
  },
  cache: {
    get: async (id: string): Promise<any | null | undefined> => {
      const data = await fs.readFile(path.join(process.cwd(), 'app/data/lines.db'))
      const lines: any[] = JSON.parse(data as unknown as string)
      return lines
    },
    set: async (lines: BaniChhands) => {
      return await fs.writeFile(
        path.join(process.cwd(), 'app/data/lines.db'),
        JSON.stringify(lines)
      )
    },
  },
}