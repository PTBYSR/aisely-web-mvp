import Link from 'next/link';
import React, {useEffect, useState} from 'react'
import ClientDetails from '../common/components/Input/components/ClientDetails/ClientDetails';
import TableSheet from '../common/components/Input/components/TableSheet/TableSheet';

function Input() {
  const [isSSR, setIsSSR] = useState(true);

useEffect(() => {
	setIsSSR(false);
}, []);

  return (
    <div>
      <ClientDetails />
      { !isSSR && <TableSheet />}
    </div>
  )
}

export default Input