import { useState } from "react"




function Passeport() {

    const [count, setCount] = useState(0);
  
  return (
    
<>
<div className="bg-amber-300 flex justify-center">

      <button onClick={() => setCount(count + 1)}>{count}</button>
    
</div>


   </>

  )
}
export default Passeport