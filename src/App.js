import React,{useState,useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[])
  return (
    <div className="App">
      
      {loading  ? <div className="load"><ClimbingBoxLoader className="load"
 color={"#64ffda"} 
      loading={loading} 
       size={30} /></div>
      :
     <Navbar /> }
      
    </div>
  );
}

export default App;
