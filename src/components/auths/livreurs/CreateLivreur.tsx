import { EtapeOne } from './components/EtapeOne';
import { EtapeTwo } from './components/EtapeTwo';
import { EtapeThee } from './components/EtapeThee';
import { EtapeFour } from './components/EtapeFour';
import { useState } from 'react';


export const  CreateLivreur = () => {

  const [showEtapeOne, setShowEtapeOne] = useState(true);
  const [showEtapeTwo, setShowEtapeTwo] = useState(false);
  const [showEtapeThree, setShowEtapeThree] = useState(false);
  const [showEtapeFour, setShowEtapeFour] = useState(false);

  const showEtapeTwoForm = () => {
    setShowEtapeTwo(true);
    setShowEtapeOne(false);
    setShowEtapeThree(false);
    setShowEtapeFour(false);

  }

  const closeEtapeTwoForm = () => {
    setShowEtapeTwo(false);
    setShowEtapeOne(true);
    setShowEtapeThree(false);
    setShowEtapeFour(false);

  }
  const showEtapeThreeForm = () => {
    setShowEtapeThree(true);
    setShowEtapeTwo(false);
    setShowEtapeOne(false);
    setShowEtapeFour(false);

  }

  const closeEtapeThreeForm = () => {
    setShowEtapeTwo(true);
    setShowEtapeOne(false);
    setShowEtapeThree(false);
    setShowEtapeFour(false);

  }

  const showEtapeFourForm = () => {
    setShowEtapeFour(true);
    setShowEtapeThree(false);
    setShowEtapeTwo(false);
    setShowEtapeOne(false);
  }

  const closeEtapeFourForm = () => {
    setShowEtapeFour(false);
    setShowEtapeThree(true);
    setShowEtapeTwo(false);
    setShowEtapeOne(false);
  }

  const send = () =>{
    alert('fldfsjk');
  }

  return (
    <div className=' w-full bg-amber-50/35 h-screen flex justify-center items-center mx-auto  flex-col flex-wrap'>
          {!showEtapeOne &&
           <div className=' gap:6 mx-5 w-full max-w-sm md:max-w-5xl py-3 flex flex-col md:gap-3 flex-wrap items-center font-bold rounded-t-lg '>
              <h1 className=' text-center text-2xl px-4 py-2 text-gray-600 '>Livreur</h1>
              <ul className=' flex justify-center items-center w-full gap-x-4 text-sm font-extralight text-gray-600'>
                <li className={`flex flex-col gap-y-1.5  ${showEtapeTwo ? 'text-amber-600 font-bold' : ''} `}>Création du compte <span><hr className='border-1 rounded-full' /></span></li>
                <li className={`flex flex-col gap-y-1.5  ${showEtapeThree ? 'text-amber-600 font-bold' : ''} `}>Informations personnelles<span><hr className='border-1 rounded-full' /></span></li>
                <li className={`flex flex-col gap-y-1.5  ${showEtapeFour ? 'text-amber-600 font-bold' : ''} `}>Documents à fournir<span><hr className='border-1 rounded-full' /></span></li>
              </ul>
            </div>
        }
        

        {/* Etape One */}
        {showEtapeOne && <EtapeOne showEtapeTwoForm={showEtapeTwoForm}/>}

        {/* Etape Two  |  creation de compte */}
        {showEtapeTwo && <EtapeTwo showEtapeThreeForm={showEtapeThreeForm} closeEtapeThreeForm={closeEtapeTwoForm} />}

        {/* Etape Three | | information sur lentreprise  */}
        {showEtapeThree && <EtapeThee showEtapeFourForm={showEtapeFourForm} closeEtapeFourForm={closeEtapeThreeForm} />}

         {/* Etape Four | document legaux  */}
         {showEtapeFour && <EtapeFour showEtapeFourForm={send} closeEtapeFourForm={closeEtapeFourForm} />}
        
    </div>
  )
}

