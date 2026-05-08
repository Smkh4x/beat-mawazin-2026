import myData from "../data/data"
import Card from "../components/Card"
import { useEffect, useState } from "react"





function Planning() {

  const [favs, setFavs] = useState([])
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("mo5aniyin")) || []
    const result = myData.filter(res => data.includes(res.id))
    setFavs(result);
  }, [])


  function removeItem(id) {

    const data2 = JSON.parse(localStorage.getItem("mo5aniyin")) || [];

    let newdata2 = [];

    for (let i = 0; i < data2.length; i++) {
      if (data2[i] !== id) {
        newdata2.push(data2[i]);
      }
    }
    localStorage.setItem("mo5aniyin", JSON.stringify(newdata2));
    setFavs(myData.filter(res => newdata2.includes(res.id)));

  }




  if (!favs.length) return (<div className="flex text-white justify-center py-8">No artists.</div>)

  return (
    <div>
      <div className="flex justify-center gap-4 py-20 grid grid-cols-3 gap-6">
        {favs.map(fav => <Card key={fav.id} item={fav} classConfig={"bg-red-500 text-white px-8 py-0.5 rounded"} buttonName={"remove"} rmSt={removeItem} />
        )}

      </div>
    </div>
  )
}
export default Planning