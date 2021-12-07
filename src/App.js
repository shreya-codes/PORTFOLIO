import React,{useState,useEffect} from 'react';
import './App.css';
import './components/Button.css'
import Navbar from './components/Navbar/Navbar';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import ProjectSection from './ProjectSection';
import About from './components/AboutSection';
import Intro from './components/Intro'
import Contact from './components/ContactSection'
import Footer from './components/Footer';
function App() {
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  },[])
  return (
    <div className="App">
      
      {loading  ? <div className="load"><ClimbingBoxLoader className="load"
 color={"#64ffda"} 
      loading={loading} 
       size={30} /></div>
      :
     <Navbar /> }
     <Intro />
   
     <About />

     <ProjectSection /> 
     <Contact />
     <Footer />
      
    </div>
  );
}

export default App;
