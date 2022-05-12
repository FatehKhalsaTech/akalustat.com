// from https://github.com/vercel/examples/tree/main/solutions/reuse-responses

import { promises as fs } from 'fs'
import path from 'path'
import { BaniChhands, Chhand } from '../lib/types'
import { remapBani } from './remap'
import { sortChhands } from './split'

export const api = {
  get: async () => {
    return fetch('https://api.banidb.com/v2/banis/29')
      .then(res => res.json())
      .then(remapBani)
      .then(sortChhands)
  },
  fetch: async (chhandNo: number) => {
    const data = await api.get()
    return data.chhands.find(chhand => chhandNo === chhand.chhandNo)
  },
  cache: {
    get: async (chhandNo: number): Promise<Chhand | null | undefined> => {
      const data = await fs.readFile(path.join(process.cwd(), 'app/data/lines.db'))
      const chhands: Chhand[] = JSON.parse(data as unknown as string)
      return chhands.find(chhand => chhandNo === chhand.chhandNo)
    },
    set: async (lines: Chhand[]) => {
      return await fs.writeFile(
        path.join(process.cwd(), 'app/data/lines.db'),
        JSON.stringify(lines)
      )
    },
  },
}