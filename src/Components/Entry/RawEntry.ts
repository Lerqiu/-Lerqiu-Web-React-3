export enum EntryType {
  PROFIT,
  LOSS
}

export interface IRawEntry {
  description: string
  value: string
  type: EntryType
}

export const defaultRawEntry = (): IRawEntry => {
  return { description: 'Description', value: '0.01', type: EntryType.PROFIT }
}
