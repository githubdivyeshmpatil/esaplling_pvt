import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Consumer_Electronics from './pages/Consumer_Electronics'
import ProductPage from './RouterProduct/ProductPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Navbar/> */}
     {/* <Home/>
     */}
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
       <Route path="/consumer-Electronics" element={<Consumer_Electronics />}/>
         <Route path="/products/:category" element={<ProductPage />} />
      </Routes>
    </Router>
 
    <Footer/> 
      
    </>
  )
}

export default App
