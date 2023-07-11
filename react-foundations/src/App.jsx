import React from 'react'
import { useEffect } from 'react' // you have to import this also, just like useState
import Product from './Product'  //importing new component Product
import './App.css'

function App() {
  
  useEffect(()=> {
    console.log("Page has been rendered");
  })     //insight on next lecture/workshop

  return (
    <>
    <h1>Video Games</h1>
   
    {/* Render ...bring in the Product component, giving the props values */}
    <div className="products-container">
     <Product 
      name="Call of Duty" 
      description="World at War 3, Combat Gaming" 
      price={60.99} 
      imageUrl="images/callOfDuty.jpg" />
    <br/>
    <hr/>

      <Product 
      name="Guitar Hero" 
      description="Simulate Guitar, Music Rhythm "
      price={59.85} 
      imageUrl="images/guitarHero.jpg" />
     <br/>
     <hr/>

      <Product 
      name="Sonic The Hedgehog 2" 
      description="Battles Evil, Classic" 
      price={89.99}
      imageUrl="images/sonic.jpg" /> 
  </div>
    </>

  )
}

export default App





// Notes

//Props are passed in, just like html attributes
//When passing in numbers for values of props use {59.66}, curlies and then number
//Renders Product Three Times

