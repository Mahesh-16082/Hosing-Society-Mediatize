import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Status from './components/Status';
import Units from './components/Units';
import About from './components/About';
import Plans from './components/Plans';
import Currentstatus from './components/Currentstatus';
import Location from './components/Location';
import Extra from './components/Extra';
import Highlights from './components/Highlights';
import Contact from './components/Contact';
import "./App.css";


function App(){
  return(
    <>
    <Navbar />
    <Status />
    <Units />
    <About />
    <Plans />
    <Currentstatus />
    <Location />
    <Extra />
    <Highlights />
    <Contact />
    <Footer />
    </>
  );
}
export default App;