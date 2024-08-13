import React from 'react'
import { useState } from 'react'
import Child from './Child';

function App() {
  const [familyName, setFamilyName] = useState("");

  const updateFamilyName=(name) => {
    setFamilyName(name);
  }
  return (
    <div>
      <p>Family Name: {familyName}</p>
      <button onClick={() => 
        updateFamilyName("Gellers")}>
          Get Family Name</button>
          <Child familyName={familyName} />
    </div>
   
  )
}

export default App
