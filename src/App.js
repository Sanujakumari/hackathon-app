import logo from './logo.svg';
import './App.css';
import * as React from 'react';

import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

function App() {
  
  return (
    <div className="App">
      <div>
        <h1>Welcome to my Webscrap</h1>
      </div>
      <Search />
    </div>
  );
}
function Search(){
  return(
    <div className="Search">
       <TextField  onChange={  (event) => console.log(event.target.value)} label="Search your product here" variant="filled" />
      <Button startIcon={<SearchIcon />} variant="contained">Search</Button> 
 <Product />
    </div>
  )
}

export default App;
function Product(){
  const flipkart_product=[
    {
   image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaWdSjUEA1sLymW2tyWaqBsxufQc4mrEqD0A&usqp=CAU",
    product_name:"Mobiles",
    starting_rate:"₹8,000.00",
  Rate_upto:"₹1,50,999.00",
  Rating:"4.7★"
  },
  {
    image:"https://s.studiobinder.com/wp-content/uploads/2019/11/Different-Types-of-Cameras-Featured-StudioBinder-min.jpg",
    product_name:"Cameras",
    starting_rate:"15,999.00",
    Rate_upto:"₹2,99,990",
  Rating:"4.5★"
  },
  {
    image:"http://images.summitmedia-digital.com/spotph/images/2021/10/01/-laptops-under-30k-640-1633089483.jpg",
    product_name:"Laptops",
    starting_rate:"26,999.00",
    Rate_upto:"₹3,00,000",
  Rating:"4.6★"
  },
  {
    image:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-smartwatches-1592811712.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
    product_name:"Smartwatches",

    starting_rate:"3900.00",
    Rate_upto:"₹1,50,900.00",
  Rating:"4.7★"
  }
  
  ]
  return(
    <div className="product-list-container">

     {flipkart_product.map((product_detail)=>(
      <div className="product-container">
         <img className="product-picture" src={product_detail.image} />
    <h1 className="product-name" >{product_detail.product_name} </h1>
    <p className="product-name" >starting_rate : {product_detail.starting_rate} </p>
    <p className="product-name" >starting_rate : {product_detail.Rate_upto} </p>
    <p className="product-name" >Rating : {product_detail.Rating} </p>
    
        </div>
    
    ))
    }
        </div>
       
      ) 
    
    }
  
  

//  