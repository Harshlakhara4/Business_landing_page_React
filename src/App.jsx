import ButtonGradient from "./assets/svg/ButtonGradient"; 
import Benefit from "./components/Benefits";
import Header from "./components/Header"; 
import Hero from "./components/Hero"; 
import Collaboration from "./components/Collboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <>  
      <div className="pt-[4.75rem] lg:pt-[5.25] overflow-hidden">
       <Header />
       <Hero />
       <Benefit />
       <Collaboration />
       <Services />
       <Pricing />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
