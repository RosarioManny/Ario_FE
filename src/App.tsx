import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/index'
import { Navbar } from './components/layout/Navbar/_navbar'
import { SmoothScrollToTop } from './hooks/Navigation/SmoothScrollToTop'


function App() {
  return (
    <BrowserRouter>
      <SmoothScrollToTop />
      <Navbar />
        <AppRoutes />
      {/* <Footer /> */}
    </BrowserRouter>
  )

}

export default App
