import React from 'react';
import axios from 'axios';
import {axiosLink} from '../utils/variable';
import { useEffect,useState } from 'react';
import './styles/featured.css';
const Featured = () => {
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
            <p className="featureTitle">Featured Animals</p>
            <div className="flexContainer">
                {animals.map(animal =>
                    <div className="featureLi" key={animal._id}>
                    <img src={"images/animals/"+animal.image+".jpg"} className="dummy" alt="animalImage"/>
                    <span className="textFeatured "><br/><br/>{animal.headLine} <br/>Prey : {animal.prey}
                    </span>    
                </div>
                )}
            </div>
        </div>
    );
}

export default Featured;