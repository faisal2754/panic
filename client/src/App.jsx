import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Hero from './pages/Hero'
import Navbar from './components/Navbar'
import Start from './pages/Start'
import ClientRegister from './pages/ClientRegister'
import ClientDashboard from './pages/ClientDashboard'
import ClientLogin from './pages/ClientLogin'
import ClientDashboard2 from './pages/clientDashboard2'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/start" element={<Start />} />
        <Route path="/client-register" element={<ClientRegister />} />
        <Route path="/client-login" element={<ClientLogin />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/client-dashboard2" element={<ClientDashboard2 />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
