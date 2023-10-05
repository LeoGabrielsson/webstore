import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Homepage from './pages/Homepage'
import Storepage from './pages/Storepage'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <main className='flow'>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/products' element={<Storepage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App