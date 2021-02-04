import {createContext, useState} from "react";
import axios from "axios";

export const FormContext = createContext();

const FormContextProvider = (props) => {

    const baseUrl = "https://geo.api.gouv.fr/communes?codePostal=";

    const [cities, setCities] = useState([]);
    const [zipcode, setZipcode] = useState('');
    const [cityChosen, setCityChosen] = useState('');
    const [noResult, setNoResult] = useState(true);
    const [showCities, setShowCities] = useState(false);
    const [showChoice, setShowChoice] = useState(false);

    const zipcodeInput = (code) => {
        setZipcode(code);
        axios.get(baseUrl + code)
            .then(resp => {
                if (resp.data.length !== 0 && code.length === 5) {
                    setCities(resp.data);
                    setShowCities(true);
                } else if (code.length === 5) {
                    setNoResult(false);
                }else {
                    setNoResult(true);
                    setShowCities(false);
                    setShowChoice(false);
                }
            })
    }

    const cityClick = (index) => {
        setCityChosen(cities[index].nom);
        setShowChoice(true);
    }

    const handleClickCross = () => {
        setCityChosen('');
        setZipcode('');
        setShowCities(false);
        setShowChoice(false);
        setNoResult(true);
    }

    return(
        <FormContext.Provider value={{cities, zipcode, cityChosen, noResult, showCities, showChoice, zipcodeInput, cityClick, handleClickCross}}>
            {props.children}
        </FormContext.Provider>
    )
}

export default FormContextProvider;