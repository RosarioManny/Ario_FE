import { Routes, Route } from 'react-router-dom'
import { Home, Contacts, Services, About, Portfolio, FAQ, Labs, NotFound, PrivacyPolicy, LandingPage} from '../pages/index'
import { SVG_Rough_filter } from '../components/ui/SVGfilter/SVGFilters'


interface AppRoutesProps {
  isOfficialSite: boolean
}
const AppRoutes = ({ isOfficialSite }: AppRoutesProps) => {
  return (
    <>
    <SVG_Rough_filter />
    {!isOfficialSite ? (
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
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    )}
    </>
  )
}

export default AppRoutes