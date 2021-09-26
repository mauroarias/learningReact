import React, { useState } from 'react';
import './FormActions.css'

const FormActions = (props) => {

    const [resetVisible, setResetVisible] = useState(true);
    const [summitVisible, setSummitVisible] = useState(true);

    const resetHandler = () => {
        props.onReset();
    }

    const summitHandler = () => {
        props.onSummit();
    }

    if (props.resetVisible && resetVisible) {
        setResetVisible(props.resetVisible === 'true');
    }

    if (props.summitVisible && resetVisible) {
        setSummitVisible(props.summitVisible === 'true');        
    }

    return (
        <div className='actions'>
            {resetVisible && <button onClick={resetHandler}>{props.resetLabel}</button>}
            {summitVisible && <button onClick={summitHandler}>{props.summitLabel}</button>}
        </div>
    );
}

export default FormActions;