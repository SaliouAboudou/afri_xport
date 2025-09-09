
import React from 'react'
import login1 from "../../../../assets/images/auths/login1.jpg"

interface EtapeOneProp{
    showEtapeThreeForm: () => void
    closeEtapeThreeForm: () => void
}
export const EtapeTwo : React.FC<EtapeOneProp> = ({showEtapeThreeForm, closeEtapeThreeForm}) =>  {
    return (
        <>
       
        <div className=' mx-5 w-full max-w-sm md:max-w-5xl py-3  rounded-b-lg border border-gray-300 bg-white flex  items-center'>
              <div className='hidden md:block w-full  overflow-hidden'>
                <img className=' object-contain w-xl  ' src={login1} alt="" />
              </div>
              <div className=' mx-auto flex w-full px-6'>
    
                <form className=' px-auto flex w-full flex-col gap-3.5' action="">
                  {/* Nom Complet  */}
                  <div className=' w-full flex flex-col flex-wrap  gap-y-3'>
                    <label className=' text-gray-600 font-semibold text-md ' htmlFor="email">Nom Complet</label>
                      <input className=' text-gray-600 border border-gray-300 w-full py-2 md:py-3  rounded-lg px-4  focus:ring-offset-1 focus:outline-amber-500 focus:outline-1 focus:ring-amber-200 ' type="email" name='email' />
                  </div>
                  {/* Mot de passe  */}
                  <div className=' w-full flex flex-col flex-wrap  gap-y-3'>
                    <label className=' text-gray-600 font-semibold text-md' htmlFor="email">Numéro de téléphone</label>
                      <input className=' text-gray-600 border border-gray-300 w-full py-2 md:py-3 rounded-lg px-4  focus:ring-offset-1 focus:outline-amber-500 focus:outline-1 focus:ring-amber-200 ' type="email" name='email' />
                  </div>
                  {/* Mot de passe  */}
                  <div className=' w-full flex flex-col flex-wrap  gap-y-3'>
                    <label className=' text-gray-600 font-semibold text-md ' htmlFor="email">Mot de passe</label>
                      <input className=' text-gray-600 border border-gray-300 w-full py-2 md:py-3 rounded-lg px-4  focus:ring-offset-1 focus:outline-amber-500 focus:outline-1 focus:ring-amber-200 ' type="email" name='email' />
                  </div>
                  {/* Buttons Actions  */}
                  <div className=' flex w-full justify-end gap-2.5'>
                        <button className=' px-5 py-2 bg-gray-300 text-gray-600 text-md  rounded-lg cursor-pointer' onClick={closeEtapeThreeForm}>Précedent</button>
                        <button className=' px-5 py-2 bg-amber-600 text-white text-md  rounded-lg cursor-pointer' onClick={showEtapeThreeForm}>Suivant</button>
                    </div>
                </form>
              </div>
        </div>
        </>
      )
}

