import './CreateMenu.css'
import Collection from '../createCollection/Collection';
import FormActions from '../UI/FormActions';
import React from 'react';

const CreateMenu = (props) => {

    const resetHandler = () => {
        props.onReset();
    }

    const summitHandler = () => {
    }

    return (
        <div>
            <div>
                <Collection/>
            </div>
            <div className="createMenu">
                <FormActions onReset={resetHandler} onSummit={summitHandler} resetLabel='cancel' summitLabel='summit collection'/>
            </div>
        </div>
    );
}

export default CreateMenu;