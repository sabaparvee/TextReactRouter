import React, { useState } from 'react'
import Navbar from './Navbar'
import {Outlet} from 'react-router-dom'
import Alert from './Alert';
import Textform from './TextForm';

function Layout() {
  const[mode,setMode]= useState('white');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
   setAlert({
     msg:message,
     type:type
   })
   setTimeout(()=>{
     setAlert(null);
   },2000);
  }
  const toggleMode=()=>{
   if(mode==='white'){
     setMode('black')
     document.body.style.backgroundColor='gray'
     showAlert('Dark Mode has been enabled','Sucess')
     document.title='TextUtils -Dark Mode'
     /* setInterval(()=>{
       document.title='TextUtils Amazing Now'
     },2000)
     setInterval(()=>{
       document.title=' Install TextUtils Amazing Now'
     },1500) */
   }
   else{
     setMode('white')
     document.body.style.backgroundColor='white'
     showAlert('Light Mode has been enabled','Sucess')
     document.title='TextUtils -Light Mode'
   }
  }
 
  
  return (
    <>
    <Navbar mode={mode} toggleMode={toggleMode}/>
    {/* <Alert alert={alert}/>
    <Textform heading="Enter text to analyze" mode={mode} showAlert={showAlert}/> */}
    <Outlet />
    </>
  )
}

export default Layout
