import React from 'react';
import Link from 'next/link'
import Input from './input';

function App() {
  return (
    <>
      <Link href="/input"> 
        <a>create doc</a>
      </Link>
      <div>...no documents created</div>
    </>
  );
}

export default App;
