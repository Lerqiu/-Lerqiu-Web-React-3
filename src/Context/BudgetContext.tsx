import React, { useState } from 'react'
import { v4 } from 'uuid'
import { createEntry, IEntry } from '../Components/Entry/FullEntry'
import { IRawEntry } from '../Components/Entry/RawEntry'

interface IBudgetContext {
  data: IEntry[]
  add: (a: IRawEntry) => void
  remove: (id: string) => void
}

export const BudgetContext = React.createContext<IBudgetContext>(
  {} as IBudgetContext
)

interface IContextProps {
  children: React.ReactNode
}

const BudgetContextProvider = ({ children }: IContextProps) => {
  const [listData, setListData] = useState<IEntry[]>([])

  const add = (rawEntry: IRawEntry) => {
    setListData(prevListData => {
      const newEntry: IEntry = createEntry(rawEntry)
      const copy = [...prevListData]
      copy.push(newEntry)
      return copy
    })
  }

  const remove = (id: string) => {
    setListData(prevListData => {
      const copy = [...prevListData].filter(entry => entry.id !== id)
      return copy
    })
  }

  return (
    <BudgetContext.Provider
      value={{
        data: listData,
        add,
        remove
      }}
    >
      {children}
    </BudgetContext.Provider>
  )
}

export default BudgetContextProvider
