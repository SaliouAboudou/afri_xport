


import { FaFacebook } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import img1 from '../../../src/assets/images/image1.png'
import vet1 from '../../../src/assets/images/vet1.webp'
import vet2 from '../../../src/assets/images/vet2.webp'
import vet3 from '../../../src/assets/images/vet3.webp'
import vet4 from '../../../src/assets/images/vet4.webp'


export const Base = () => {
  return (
    <div className=' flex flex-col  w-full relative overflow-hidden'>

      {/* Zone accueil  */}

      {/* Section header */}
      <div className=' w-full h-screen flex flex-col md:overflow-hidden relative'>
        <div className=' max-md:fixed flex justify-between py-4 md:py-12 w-full px-6 md:px-18 z-20 bg-white md:bg-transparent'>
          {/* logo  */}
          <div className=' flex gap-1.5 items-center'>
            <span className=' size-7 rounded-full border border-amber-200 flex justify-center text-gray-400'>L</span>
          <h3 className=' font-semibold text-2xl'>Afri<span className=' text-amber-600 font-bold'>Xport</span></h3>
          </div>
          {/* Zone droite les boutons  */}
          <div className=' hidden md:block md:flex-row md:items-center md:gap-2 md:justify-between'>
            <button className=' bg-transparent border border-amber-600 rounded-lg px-4 p-2 text-sm md:me-3 text-amber-600 cursor-pointer hover:bg-amber-50 duration-500 '>Je suis fournisseur</button>
            <button className=' bg-amber-600  border border-amber-600 rounded-lg px-4 p-2 text-sm  text-white cursor-pointer hover:bg-amber-600/80 duration-500  '>Je suis acheteur</button>
          </div>
        </div>

       {/* Zone image  */}
        <div className='relative -z-10 md:z-0 md:right-0 md:-bottom-12 md:size-96 md: md:absolute bg-amber-100 md:rounded-full md:px-0 md:flex md:justify-center md:items-center md:overflow-hidden '>
          <img className=' ' src={img1} alt={img1} />
        </div>
        {/* Content  */}
        <div className='bg-amber-100 w-full pb-12 flex flex-col  text-justify justify-center px-8 md:px-18 -mt-14 gap-2 md:bg-transparent md:pt-10 md:gap-5'>
          <h1 className=' py-3 text-6xl font-bold text-center md:text-8xl'>Afri <span className=' text-amber-600'>Xport</span></h1>
          <h3 className='text-center text-3xl font-semibold text-amber-800 md:text-4xl '>Achetez dans un pays voici, recevez sa commande chez sois. En un clic</h3>
          <p className='text-center'> <span>Afri<strong className=' text-amber-600'>Xport</strong> </span> simplifie l’import-export entre pays voisins. Trouvez un fournisseur, passez commande et faites-vous livrer en toute sécurité.</p>
          <div className=' w-full flex px-8 justify-around md:justify-center'>
          <button className=' bg-white border border-amber-600 rounded-lg px-4 p-2 text-sm md:me-3 text-amber-600 cursor-pointer hover:bg-amber-50 duration-500 '>Je suis fournisseur</button>
          <button className=' bg-amber-600  border border-amber-600 rounded-lg px-4 p-2 text-sm text-white cursor-pointer hover:bg-amber-600/80 duration-500  '>Je suis acheteur</button>
          </div>
          <span className="size-96 bg-amber-100 rounded-full absolute ms-96 -z-20  blur-2xl opacity-70"></span>
        </div>
        {/* Zone fournisseur plus fiables  */}
        <div className="px-6 w-full md:max-w-5xl py-3 md:ps-18 md:block justify-center md:w-full">
          <h1 className="text-md md:text-2xl mb-3">Explorer les fournisseurs les plus fiables</h1>
          {/* Conteneur scrollable */}
          <div className="overflow-x-auto w-full scroll-gray">
            <div className="flex w-max justify-start items-center gap-1.5">
              
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-42 min-w-42 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-sm font-semibold">Vêtement de saison</h6>
                  <p className="text-sm text-gray-400">Fournisseur Nigéria</p>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                </div>
              </div>

              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-42 min-w-42 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet2} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-sm font-semibold">Vêtement de saison</h6>
                  <p className="text-sm text-gray-400">Fournisseur Nigéria</p>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-42 min-w-42 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet3} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-sm font-semibold">Vêtement de saison</h6>
                  <p className="text-sm text-gray-400">Fournisseur Nigéria</p>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-42 min-w-42 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet4} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-sm font-semibold">Vêtement de saison</h6>
                  <p className="text-sm text-gray-400">Fournisseur Nigéria</p>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-42 min-w-42 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-sm font-semibold">Vêtement de saison</h6>
                  <p className="text-sm text-gray-400">Fournisseur Nigéria</p>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-42 min-w-42 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-sm font-semibold">Vêtement de saison</h6>
                  <p className="text-sm text-gray-400">Fournisseur Nigéria</p>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                </div>
              </div>

            </div>
          </div>
        </div>
 
      </div>

      {/* Section fonctionnement de la plaleforme  */}
      <div className='py-3 px-4 w-full mt-42 md:px-18 md:mt-0 md:flex md:justify-center md:flex-col '>
          <h1 className=' text-2xl bg-amber-50 font-extrabold py-2 md:text-center md:text-4xl'>Comment fonction <span>Afri<strong className=' text-amber-600'>Xport</strong></span></h1>
          <div className=' py-6 flex justify-between bg-gray-50 md:flex md:justify-around '>
              <div className=' size-32 md:size-42 md:border border-orange-200  rounded-full flex justify-center items-center flex-col md:shadow-sm'>
               <div className=' p-2 border rounded-md border-gray-300 h-18 overflow-hidden text-center'>
                  <img className=' h-full object-contain mx-auto ' src={vet1} alt="" />
                </div>
                <h3 className=' font-medium text-sm md:text-xl'>Choisir</h3>
              </div>
              <div className=' size-32 md:size-42 md:border border-orange-200  rounded-full flex justify-center items-center flex-col md:shadow-sm'>
               <div className='  p-2 border rounded-md border-gray-300 h-18 overflow-hidden text-center'>
                  <img className=' h-full object-contain mx-auto' src={vet1} alt="" />
                </div>
                <h3 className=' font-medium text-sm md:text-xl'>Commander</h3>
              </div>
              <div className=' size-32 md:size-42 md:border border-orange-200  rounded-full flex justify-center items-center flex-col md:shadow-sm'>
               <div className='  p-2 border rounded-md border-gray-300 h-18 overflow-hidden text-center'>
                  <img className=' h-full object-contain mx-auto' src={vet1} alt="" />
                </div>
                <h3 className=' font-medium text-sm md:text-xl'>Recevoir</h3>
              </div>
              
          </div>
      </div>

      {/* Section Categorie  */}

      <div className='px-6 py-3 w-full  md:mt-0 md:px-18 duration-1000'>
        <h1 className="text-md md:text-2xl mb-3">Explorer les catégories</h1>
        <div className=" w-full  py-3 md:block justify-center md:w-full">
          {/* Conteneur scrollable catégories */}
          <div className="overflow-x-auto w-full scroll-gray duration-1000">
            <div className="flex w-max justify-start items-center gap-1.5">
                <button className=' bg-amber-100 border border-gray-300 rounded-full px-4 py-2 cursor-pointer md:size-32 md:rounded-md md:flex md:flex-col md:justify-center md:bg-gray-50 md:focus:bg-amber-50'>
                  <div className='hidden md:block h-10 overflow-hidden text-center'>
                  <img className='hidden md:block h-full object-contain mx-auto' src={vet1} alt="" />
                  </div>
                  textile
                </button>
                <button className=' bg-amber-100 border border-gray-300 rounded-full px-4 py-2 cursor-pointer md:size-32 md:rounded-md md:flex md:flex-col md:justify-center md:bg-gray-50 md:focus:bg-amber-50'>
                  <div className='hidden md:block h-10 overflow-hidden text-center'>
                  <img className='hidden md:block h-full object-contain mx-auto' src={vet1} alt="" />
                  </div>
                  Vêtements
                </button>
                <button className=' bg-amber-100 border border-gray-300 rounded-full px-4 py-2 cursor-pointer md:size-32 md:rounded-md md:flex md:flex-col md:justify-center md:bg-gray-50 md:focus:bg-amber-50'>
                  <div className='hidden md:block h-10 overflow-hidden text-center'>
                  <img className='hidden md:block h-full object-contain mx-auto' src={vet1} alt="" />
                  </div>
                  Alimentaires
                </button>
                <button className=' bg-amber-100 border border-gray-300 rounded-full px-4 py-2 cursor-pointer md:size-32 md:rounded-md md:flex md:flex-col md:justify-center md:bg-gray-50 md:focus:bg-amber-50'>
                  <div className='hidden md:block h-10 overflow-hidden text-center'>
                  <img className='hidden md:block h-full object-contain mx-auto' src={vet1} alt="" />
                  </div>
                  Electroniques
                </button>
                <button className=' bg-amber-100 border border-gray-300 rounded-full px-4 py-2 cursor-pointer md:size-32 md:rounded-md md:flex md:flex-col md:justify-center md:bg-gray-50 md:focus:bg-amber-50'>
                  <div className='hidden md:block h-10 overflow-hidden text-center'>
                  <img className='hidden md:block h-full object-contain mx-auto' src={vet1} alt="" />
                  </div>
                  Cosmétiques
                </button>
                <button className=' bg-amber-100 border border-gray-300 rounded-full px-4 py-2 cursor-pointer md:size-32 md:rounded-md md:flex md:flex-col md:justify-center md:bg-gray-50 md:focus:bg-amber-50'>
                  <div className='hidden md:block h-10 overflow-hidden text-center'>
                  <img className='hidden md:block h-full object-contain mx-auto' src={vet1} alt="" />
                  </div>
                  Vêtements pour enfants
                </button>
                <button className=' bg-amber-100 border border-gray-300 rounded-full px-4 py-2 cursor-pointer md:size-32 md:rounded-md md:flex md:flex-col md:justify-center md:bg-gray-50 md:focus:bg-amber-50'>
                  <div className='hidden md:block h-10 overflow-hidden text-center'>
                  <img className='hidden md:block h-full object-contain mx-auto' src={vet1} alt="" />
                  </div>
                  Bijoux
                </button>
                <button className=' bg-amber-100 border border-gray-300 rounded-full px-4 py-2 cursor-pointer md:size-32 md:rounded-md md:flex md:flex-col md:justify-center md:bg-gray-50 md:focus:bg-amber-50'>
                  <div className='hidden md:block h-10 overflow-hidden text-center'>
                  <img className='hidden md:block h-full object-contain mx-auto' src={vet1} alt="" />
                  </div>
                  Vêtements pour homme
                </button>
                <button className=' bg-amber-100 border border-gray-300 rounded-full px-4 py-2 cursor-pointer md:size-32 md:rounded-md md:flex md:flex-col md:justify-center md:bg-gray-50 md:focus:bg-amber-50'>
                  <div className='hidden md:block h-10 overflow-hidden text-center'>
                  <img className='hidden md:block h-full object-contain mx-auto' src={vet1} alt="" />
                  </div>
                  Vêtements pour femme
                </button>
                <button className=' bg-amber-100 border border-gray-300 rounded-full px-4 py-2 cursor-pointer md:size-32 md:rounded-md md:flex md:flex-col md:justify-center md:bg-gray-50 md:focus:bg-amber-50'>
                  <div className='hidden md:block h-10 overflow-hidden text-center'>
                  <img className='hidden md:block h-full object-contain mx-auto' src={vet1} alt="" />
                  </div>
                  Robes pour adultes
                </button>
                <button className=' bg-amber-100 border border-gray-300 rounded-full px-4 py-2 cursor-pointer md:size-32 md:rounded-md md:flex md:flex-col md:justify-center md:bg-gray-50 md:focus:bg-amber-50'>
                  <div className='hidden md:block h-10 overflow-hidden text-center'>
                  <img className='hidden md:block h-full object-contain mx-auto' src={vet1} alt="" />
                  </div>
                  Robes pour enfants
                </button>
                <button className=' bg-amber-100 border border-gray-300 rounded-full px-4 py-2 cursor-pointer md:size-32 md:rounded-md md:flex md:flex-col md:justify-center md:bg-gray-50 md:focus:bg-amber-50'>
                  <div className='hidden md:block h-10 overflow-hidden text-center'>
                  <img className='hidden md:block h-full object-contain mx-auto' src={vet1} alt="" />
                  </div>
                  Jouets pour enfants
                </button>
                <button className=' bg-amber-100 border border-gray-300 rounded-full px-4 py-2 cursor-pointer md:size-32 md:rounded-md md:flex md:flex-col md:justify-center md:bg-gray-50 md:focus:bg-amber-50'>
                  <div className='hidden md:block h-10 overflow-hidden text-center'>
                  <img className='hidden md:block h-full object-contain mx-auto' src={vet1} alt="" />
                  </div>
                  Téléphones portables
                </button>
                <button className=' bg-amber-100 border border-gray-300 rounded-full px-4 py-2 cursor-pointer md:size-32 md:rounded-md md:flex md:flex-col md:justify-center md:bg-gray-50 md:focus:bg-amber-50'>
                  <div className='hidden md:block h-10 overflow-hidden text-center'>
                  <img className='hidden md:block h-full object-contain mx-auto' src={vet1} alt="" />
                  </div>
                  Ordinateurs
                </button>
                <button className=' bg-amber-100 border border-gray-300 rounded-full px-4 py-2 cursor-pointer md:size-32 md:rounded-md md:flex md:flex-col md:justify-center md:bg-gray-50 md:focus:bg-amber-50'>
                  <div className='hidden md:block h-10 overflow-hidden text-center'>
                  <img className='hidden md:block h-full object-contain mx-auto' src={vet1} alt="" />
                  </div>
                  Batéries portable
                </button>
                <button className=' bg-amber-100 border border-gray-300 rounded-full px-4 py-2 cursor-pointer md:size-32 md:rounded-md md:flex md:flex-col md:justify-center md:bg-gray-50 md:focus:bg-amber-50'>
                  <div className='hidden md:block h-10 overflow-hidden text-center'>
                  <img className='hidden md:block h-full object-contain mx-auto' src={vet1} alt="" />
                  </div>
                  Batteries Voitures
                </button>
            </div>
          </div>
        </div>
      </div>


      <div className='px-6 py-3 w-full md:mt-0 md:px-18 overflow-hidden relative'>
        <h1 className="text-md md:text-2xl mb-3">Fournisseur du Nigéria</h1>
        <div className=" w-full  py-3 md:block justify-center md:w-full">
          {/* Conteneur scrollable catégories */}
          <div className="w-full scroll-gray">
            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto lg:grid-cols-4 xl:grid-cols-6 flex-wrap gap-5 gap w-max justify-start items-center">
            
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              

            </div>
          </div>
        </div>

          {/* <span className=" size-svw bg-amber-100 rounded-full absolute bottom-1 -z-20  blur-2xl opacity-70"></span> */}

      </div>

      <div className='px-6 py-3 w-full md:mt-0 md:px-18'>
        <h1 className="text-md md:text-2xl mb-3">Fournisseur du Togo</h1>
        <div className=" w-full  py-3 md:block justify-center md:w-full">
          {/* Conteneur scrollable catégories */}
          <div className="w-full scroll-gray">
            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto lg:grid-cols-4 xl:grid-cols-6gap-5 gap w-max justify-start items-center">
            <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

        {/* <span className=" md:hidden size-svw bg-amber-100 rounded-full absolute  -z-20  blur-2xl opacity-70"></span> */}
      </div>

      <div className='px-6 py-3 w-full md:mt-0 md:px-18 relative'>
      <span className=" size-svw bg-amber-100 rounded-full absolute  -z-20  blur-2xl opacity-70"></span>

        <h1 className="text-md md:text-2xl mb-3">Fournisseur du Bénin</h1>
        <div className=" w-full  py-3 md:block justify-center md:w-full">
          {/* Conteneur scrollable catégories */}
          <div className="w-full scroll-gray">
            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto lg:grid-cols-4 xl:grid-cols-6 gap-5 gap w-max justify-start items-center">
            <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-80 h-80 min-w-80 md:w-54 md:h-54 md:min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className=" md:h-18 overflow-hidden text-center">
                  <img className="h-full mx-auto object-contain" src={vet1} alt="Produit" />
                </div>
                <div className="w-full flex flex-col gap-1.5">
                  <h6 className="text-md font-semibold">Vêtement de saison</h6>
                  <p className="text-md text-gray-400">Fournisseur Nigéria</p>
                  <div className=' flex justify-between items-center'>
                  <strong className="font-bold">2000 <span className="text-amber-600 font-bold">XOF</span></strong>
                  <p className="text-xs text-gray-400 "><strong>Qté min:</strong> <span className=' font-semibold text-amber-600'>200pcs</span> </p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>


       {/* Section Pourquoi choici   */}
       
        <div className='py-3 px-4 w-full md:mt-0 md:px-18 md:flex md:justify-center md:flex-col '>
          <h1 className=' text-2xl bg-amber-50  font-extrabold py-2 md:text-center md:text-4xl'>Pourquoi choisir <span>Afri<strong className=' text-amber-600'>Xport</strong></span></h1>
          <div className=' py-6 grid grid-cols-1  bg-gray-50  md:flex md:justify-around '>
            <div className=' py-6 flex justify-between  md:flex md:justify-around '>
                <div className=' h-24 w-full px-4 bg-white md:size-42 border border-gray-200  rounded-lg flex justify-center items-center flex-col shadow-sm'>
                  <h3 className=' font-medium text-center text-sm md:text-xl'>Livraison sécurisée et rapide</h3>
                </div>              
            </div>
                
            <div className=' py-6 flex justify-between  md:flex md:justify-around '>
                <div className=' h-24 w-full px-4 bg-white md:size-42 border border-gray-200  rounded-lg flex justify-center items-center flex-col shadow-sm md:siez-42'>
                  <h3 className=' font-medium text-center text-sm md:text-xl'>Sécurité de paiement</h3>
                </div>              
            </div>
                
            <div className=' py-6 flex justify-between  md:flex md:justify-around '>
                <div className=' h-24 w-full px-4  bg-white md:size-42 border border-gray-200  rounded-lg flex justify-center items-center flex-col shadow-sm'>
                  <h3 className=' font-medium text-center text-sm md:text-xl'>Sélection de fournisseur vérifier</h3>
                </div>              
            </div>
                
            <div className=' py-6 flex justify-between  md:flex md:justify-around '>
                <div className=' h-24 w-full px-4 bg-white md:size-42 border border-gray-200  rounded-lg flex justify-center items-center flex-col shadow-sm'>
                  <h3 className=' font-medium text-center text-sm md:text-xl'>Assistance client</h3>
                </div>              
            </div>
            <div className=' py-6 flex justify-between  md:flex md:justify-around '>
                <div className='h-24 w-full px-4 bg-white  md:size-42 border border-gray-200  rounded-lg flex justify-center items-center flex-col shadow-sm '>
                  <h3 className=' font-medium text-center text-sm md:text-xl'>Sécurité de paiement</h3>
                </div>              
            </div>
              
          </div>
      </div>


      {/* Section Action */}
      <div className='py-3 px-4 w-full md:mt-0 md:px-18 md:flex md:justify-center md:flex-col '>
          <h1 className=' text-2xl   font-extrabold py-2 md:text-center md:text-4xl'>Devenir fournisseur / partenaire logistique</h1>
          <div className=' py-6 grid grid-cols-1   md:flex md:justify-around '>
            <button className=' bg-amber-600 px-4 w-full py-2 text-white font-semibold rounded-md text-sm md:text-xl hover:bg-amber-500 cursor-pointer'>S’inscrire en tant que fournisseur</button>
          </div>
      </div>

      

      {/* Section Action */}
        {/* <span className="  size-svh bg-amber-100 rounded-full absolute  -z-20  blur-2xl opacity-70"></span> */}
      <div className='py-3 px-4 w-full md:mt-0 md:px-18 md:flex md:justify-center md:flex-col '>
          <h1 className=' text-2xl   font-extrabold py-2 md:text-center md:text-4xl'>Comment utiliser <span>Afri<strong className=' text-amber-600'>Xport</strong></span></h1>
          <p className=' text-justify md:text-center text-sm md:text-xl'>La plateforme PIU a été pensée pour être intuitive, rapide et accessible aussi bien aux clients qu’aux fournisseurs. Voici un aperçu simple du fonctionnement :</p>
          <div className=' py-6 grid grid-cols-1 md:grid-cols-2 md:flex md:justify-around '>
            <div className=' py-4'>
              <h3 className=' font-bold text-2xl mb-3'>Côté client </h3>
              <ul className=' flex flex-col gap-5 '>
                <li className=' flex gap-3.5 '>
                  <h1 className=' size-8 md:size-12 rounded-full bg-amber-400 font-extrabold flex justify-center items-center text-sm md:text-2xl text-white'>01</h1>
                    <div>
                      <h3 className=' font-semibold text-sm md:text-md'>Inscription et connexion</h3>
                      <p className=' text-justify text-gray-500 text-sm md:text-md'>Créez un compte en quelques clics avec votre numéro, email ou compte social.</p>
                    </div>
                  </li>
                  <li className=' flex gap-3.5 '>
                  <h1 className=' size-8  md:size-12 rounded-full bg-amber-400 font-extrabold flex justify-center items-center text-sm md:text-2xl text-white'>02</h1>
                    <div>
                      <h3 className=' font-semibold text-sm md:text-md'>Recherche et exploration</h3>
                      <p className=' text-justify text-gray-500 text-sm md:text-md'>Recherchez un produit ou parcourez les catégories selon vos besoins.</p>
                    </div>
                  </li>
                  <li className=' flex gap-3.5 '>
                  <h1 className=' size-8 md:size-12 rounded-full bg-amber-400 font-extrabold flex justify-center items-center text-sm md:text-2xl text-white'>03</h1>
                    <div>
                      <h3 className=' font-semibold text-sm md:text-md'>Commande</h3>
                      <p className=' text-justify text-gray-500 text-sm  md:text-md'>Sélectionnez le produit, choisissez la quantité, validez la commande et effectuez le paiement via mobile money ou carte bancaire.</p>
                    </div>
                  </li>

                  <li className=' flex gap-3.5 '>
                  <h1 className=' size-8 md:size-12 rounded-full bg-amber-400 font-extrabold flex justify-center items-center text-sm md:text-2xl text-white'>04</h1>
                    <div>
                      <h3 className=' font-semibold text-sm md:text-md'>Suivi de commande</h3>
                      <p className=' text-justify text-gray-500 text-sm  md:text-md'>Visualisez l'état de votre commande : en préparation, en transit, livré.</p>
                    </div>
                  </li>
                  <li className=' flex gap-3.5 '>
                  <h1 className=' size-8 md:size-12 rounded-full bg-amber-400 font-extrabold flex justify-center items-center text-sm md:text-2xl text-white'>05</h1>
                    <div>
                      <h3 className=' font-semibold text-sm md:text-md'>Livraison sécurisée</h3>
                      <p className=' text-justify text-gray-500 text-sm  md:text-md'>Recevez vos produits via des transporteurs partenaires fiables.</p>
                    </div>
                  </li>
                  <li className=' flex gap-3.5 '>
                  <h1 className=' size-8 md:size-12 rounded-full bg-amber-400 font-extrabold flex justify-center items-center text-sm md:text-2xl text-white'>06</h1>
                    <div>
                      <h3 className=' font-semibold text-sm md:text-md'>Notation du fournisseur</h3>
                      <p className=' text-justify text-gray-500 text-sm  md:text-md'>Évaluez votre expérience et aidez la communauté à mieux choisir.</p>
                    </div>
                  </li>
              </ul>
            </div>
            <div className=' py-4'>
              <h3 className=' font-bold text-2xl mb-3'>Côté fournisseur </h3>
              <ul className=' flex flex-col gap-5'>
                <li className=' flex gap-3.5 '>
                  <h1 className=' size-8 md:size-12 rounded-full bg-amber-400 font-extrabold flex justify-center items-center text-sm md:text-2xl text-white'>01</h1>
                    <div>
                      <h3 className=' font-semibold text-sm md:text-md'>Création de boutique</h3>
                      <p className=' text-justify text-gray-500 text-sm  md:text-md'>Inscrivez-vous et vérifiez votre compte (KYC). Configurez votre profil vendeur.</p>
                    </div>
                  </li>
                  <li className=' flex gap-3.5 '>
                  <h1 className=' size-8 md:size-12 rounded-full bg-amber-400 font-extrabold flex justify-center items-center text-sm md:text-2xl text-white'>02</h1>
                    <div>
                      <h3 className=' font-semibold text-sm md:text-md'>Ajout de produits</h3>
                      <p className=' text-justify text-gray-500 text-sm  md:text-md'>Mettez en ligne vos produits avec photos, descriptions et prix.</p>
                    </div>
                  </li>
                  <li className=' flex gap-3.5 '>
                  <h1 className=' size-8 md:size-12 rounded-full bg-amber-400 font-extrabold flex justify-center items-center text-sm md:text-2xl text-white'>03</h1>
                    <div>
                      <h3 className=' font-semibold text-sm md:text-md'>Gestion des commandes</h3>
                      <p className=' text-justify text-gray-500 text-sm  md:text-md'>Consultez les commandes reçues, confirmez et préparez les colis.</p>
                    </div>
                  </li>

                  <li className=' flex gap-3.5 '>
                  <h1 className=' size-8 md:size-12 rounded-full bg-amber-400 font-extrabold flex justify-center items-center text-sm md:text-2xl text-white'>04</h1>
                    <div>
                      <h3 className=' font-semibold text-sm md:text-md'>Expédition</h3>
                      <p className=' text-justify text-gray-500 text-sm  md:text-md'>Livrez les colis via nos partenaires logistiques ou votre propre moyen.</p>
                    </div>
                  </li>
                  <li className=' flex gap-3.5 '>
                  <h1 className=' size-8 md:size-12 rounded-full bg-amber-400 font-extrabold flex justify-center items-center text-sm md:text-2xl text-white'>05</h1>
                    <div>
                      <h3 className=' font-semibold text-sm md:text-md'>Paiement</h3>
                      <p className=' text-justify text-gray-500 text-sm  md:text-md'>Recevez vos paiements de manière sécurisée après livraison.</p>
                    </div>
                  </li>
                  <li className=' flex gap-3.5 '>
                  <h1 className=' size-8 md:size-12 rounded-full bg-amber-400 font-extrabold flex justify-center items-center text-sm md:text-2xl text-white'>06</h1>
                    <div>
                      <h3 className=' font-semibold text-sm md:text-md'>Support & messagerie</h3>
                      <p className=' text-justify text-gray-500 text-sm  md:text-md'>Répondez aux clients et suivez vos ventes en temps réel.</p>
                    </div>
                  </li>
              </ul>
            </div>
          </div>
      </div>

      {/* Footer  */}

      <div className=' w-full md:px-18 px-6 bg-amber-600 py-3'>
        <div className=" flex justify-center w-full bg-white  rounded-md">
          <form action="" className=" flex w-full">
            <input type="search" className="border-0 py-2 rounded-md flex-1 px-4" placeholder="Search..."/>
            <button className=" px-4 cursor-pointer"><FaSearch/></button>
          </form>
        </div>
        <div className=' w-full gap-5 grid grid-col-1 md:grid-cols-3 py-3 '>
          <div>
            <h1 className='  text-3xl md:text-6xl font-extrabold'>Afri<span className=' text-white'>Xport</span></h1>
          </div>
          <div>
            <ul className=' flex flex-col gap-2'>
              <li className=' font-semibold hover:opacity-75 text-white'><a href="#">A Propos </a></li>
              <li className=' font-semibold hover:opacity-75 text-white'><a href="#">FAQ</a></li>
              <li className=' font-semibold hover:opacity-75 text-white'><a href="#">Conditions</a></li>
              <li className=' font-semibold hover:opacity-75 text-white'><a href="#">Contact</a></li>
             
            </ul>
          </div>
          <div>
            <ul className=' flex flex-col gap-2'>
              <li className=' font-semibold hover:opacity-75 flex gap-x-2 items-center text-white'><FaFacebook className=' text-indigo-600 text-xl '/><a href="#">Facebook </a></li>
              <li className=' font-semibold hover:opacity-75 flex gap-x-2 items-center text-white'><FaYoutube className=' text-red-600 text-xl'/><a href="#">Youtube </a></li>
              <li className=' font-semibold hover:opacity-75 flex gap-x-2 items-center text-white'><FaInstagramSquare className=' text-pink-600 text-xl'/><a href="#">Instagram </a></li>
            </ul>
          </div>
        </div>
        <div className=" w-full md:px-18  justify-center">
          <hr className=" w-full text-amber-50"/>
          <p className=" opcaty-75 text-center py-3 text-sm md:text-medium w-ful">&copy;copyRight; Tous droits réservés.</p>
        </div>
      </div>

    </div>
  )
}
