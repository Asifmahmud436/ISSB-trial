import './App.css'
import Banner from './Components/Banner/Banner'
import Contact from './Components/ContactUs/Contact'
import Footer from './Components/Footer/Footer'
import FourPrinciples from './Components/FourPrinciples/FourPrinciples'
import Gallery from './Components/Gallery/Gallery'
import History from './Components/History/History'

function App() {

  return(
    <div>
      <Banner/>
      <FourPrinciples/>
      <History/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
