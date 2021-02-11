import {createContext, useState} from "react";
import axios from "axios";

export const FormContext = createContext();

const FormContextProvider = (props) => {

    const baseUrl = "https://geo.api.gouv.fr/communes?codePostal=";

    const [cities, setCities] = useState([]);
    const [zipcode, setZipcode] = useState('');
    const [cityChosen, setCityChosen] = useState('');
    const [onSearch, setOnsearch] = useState(false);

    const zipcodeInput = (code) => {
        setZipcode(code);
        if(code.length === 5) {
            setOnsearch(true);
            axios.get(baseUrl + code)
                .then(resp => {
                    setCities(resp.data);
                    setOnsearch(false);
                })
        }
    }

    const cityClick = (index) => {
        setCityChosen(cities[index].nom);
    }

    const handleClickCross = () => {
        setCityChosen('');
        setZipcode('');
    }

    return(
        <FormContext.Provider value={{cities, zipcode, cityChosen, onSearch, zipcodeInput, cityClick, handleClickCross}}>
            {props.children}
        </FormContext.Provider>
    )
}

export default FormContextProvider;