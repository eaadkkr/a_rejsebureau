import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import HjemPage from './pages/HjemPage'
import RejserPage from './pages/RejserPage'
import OmPage from './pages/OmPage'
import Footer from './components/Footer'

// HEJ!

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HjemPage />} />
        <Route path="/rejser" element={<RejserPage />} />
        <Route path="/om" element={<OmPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer /> 
    </>
  )
}

export default App
