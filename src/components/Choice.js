import React, {useContext} from 'react';
import {FormContext} from "./context/FormContext";

const Choice = () => {

    const {cityChosen} = useContext(FormContext);

    return (
        <>
            {
                cityChosen !== '' &&
                <div className="alert alert-warning mt-5" role="alert">
                    Vous avez choisi la ville de : <strong>{cityChosen}</strong>
                </div>
            }
        </>
    );
};

export default Choice;
