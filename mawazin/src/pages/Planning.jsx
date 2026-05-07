import myData from "../data/data"
import Card from "../components/Card"
import { useEffect, useState } from "react"

function removeItem(){
  
}


function Planning() {

  const [favs, setFavs] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("mo5aniyin")) || []
    const result = myData.filter(res => data.includes(res.id))
    setFavs(result);
  }, [])


  return (
    <div>
      <div className="flex justify-center gap-4 ">
        {favs.map(fav => (<Card key={fav.id} item={fav} />))}

      </div>
    </div>
  )
}
export default Planning