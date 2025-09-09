import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'
import { Base } from './components/layouts/Base'
import { CreateFournisseur } from './components/auths/fourniseurs/CreateFournisseur'
import { CreateLivreur } from './components/auths/livreurs/CreateLivreur'
import { CreateAcheteur } from './components/auths/acheteurs/CreateAcheteur'

const  App = () => {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Base/>}></Route>
        <Route path='/create_fournisseur' element={<CreateFournisseur/>}></Route>
        <Route path='/create_livreur' element={<CreateLivreur/>}></Route>
        <Route path='/create_acheteur' element={<CreateAcheteur/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
