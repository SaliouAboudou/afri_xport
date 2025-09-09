
import React from 'react'
import login1 from '../../assets/images/auths/login1.jpg'

interface EtapeOneProp{
    showEtapeFourForm: () => void
    closeEtapeFourForm: () => void
}
export const EtapeFour : React.FC<EtapeOneProp> = ({showEtapeFourForm, closeEtapeFourForm}) =>  {
    return (
        <>
       
        <div className=' mx-5 w-full max-w-sm md:max-w-5xl py-3  rounded-b-lg border border-gray-300 bg-white flex  items-center'>
              <div className='hidden md:block w-full  overflow-hidden'>
                <img className=' object-contain w-xl  ' src={login1} alt="" />
              </div>
              <div className=' mx-auto flex w-full px-6'>
    
                <form className=' px-auto flex w-full flex-col gap-3.5' action="">
                  <div className=' w-full flex flex-col flex-wrap  gap-y-3'>
                    <label className=' text-gray-600 font-semibold text-md ' htmlFor="email">Permis de conduire</label>
                      <input className=' text-gray-600 border border-gray-300 w-full py-2 md:py-3 rounded-lg px-4  focus:ring-offset-1 focus:outline-amber-500 focus:outline-1 focus:ring-amber-200 ' type="file" name='email' />
                  </div>
                  <div className=' w-full flex flex-col flex-wrap  gap-y-3'>
                    <label className=' text-gray-600 font-semibold text-md ' htmlFor="email">Assurance du véhicule</label>
                      <input className=' text-gray-600 border border-gray-300 w-full py-2 md:py-3 rounded-lg px-4  focus:ring-offset-1 focus:outline-amber-500 focus:outline-1 focus:ring-amber-200 ' type="file" name='email' />
                  </div>
                  <div className=' w-full flex flex-col flex-wrap  gap-y-3'>
                    <label className=' text-gray-600 font-semibold text-md ' htmlFor="email">Casier judiciaire</label>
                      <input className=' text-gray-600 border border-gray-300 w-full py-2 md:py-3 rounded-lg px-4  focus:ring-offset-1 focus:outline-amber-500 focus:outline-1 focus:ring-amber-200 ' type="file" name='email' />
                  </div>
                  <div className=' flex w-full justify-end gap-2.5'>
                        <button className=' px-5 py-2 bg-gray-300 text-gray-600 text-md  rounded-lg cursor-pointer' onClick={closeEtapeFourForm}>Précedent</button>
                        <button className=' px-5 py-2 bg-amber-600 text-white text-md  rounded-lg cursor-pointer' onClick={showEtapeFourForm}>Suivant</button>
                    </div>
                  
                </form>
              </div>
        </div>
        </>
      )
}

