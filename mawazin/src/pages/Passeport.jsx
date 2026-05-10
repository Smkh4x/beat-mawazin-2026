import logo from '../assets/mawazine.png'
function Passeport() {

  return (

    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="relative bg-white w-160 h-90 rounded-4xl">
          <img src={logo} />
            <div className='absolute top-0 ms-70 py-10 text-2xl font-bold '>
              <h1>FullName: Ali abo ahmmed</h1>
             
              <div className='ms-10 font-serif'>
                 <br />
                <h2>FASTIVAL MAWAZINE</h2>
              </div>
                  <p class="text-sm text-gray-500 mt-1">
      One of the biggest music festivals in Africa 🌍
    </p>
              
            </div>

          <div className='flex justify-center py-8'>
            <h4>Card-viste </h4>
          </div>



        </div>
      </div>
    </>

  )
}
export default Passeport