import React, { useState } from 'react';
import './FormActions.css'
import Button from './Button';

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
            {resetVisible && <Button onClick={resetHandler}>{props.resetLabel}</Button>}
            {summitVisible && <Button onClick={summitHandler}>{props.summitLabel}</Button>}
        </div>
    );
}

export default FormActions;