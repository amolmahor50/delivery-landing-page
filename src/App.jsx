import Header from './components/Header'
import About from './pages/About'
import Home from './pages/Home'
import HowItsWork from './pages/HowItsWork'
import Service from './pages/Service'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <>
      <Header />
      <div className='mx-auto max-w-7xl w-full sm:px-0 px-6'>
        <Home />
        <Service />
        <About />
        <HowItsWork />
        <Testimonial />
      </div>
      <Footer />
      <ScrollToTop />
    </>
  )
}
