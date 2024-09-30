import ButtonGradient from "./assets/svg/ButtonGradient"; 
import Benefit from "./components/Benefits";
import Header from "./components/Header"; 
import Hero from "./components/Hero"; 

const App = () => {
  return (
    <>  
      <div className="pt-[4.75rem] lg:pt-[5.25] overflow-hidden">
       <Header />
       <Hero />
       <Benefit />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
