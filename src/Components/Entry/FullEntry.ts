import { EntryType, IRawEntry } from './RawEntry'
import { v4 } from 'uuid'

export interface IEntry {
  id: string
  description: string
  value: number
  type: EntryType
}

export const createEntry = (e: IRawEntry): IEntry => {
  return { id: v4(), value: +e.value, description: e.description, type: e.type }
}
