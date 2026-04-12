import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/index'

function App() {
  return (
    <BrowserRouter>
      {/* <SmoothScrollToTop /> */}
      {/* <Navbar /> */}
        <AppRoutes />
      {/* <Footer /> */}
    </BrowserRouter>
  )

}

export default App
