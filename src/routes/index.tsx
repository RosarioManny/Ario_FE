import { Routes, Route } from 'react-router-dom'
import { Home, Contacts, Services, About, Portfolio, FAQ, Labs, NotFound, PrivacyPolicy} from '../pages/index'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contacts' element={<Contacts />} />
      <Route path='/services' element={<Services />} />
      <Route path='/about' element={<About />} />
      <Route path='/portfolio' element={<Portfolio />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/labs' element={<Labs />} />
      <Route path='/not-found' element={<NotFound />} />
      <Route path="privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  )
}

export default AppRoutes