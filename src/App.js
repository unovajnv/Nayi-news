import './index.css';
import React, { useState} from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import Footer from './footer';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


const App =()=> {

  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  
   
    return (
      <div>
      <Router> 
      <Navbar/>
      <LoadingBar
        color='#f00000'
        progress={progress}
      />
       <Routes>
          <Route path='/' element={<News setProgress={setProgress} apiKey ={apiKey}  key='general' pageSize={9} country='in' category='general' />}></Route>
            <Route path='/entertainment' element={<News setProgress={setProgress} apiKey ={apiKey} key='entertainment' pageSize={9} country='in' category='entertainment' />}></Route>
            <Route path='/science' element={<News setProgress={setProgress} apiKey ={apiKey} key='science' pageSize={9} country='in' category='science' />}></Route>
            <Route path='/sports' element={<News setProgress={setProgress} apiKey ={apiKey} key='sports' pageSize={9} country='in' category='sports' />}></Route>
            <Route path='/technology' element={<News setProgress={setProgress} apiKey ={apiKey} key='technology' pageSize={9} country='in' category='technology' />}></Route>
       </Routes>  
      </Router>
      <Footer/>
      </div>
    )
  
}
export default App;
