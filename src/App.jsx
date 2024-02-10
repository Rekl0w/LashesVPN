import './App.css'
import Banner from './sections/Banner/Banner'
import Topbar from './sections/Topbar/Topbar'
import Features from './sections/Features/Features'
import Pricing from './sections/Pricing/Pricing'
import Global from './sections/Global/Global'
import Reviews from './sections/Reviews/Reviews'
import Subscribe from './sections/Subscribe/Subscribe'
import Footer from './sections/Footer/Footer'

function App() {

  return (
    <>
      <Topbar />
      <Banner />
      <Features />
      <Pricing />
      <Global />
      <Reviews />
      <Subscribe />
      <Footer />
    </>
  )
}

export default App
