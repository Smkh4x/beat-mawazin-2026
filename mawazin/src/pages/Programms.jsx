import Card from '../components/Card'
import data from '../data/data'

function programme() {


  return (
    <>

      <div className='flex justify-center'>
        <div className='flex-col justify-center grid grid-cols-4 gap-6'>
          {data.slice(6, 22).map(() =>
            <Card key={data.id} item={data}
              cardInfoi={
                <div>
                  <h1>hello</h1>

                </div>
              } />
          )}
        </div>


      </div>
    </>


  )

}
export default programme