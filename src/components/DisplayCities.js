import React, {useContext} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {FormContext} from "./context/FormContext";

const DisplayCities = () => {

    const {noResult, showCities, cities, cityClick} = useContext(FormContext);

    return (
        <>
            {
                noResult ?
                    showCities &&
                    <ul className="list-group"> {
                        cities.map((city, index) =>
                            <li className="list-group-item"
                                key={index}
                                value={index}
                                onClick={e => cityClick(e.target.value)} ><FontAwesomeIcon icon={faMapMarkerAlt} /> {city.nom}
                            </li>
                        )
                    }
                    </ul>
                    : !noResult ? <div className="alert alert-danger fw-bold" role="alert">
                        Le code postal que vous avez saisi n'est pas reconnu !
                    </div> : ''
            }
        </>
    );
};

export default DisplayCities;
