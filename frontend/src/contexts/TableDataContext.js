import { createContext, useEffect, useState, useContext } from 'react'

const tableDataContext = createContext()

export function TableDataContextProvider({ children }) {
    const [localstore, setLocalstore] = useState()
    const [documents, setDocuments] = useState([])

    function setLocalStoreContext(localstore) {
        setLocalstore(localstore)
    }
    return <tableDataContext.Provider value={{localstore, setLocalStoreContext }}>{children}</tableDataContext.Provider>
}

export function useTableData() {
    return useContext(tableDataContext)
}