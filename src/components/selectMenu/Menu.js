import './Menu.css';
import Scenarios from '../Scenarios/ScenariosList';
import CreateMenu from './CreateMenu';
import React from 'react';

const Menu = (props) => {

    const resetHandler = () => {
        props.onReset();
    }

    return (
        <div className="menu">
            {props.type === 'create' && <CreateMenu onReset={resetHandler}/>}
            {props.type === 'show' && <Scenarios/>}
        </div>
    )
};

export default Menu;