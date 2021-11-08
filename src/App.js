import About from './Components/About';
import ContactUs from './Components/Contact Us';
import Footer from './Components/footer';
import Header from './Components/header';
import ListMissons from './Components/ListMissons';
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <About/>
      <ListMissons/>
      <ContactUs/>
      <Footer />

      </Router>
      
    </div>


  );
  
}




export default App;
