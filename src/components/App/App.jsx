import { Route, Routes } from 'react-router-dom'
import  Home  from '../../pages/Home/Home';
import  Catalog  from '../../pages/Catalog/Catalog';
import  Layout from '../Layout/Layout'
function App() {


  return (
    <>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="catalog" element={<Catalog />}>
         
        </Route>

       

       
      </Route>
    </Routes>
      
    </>
  )
}

export default App
