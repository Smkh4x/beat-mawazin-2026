import { useState } from "react"


function Passeport() {



  const [name, setName] = useState("youssef")


  return (


    <>
      <div className="flex justify-center text-center">
        <div className=" bg-white w-120 h-90 rounded-4xl">
          <div className="flex-col text-green-600 text-4xl py-8">
            <h1>THis id Hiistoy</h1>
            <div className=" text-red-300 py-12">
              <h3>user : add item</h3>
              <br />
              <h3>user : remove item {name}</h3>

            </div>
            <button onClick={() => setName("yasser")}>clickme</button>
          </div>
        </div>



      </div>
    </>

  )
}
export default Passeport