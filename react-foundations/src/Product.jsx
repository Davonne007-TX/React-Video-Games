import React from 'react'

function Product ({name, description, price, imageUrl}) {
  return (
    <div className="videoGames">
        <p className="titleOfGame">{name}</p>
        <p className="gameDescription"><i>{description}</i></p>
        <p>${price}</p>
        <img src={imageUrl} alt={name} className="gameImage"/>
    </div>
 
  )
}

export default Product



{ 
  /*

Notes: 
   You can now make one component (in this case Product),
   and reuse it several times all throughout our application,
   this is why and how you see more then one video game listed aka
   rendered

More Notes:
    - from lines 6-9, give value to the props via javascript {props.name} or just "call" the {name of prop} 
       -the way I did it, which is by using {name of prop}, is called deconstruction
     
       - we can now use those props where we need in our component 

Questions:
       ! How does index css, and able to render? Its not imported like App.css
         
       ! Need to get the header to be the same size as products-container, working on it
*/ }