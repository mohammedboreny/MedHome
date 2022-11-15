import Footer1 from "./Components/Footer/Footer1";
import Header1 from "./Components/Header/Header1";
import Header2 from "./Components/Header/Header2";
import Hero from "./Components/Hero/Hero";
import PlaceHolders from "./Components/PlaceHolders/PlaceHolders";
import Testo from "./Components/Testo/Testo";
import CTA from "./CTA/CTA";
import './index.css'
function App() {
  return (
    <div  >
      <Header1 />
      <Hero />
      <Testo />
     
      <CTA />
      <PlaceHolders />
      <Footer1/>
    </div>
  );
}

export default App;
