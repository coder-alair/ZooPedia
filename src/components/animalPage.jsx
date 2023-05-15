import React from 'react';
import { Link } from 'react-router-dom';
import './styles/allAnimals.css';
const AnimalPage = ({ value }) => {

    return (
        <div className="mainBodyAnimal">
            <div>
                <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-left-square-fill left backBtn" viewBox="0 0 16 16">
                    <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
                </svg></Link>
            </div>

            <div>
                <img src={"images/animals/" + value.image + ".jpg"} className="dataImage" alt="animalPic"/>
                <div className="databody">
                    <p className="animalTitle">The {value.animalName}</p>

                    <p className="animalHeadline">~ {value.headLine}</p>

                    <div className="box">

                        <div className="infoBox">
                            <div className="infoAbout">

                                <p className="infoAboutTextTitle">Live in : {value.habitat}</p><br />
                                <p className="infoAboutText">{value.about}</p>


                            </div>
                            <div className="infoCharacter">
                                <p className="infoCharacterTitle">Characteristic's</p>

                                <div className="infoCharacterText">Colour : {value.character[0].color}</div>
                                <div className="infoCharacterText">Type : {value.character[0].type}</div>
                                <div className="infoCharacterText">Weapon : {value.character[0].weapon}</div>
                                <div className="infoCharacterText">Prey : {value.prey}</div>


                            </div>


                        </div>




                    </div>


                </div>
            </div>








        </div>);
}

export default AnimalPage;