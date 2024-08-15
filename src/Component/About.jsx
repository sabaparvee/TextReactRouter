import React, { useState } from 'react'

export default function About() {
  const[myStyle,setStyle]=useState({
        color:"black",
        backgroundColor:"white"})
  const[btntext,setBtnText]=useState('Enable Dark Mode')     
  const toggleStyle=()=>{
    console.log("inside toggle")
    if(myStyle.color ==='white'){
      setStyle({
        color:'black',
        backgroundColor:'white'
      })
      setBtnText('Enable Dark Mode')
      console.log("inside light")
      console.log(myStyle)
    }
    else{
      setStyle({
        color:'white',
        backgroundColor:'black'
      })
      setBtnText('Enable Light Mode')
      console.log(myStyle)
      console.log("inside dark")

    }
  }
    
  return (
    <>
    <div className=" bg-white shadow flex flex-col my-4 p-6 px-60" style={myStyle} >
        <p className="text-xl font-semibold pb-5">About Us</p>
        <p className="pb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mattis est eu odio sagittis
            tristique. Vestibulum ut finibus leo. In hac habitasse platea dictumst.</p>
       
        <button onClick={toggleStyle} type="button"className='btn px-2 py-2 bg-slate-600 my-2 rounded-lg text-neutral-50 mx-2'>{btntext}</button>
    </div>
    </>
  )
}
