import img1 from '../../../src/assets/images/image1.png'
import vet1 from '../../../src/assets/images/vet1.webp'
import vet2 from '../../../src/assets/images/vet2.webp'
import vet3 from '../../../src/assets/images/vet3.webp'
import vet4 from '../../../src/assets/images/vet4.webp'

export const Base = () => {
  return (
    <div className=' flex flex-col  w-full'>

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
      <div className='py-3 px-4 w-full mt-38 md:px-18 md:mt-0 md:flex md:justify-center md:flex-col '>
          <h1 className=' text-2xl bg-amber-50 font-extrabold py-2 md:text-center md:text-4xl'>Comment fonction <span>Afri<strong className=' text-amber-600'>Xport</strong></span></h1>
          <div className=' py-6 flex justify-between bg-gray-50 md:flex md:justify-around '>
              <div className=' size-32 md:size-42 border border-orange-200  rounded-full flex justify-center items-center flex-col shadow-sm'>
               <div className=' h-10 overflow-hidden text-center'>
                  <img className=' h-full object-contain mx-auto' src={vet1} alt="" />
                </div>
                <h3 className=' font-medium text-sm md:text-xl'>Choisir</h3>
              </div>
              <div className=' size-32 md:size-42 border border-orange-200  rounded-full flex justify-center items-center flex-col shadow-sm'>
               <div className=' h-10 overflow-hidden text-center'>
                  <img className=' h-full object-contain mx-auto' src={vet1} alt="" />
                </div>
                <h3 className=' font-medium text-sm md:text-xl'>Commander</h3>
              </div>
              <div className=' size-32 md:size-42 border border-orange-200  rounded-full flex justify-center items-center flex-col shadow-sm'>
               <div className=' h-10 overflow-hidden text-center'>
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


      <div className='px-6 py-3 w-full md:mt-0 md:px-18'>
        <h1 className="text-md md:text-2xl mb-3">Fournisseur du Nigéria</h1>
        <div className=" w-full  py-3 md:block justify-center md:w-full">
          {/* Conteneur scrollable catégories */}
          <div className="w-full scroll-gray">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-5 gap w-max justify-start items-center">
            <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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

      <div className='px-6 py-3 w-full md:mt-0 md:px-18'>
        <h1 className="text-md md:text-2xl mb-3">Fournisseur du Togo</h1>
        <div className=" w-full  py-3 md:block justify-center md:w-full">
          {/* Conteneur scrollable catégories */}
          <div className="w-full scroll-gray">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-5 gap w-max justify-start items-center">
            <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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

      <div className='px-6 py-3 w-full md:mt-0 md:px-18'>
        <h1 className="text-md md:text-2xl mb-3">Fournisseur du Bénin</h1>
        <div className=" w-full  py-3 md:block justify-center md:w-full">
          {/* Conteneur scrollable catégories */}
          <div className="w-full scroll-gray">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-5 gap w-max justify-start items-center">
            <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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
              <div className="flex flex-col justify-center border border-gray-300 rounded-md w-54 min-w-54 py-2 px-1 relative overflow-hidden gap-y-1.5">
                <div className="h-18 overflow-hidden text-center">
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
          <div className=' py-6 grid grid-cols-3  bg-gray-50  md:flex md:justify-around '>
            <div className=' py-6 flex justify-between  md:flex md:justify-around '>
                <div className=' size-32 bg-white md:size-42 border border-gray-200  rounded-e-4xl flex justify-center items-center flex-col shadow-sm'>
                  <h3 className=' font-medium text-center text-sm md:text-xl'>Livraison sécurisée et rapide</h3>
                </div>              
            </div>
                
            <div className=' py-6 flex justify-between  md:flex md:justify-around '>
                <div className=' size-32 bg-white md:size-42 border border-gray-200  rounded-e-4xl flex justify-center items-center flex-col shadow-sm md:siez-42'>
                  <h3 className=' font-medium text-center text-sm md:text-xl'>Sécurité de paiement</h3>
                </div>              
            </div>
                
            <div className=' py-6 flex justify-between  md:flex md:justify-around '>
                <div className=' size-32 bg-white md:size-42 border border-gray-200  rounded-e-4xl flex justify-center items-center flex-col shadow-sm'>
                  <h3 className=' font-medium text-center text-sm md:text-xl'>Sélection de fournisseur vérifier</h3>
                </div>              
            </div>
                
            <div className=' py-6 flex justify-between  md:flex md:justify-around '>
                <div className=' size-32 bg-white md:size-42 border border-gray-200  rounded-e-4xl flex justify-center items-center flex-col shadow-sm'>
                  <h3 className=' font-medium text-center text-sm md:text-xl'>Assistance client</h3>
                </div>              
            </div>
            <div className=' py-6 flex justify-between  md:flex md:justify-around '>
                <div className=' size-32 bg-white  md:size-42 border border-gray-200  rounded-e-4xl flex justify-center items-center flex-col shadow-sm '>
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
      <div className='py-3 px-4 w-full md:mt-0 md:px-18 md:flex md:justify-center md:flex-col '>
          <h1 className=' text-2xl   font-extrabold py-2 md:text-center md:text-4xl'>Comment utiliser <span>Afri<strong className=' text-amber-600'>Xport</strong></span></h1>
          <p className=' text-justify md:text-center'>La plateforme PIU a été pensée pour être intuitive, rapide et accessible aussi bien aux clients qu’aux fournisseurs. Voici un aperçu simple du fonctionnement :</p>
          <div className=' py-6 grid grid-cols-1 md:grid-cols-2 md:flex md:justify-around '>
            <div className=' py-4'>
              <h3 className=' font-bold text-2xl mb-3'>Côté client </h3>
              <ul className=' flex flex-col gap-5 '>
                <li className=' flex gap-3.5 '>
                  <h1 className=' size-12 rounded-full bg-amber-400 font-extrabold flex justify-center items-center text-2xl text-white'>01</h1>
                    <div>
                      <h3 className=' font-semibold'>Inscription et connexion</h3>
                      <p className=' text-justify text-gray-500'>Créez un compte en quelques clics avec votre numéro, email ou compte social.</p>
                    </div>
                  </li>
                  <li className=' flex gap-3.5 '>
                  <h1 className=' size-12 rounded-full bg-amber-400 font-extrabold flex justify-center items-center text-2xl text-white'>02</h1>
                    <div>
                      <h3 className=' font-semibold'>Recherche et exploration</h3>
                      <p className=' text-justify text-gray-500'>Recherchez un produit ou parcourez les catégories selon vos besoins.</p>
                    </div>
                  </li>
                  <li className=' flex gap-3.5 '>
                  <h1 className=' size-12 rounded-full bg-amber-400 font-extrabold flex justify-center items-center text-2xl text-white'>03</h1>
                    <div>
                      <h3 className=' font-semibold'>Commande</h3>
                      <p className=' text-justify text-gray-500'>Sélectionnez le produit, choisissez la quantité, validez la commande et effectuez le paiement via mobile money ou carte bancaire.</p>
                    </div>
                  </li>

                  <li className=' flex gap-3.5 '>
                  <h1 className=' size-12 rounded-full bg-amber-400 font-extrabold flex justify-center items-center text-2xl text-white'>04</h1>
                    <div>
                      <h3 className=' font-semibold'>Suivi de commande</h3>
                      <p className=' text-justify text-gray-500'>Visualisez l'état de votre commande : en préparation, en transit, livré.</p>
                    </div>
                  </li>
                  <li className=' flex gap-3.5 '>
                  <h1 className=' size-12 rounded-full bg-amber-400 font-extrabold flex justify-center items-center text-2xl text-white'>05</h1>
                    <div>
                      <h3 className=' font-semibold'>Livraison sécurisée</h3>
                      <p className=' text-justify text-gray-500'>Recevez vos produits via des transporteurs partenaires fiables.</p>
                    </div>
                  </li>
                  <li className=' flex gap-3.5 '>
                  <h1 className=' size-12 rounded-full bg-amber-400 font-extrabold flex justify-center items-center text-2xl text-white'>06</h1>
                    <div>
                      <h3 className=' font-semibold'>Notation du fournisseur</h3>
                      <p className=' text-justify text-gray-500'>Évaluez votre expérience et aidez la communauté à mieux choisir.</p>
                    </div>
                  </li>
              </ul>
            </div>
            <div className=' py-4'>
              <h3 className=' font-bold text-2xl mb-3'>Côté fournisseur </h3>
              <ul className=' flex flex-col gap-5'>
                <li className=' flex gap-3.5 '>
                  <h1 className=' size-12 rounded-full bg-amber-400 font-extrabold flex justify-center items-center text-2xl text-white'>01</h1>
                    <div>
                      <h3 className=' font-semibold'>Création de boutique</h3>
                      <p className=' text-justify text-gray-500'>Inscrivez-vous et vérifiez votre compte (KYC). Configurez votre profil vendeur.</p>
                    </div>
                  </li>
                  <li className=' flex gap-3.5 '>
                  <h1 className=' size-12 rounded-full bg-amber-400 font-extrabold flex justify-center items-center text-2xl text-white'>02</h1>
                    <div>
                      <h3 className=' font-semibold'>Ajout de produits</h3>
                      <p className=' text-justify text-gray-500'>Mettez en ligne vos produits avec photos, descriptions et prix.</p>
                    </div>
                  </li>
                  <li className=' flex gap-3.5 '>
                  <h1 className=' size-12 rounded-full bg-amber-400 font-extrabold flex justify-center items-center text-2xl text-white'>03</h1>
                    <div>
                      <h3 className=' font-semibold'>Gestion des commandes</h3>
                      <p className=' text-justify text-gray-500'>Consultez les commandes reçues, confirmez et préparez les colis.</p>
                    </div>
                  </li>

                  <li className=' flex gap-3.5 '>
                  <h1 className=' size-12 rounded-full bg-amber-400 font-extrabold flex justify-center items-center text-2xl text-white'>04</h1>
                    <div>
                      <h3 className=' font-semibold'>Expédition</h3>
                      <p className=' text-justify text-gray-500'>Livrez les colis via nos partenaires logistiques ou votre propre moyen.</p>
                    </div>
                  </li>
                  <li className=' flex gap-3.5 '>
                  <h1 className=' size-12 rounded-full bg-amber-400 font-extrabold flex justify-center items-center text-2xl text-white'>05</h1>
                    <div>
                      <h3 className=' font-semibold'>Paiement</h3>
                      <p className=' text-justify text-gray-500'>Recevez vos paiements de manière sécurisée après livraison.</p>
                    </div>
                  </li>
                  <li className=' flex gap-3.5 '>
                  <h1 className=' size-12 rounded-full bg-amber-400 font-extrabold flex justify-center items-center text-2xl text-white'>06</h1>
                    <div>
                      <h3 className=' font-semibold'>Support & messagerie</h3>
                      <p className=' text-justify text-gray-500'>Répondez aux clients et suivez vos ventes en temps réel.</p>
                    </div>
                  </li>
              </ul>
            </div>
          </div>
      </div>

      {/* Footer  */}

      <div className=''></div>








    </div>
  )
}
