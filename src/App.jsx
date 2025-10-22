import React from 'react'
import { Routes, Route } from 'react-router-dom'  
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './Pages/Home'
import AllApps from './Pages/AllAps'
import AppDetails from './Pages/AppDetails'
import MyInstallations from './Pages/MyInstallation'
import ErrorPage from './Pages/ErrorPage'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/apps" element={<AllApps />} />
          <Route path="/installation" element={<MyInstallations />} />
          <Route path="/app/:id" element={<AppDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
