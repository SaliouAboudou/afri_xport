import React from 'react'
import login1 from '../../assets/images/auths/login1.jpg'

interface EtapeOneProp{
    showEtapeTwoForm: () => void
}
export const EtapeOne: React.FC<EtapeOneProp> = ({showEtapeTwoForm}) => {

  return (
    
    <div className=' mx-5 w-full max-w-sm md:max-w-5xl py-3  rounded-b-lg border border-gray-300 bg-white flex items-center'>
    <div className='hidden md:block w-full  overflow-hidden'>
      <img className=' object-contain w-xl  ' src={login1} alt="" />
    </div>
    <div className=' mx-auto flex w-full px-6'>

      <form className=' px-auto flex w-full flex-col gap-3.5' action="">
        {/* Email  */}
          <label className=' text-gray-600 font-semibold text-md' htmlFor="email">Saissez votre adresse e-mail</label>
        <div className=' w-full flex justify-end flex-wrap  gap-y-3'>
            <input className=' text-gray-600 border border-gray-300 w-full py-3 rounded-lg px-4  focus:ring-offset-1 focus:outline-amber-500 focus:outline-1 focus:ring-amber-200 ' type="email" name='email' />
            <button className=' px-5 py-2 bg-amber-600 text-white text-md rounded-lg cursor-pointer' onClick={showEtapeTwoForm}>Suivant</button>
        </div>
      </form>
    </div>
  </div>
  )
}

