import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/index'
import { useState } from 'react'
import { Navbar } from './components/layout/Navbar/_navbar'
import { SmoothScrollToTop } from './hooks/Navigation/SmoothScrollToTop'
import { Footer } from './components/layout/Footer/_footer'

function App() {
  const [isOfficialSite] = useState(false)
  return (
    <BrowserRouter>
      <SmoothScrollToTop />
      {isOfficialSite && <Navbar />}
        <AppRoutes isOfficialSite={isOfficialSite}/>
      <Footer isOfficialSite={isOfficialSite}/>
    </BrowserRouter>
  )

}

export default App
