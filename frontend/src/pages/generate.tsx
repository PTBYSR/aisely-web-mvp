import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import DataOutput from '../common/components/generate/DataOutput'
import { useTableData } from '../contexts/TableDataContext'

function GeneratedDoc() {
  const { localstore } = useTableData()
  const [ data, setData ] = useState([])
  console.log(localstore, "localstore print inside generate.tsx")
  useEffect(() => {
    setData(Object.values(localstore))
  }, [])

  interface DataProps {
    product: any,
    price: any,
    qty: any
  }
  return (
    <div>
      Generated DOC
      <canvas></canvas>
      {
        data.map((d: DataProps, index: number ) => {
          return(
            <DataOutput 
              index={index}
              product={d.product}
              price={d.price}
              quantity={d.qty}
            />
          )
        })
      }
      <Link href="/input"> 
        <a>create doc</a>

      </Link>
    </div>
  )
}

export default GeneratedDoc