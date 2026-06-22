import { Routes, Route } from 'react-router-dom'
import { Home, Contacts, Services, About, Portfolio, FAQ, Labs, NotFound, PrivacyPolicy, LandingPage} from '../pages/index'
import { SVG_Rough_filter } from '../components/ui/SVGfilter/SVGFilters'


interface AppRoutesProps {
  isLandingSite: boolean
}
const AppRoutes = ({ isLandingSite }: AppRoutesProps) => {
  return (
    <>
    <SVG_Rough_filter />
    {isLandingSite ? (
      <Routes>
        <Route path='/' element={<LandingPage />} />
      </Routes>

    ) : (

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
    )}
    </>
  )
}

export default AppRoutes