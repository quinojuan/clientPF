import React from "react";
import { Link } from "react-router-dom";

import "./Cards.css";

export default function Cards({
  model,
  image,
  brand,
  price,
  inches,
  operative_system,
  capacity,
  category,
  id,
}) {
  return (
    // <div class="card" style="width: 18rem;">
    //  <img src={image} class="card-img-top" alt='img not found'/>
    //    <div class="card-body">
    //     <h5 class="card-title">{brand}{model}</h5>
    //       <p class="card-text">{inches}{operative_system}{capacity}</p>
    //     <a href="#" class="btn btn-primary">{price}</a>
    // </div>
    // </div>

    <div class="container">
      <div class="row">
      <div class="card-colums">
      <div class="card h-100 w-50 mx-auto bg-dark">
        <Link
          class="text-succes"
          key={id}
          to={`/products/${id}`}
        >
          <img src={image} style={{ height: '220px' }} class="card-img-top img-fluid bg-light"
            alt="img not found"></img>
        </Link>
        <button className="stock">EN STOCK</button>
        <div class="card-body text-light">
          <h5 class="card-title text-decoration-none">
            {brand} 
          </h5>
          <h6 class="lead">
          {inches + '" - '} {operative_system + ' -'} {capacity<10 ? capacity + "TB" : capacity + "GB"}
          </h6>
          <div class="card-title">
            <h3>{price > 999
                        ? "$" + parseFloat(price / 1000).toFixed(3)
                        : "$" + price}</h3>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>

    

    

                
     
                    
                 

// <div className="container">
//     <div className="cards">
//     <img src={image} alt='Img not found' width='200px' height='250px'></img>
//     <h3>{model}</h3>
//     <h5>{"$"+price}</h5>
//     <h5>{brand}</h5>
// </div>
// </div>
)
}
