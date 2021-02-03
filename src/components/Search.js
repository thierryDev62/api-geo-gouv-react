import React, {useContext} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {FormContext} from "./context/FormContext";

const Search = () => {

    const {zipcode, zipcodeInput, handleClickCross} = useContext(FormContext);

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
                           (e) => zipcodeInput(e.target.value)
                       }
                />
                <span className="input-group-text"
                      id="basic-addon1" onClick={handleClickCross}><FontAwesomeIcon icon={faTimesCircle} /></span>
            </div>
        </>
    );
};

export default Search;
