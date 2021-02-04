import React, {useContext} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {FormContext} from "./context/FormContext";

const DisplayCities = () => {

    const {cities, zipcode, onSearch, cityClick} = useContext(FormContext);

    return (
        <>
            {
                zipcode.length === 5 ?

                    cities.length !== 0 ?
                        <ul className="list-group scroller"> {
                            cities.map((city, index) =>
                                <li className="list-group-item"
                                    key={index}
                                    value={index}
                                    onClick={e => cityClick(e.target.value)} ><FontAwesomeIcon icon={faMapMarkerAlt} /> {city.nom}
                                </li>
                            )
                        }
                        </ul>
                        : !onSearch && <div className="alert alert-danger fw-bold" role="alert">
                        Le code postal que vous avez saisi n'est pas reconnu !
                    </div>
                    : ''
            }
        </>
    );
};

export default DisplayCities;
