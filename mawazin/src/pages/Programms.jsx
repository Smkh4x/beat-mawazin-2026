import Card from "../components/Card";
import Nums from "../data/data"

function Programms() {

  if(!localStorage.getItem("fav")){
    return <div>
      <p>No favorite found!!</p>
    </div>
  }

  let favs = JSON.parse(localStorage.getItem("fav"))

  const res = []

  for(let i = 0; i < favs.length ; i++){
    for(let j = 0; j < Nums.length; j++){
      if(+favs[i] === Nums[j].id){
        res.push(Nums[j])
      }
    }
  }
 

  return (

    <div className="flex justify-center gap-4">
      {res.map(favorite => <Card id={favorite.id} name={favorite.Name} img={favorite.img} discription={favorite.discription}/>)}
  
    </div>



  )
}
export default Programms