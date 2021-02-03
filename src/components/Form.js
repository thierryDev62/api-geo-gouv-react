import React, { useState } from 'react'
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export default function Form() {

    const baseUrl = "https://geo.api.gouv.fr/communes?codePostal=";

    const [cities, setCities] = useState([]);
    const [zipcode, setZipcode] = useState('');
    const [cityChosen, setCityChosen] = useState('');
    const [noResult, setNoResult] = useState(true);
    const [showCities, setShowCities] = useState(false);
    const [showChoice, setShowChoice] = useState(false);

    const handleInput = (code) => {
        setZipcode(code);
        axios.get(baseUrl + code)
            .then(resp => {
                if (resp.data.length !== 0 && code.length === 5) {
                    setCities(resp.data)
                    setShowCities(true)
                    setNoResult(true)
                } else if (resp.data.length === 0 && code.length === 5) {
                    setNoResult(false)
                } else {
                    setNoResult(true);
                    setShowCities(false);
                    setShowChoice(false);
                }
            })
    }

    const handleClick = (index) => {
        setCityChosen(cities[index].nom);
        setShowChoice(true);
    }

    const handleClickCross = () => {
        setZipcode('');
        setShowCities(false);
        setShowChoice(false);
        setNoResult(true)
    }

    return (
        <>
            <div className="input-group">
                <input type="text"
                       name="zipcode"
                       className="form-control"
                       placeholder="Saisir un code postal ex: 75001"
                       id="zipcode"
                       value={zipcode}
                       maxLength={5}
                       autoComplete="off"
                       onInput={
                           (e) => handleInput(e.target.value)
                       }
                />
                <span className="input-group-text"
                      id="basic-addon1" onClick={handleClickCross}><FontAwesomeIcon icon={faTimesCircle} /></span>
            </div>
            {
                noResult ?
                    showCities &&
                    <ul className="list-group"> {
                        cities.map((city, index) =>
                            <li className="list-group-item"
                                key={index}
                                value={index}
                                onClick={e => handleClick(e.target.value)} ><FontAwesomeIcon icon={faMapMarkerAlt} /> {city.nom}
                            </li>
                        )
                    }
                    </ul>
                    : <div className="alert alert-danger fw-bold" role="alert">
                        Le code postal que vous avez saisi n'est pas reconnu !
                    </div>
            }
            {
                showChoice &&
                <p className="mt-5"> Vous avez choisi la ville de : <strong>{cityChosen}</strong> </p>
            }
        </>
    )
}