import React, { useState } from 'react';

const ControlledComponent = () => {
    const [item, setItem] = useState("");
  return (
    <>
     <h2>Controlled Component in react JS</h2> 
     {/* <input type='text' value={item} onChange={(e) => setItem(e.target.value)} /> */}
     <input type='text' defaultValue="Farzeen" onChange={(e) => setItem(e.target.value)} />
     <h3>Value: {item} </h3>
    </>
  );
}

export default ControlledComponent;
