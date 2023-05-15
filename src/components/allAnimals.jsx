import React,{useEffect,useState} from 'react';
import AnimalPage from './animalPage';
import {axiosLink} from '../utils/variable';
import axios from 'axios';
import './styles/allAnimals.css';
const AllAnimals = () => {
    const [animals,setAnimals]=useState([]);
    useEffect(()=>{
        async function getData(){
            const {data:animals}=await axios.get(axiosLink+'data');
            setAnimals(animals);
        }
        getData();
    },[]);
    return ( 
    <div>
<img src='images/bg2.jpg' className="pageImage" alt="background" />
<div className="page">
    
<div id="carouselExampleControls" className="carousel">
  <div className="carousel-inner text-center">
{animals.map(i=>
    <div className={animals.indexOf(i)===0?"carousel-item active":"carousel-item"} key={i._id}>
      <span className="text-center"><AnimalPage value={i}/></span>
    </div>

    )}

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



</div>










    </div>
     );
}
 
export default AllAnimals;