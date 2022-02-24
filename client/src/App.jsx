import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Hero from './pages/Hero'
import Navbar from './components/Navbar'
import Start from './pages/Start'
import ClientRegister from './pages/ClientRegister'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/start" element={<Start />} />
        <Route path="/client-register" element={<ClientRegister />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
